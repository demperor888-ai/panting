/**
 * 数据桥接层
 * 
 * 所有页面通过这个模块获取数据，不需要关心数据来源。
 * - 当 Sanity 已配置且有数据时 → 来自 Sanity
 * - 否则 → 回退到本地 siteData.ts
 */

import { projectId } from './env';

let sanityClient: any = null;

let _configured: boolean | null = null;

function isConfigured(): boolean {
  if (_configured !== null) return _configured;
  _configured = !!projectId;
  return _configured;
}

export function hasSanity(): boolean {
  return isConfigured();
}

function getClient(): import("@sanity/client").SanityClient | null {
  if (!sanityClient && isConfigured()) {
    const { createClient } = require('@sanity/client');
    const { sanityConfig } = require('./config');
    sanityClient = createClient(sanityConfig);
  }
  return sanityClient;
}

async function sanityFetch<T>(query: string, params?: Record<string, unknown>): Promise<T | null> {
  try {
    const client = getClient();
    if (!client) return null;
    return await (client as any).fetch(query, params || {}) as T;
  } catch (err) {
    console.warn('[Sanity] 查询失败:', err);
    return null;
  }
}

// ===================== 类型定义 =====================

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  image: string;
  date: string;
  views: number;
}

export interface CaseItem {
  id: string;
  title: string;
  client: string;
  location: string;
  description: string;
  image: string;
  contentImages?: string[];
  products: string[];
  date: string;
}

export interface BannerItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  order: number;
}

export interface SiteConfigItem {
  name: string;
  shortName: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  wechat: string;
  qq: string;
  workingHours: string;
}

// ===================== 工具函数 =====================

function mapSanityImage(img: any, fallback: string = '/images/products/products-2.jpg'): string {
  if (!img) return fallback;
  if (img.asset?._ref) {
    return `https://cdn.sanity.io/images/${projectId}/production/${img.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-jpeg', '.jpeg')}`;
  }
  if (typeof img === 'string') return img;
  return fallback;
}

function mapSanityImageArray(images: any[]): string[] {
  return (images || []).map((img: any) => mapSanityImage(img));
}

// ===================== 数据获取函数 =====================

const productFields = '{ _id, name, "slug": slug.current, category, description, features, image }';

export async function getProducts(): Promise<ProductItem[]> {
  const { initialProducts } = require('@/data/siteData');
  const data = await sanityFetch<any[]>('*[_type == "product"] | order(order asc) ' + productFields);
  if (data && data.length > 0) {
    return data.map((p: any) => {
      const local = initialProducts.find((x: any) => x.id === (p.slug || p._id));
      return {
        id: p.slug || p._id,
        name: p.name,
        category: p.category,
        description: p.description || '',
        image: mapSanityImage(p.image, local?.image),
        features: p.features || [],
      };
    });
  }
  return initialProducts as ProductItem[];
}

export async function getProductBySlug(slug: string): Promise<ProductItem | null> {
  const { initialProducts } = require('@/data/siteData');
  const data = await sanityFetch<any>('*[_type == "product" && slug.current == $slug][0] ' + productFields, { slug });
  if (data) {
    const local = initialProducts.find((x: any) => x.id === (data.slug || data._id));
    return {
      id: data.slug || data._id,
      name: data.name,
      category: data.category,
      description: data.description || '',
      image: mapSanityImage(data.image, local?.image),
      features: data.features || [],
    };
  }
  return initialProducts.find((p: any) => p.id === slug) || null;
}

export async function getRelatedProducts(slug: string, category: string): Promise<ProductItem[]> {
  const all = await getProducts();
  return all.filter(p => p.category === category && p.id !== slug).slice(0, 3);
}

export async function getNews(): Promise<NewsItem[]> {
  const { initialNews } = require('@/data/siteData');
  const data = await sanityFetch<any[]>('*[_type == "news"] | order(date desc) { _id, title, "slug": slug.current, category, summary, content, image, date, views }');
  if (data && data.length > 0) {
    return data.map((n: any) => {
      const local = initialNews.find((x: any) => x.id === (n.slug || n._id));
      return {
        id: n.slug || n._id,
        title: n.title,
        category: n.category,
        summary: n.summary || '',
        content: n.content || '',
        image: mapSanityImage(n.image, local?.image),
        date: n.date,
        views: n.views || 0,
      };
    });
  }
  return initialNews as NewsItem[];
}

export async function getNewsBySlug(slug: string): Promise<NewsItem | null> {
  const { initialNews } = require('@/data/siteData');
  const data = await sanityFetch<any>('*[_type == "news" && slug.current == $slug][0] { _id, title, "slug": slug.current, category, summary, content, image, date, views }', { slug });
  if (data) {
    const local = initialNews.find((x: any) => x.id === (data.slug || data._id));
    return {
      id: data.slug || data._id,
      title: data.title,
      category: data.category,
      summary: data.summary || '',
      content: data.content || '',
      image: mapSanityImage(data.image, local?.image),
      date: data.date,
      views: data.views || 0,
    };
  }
  return initialNews.find((n: any) => n.id === slug) || null;
}

export async function getRelatedNews(slug: string): Promise<NewsItem[]> {
  const all = await getNews();
  return all.filter(n => n.id !== slug).slice(0, 3);
}

export async function getCases(): Promise<CaseItem[]> {
  const { initialCases } = require('@/data/siteData');
  const data = await sanityFetch<any[]>('*[_type == "case"] | order(date desc) { _id, title, "slug": slug.current, client, location, description, image, contentImages, products, date }');
  if (data && data.length > 0) {
    return data.map((c: any) => {
      const local = initialCases.find((x: any) => x.id === (c.slug || c._id));
      return {
        id: c.slug || c._id,
        title: c.title,
        client: c.client || '',
        location: c.location || '',
        description: c.description || '',
        image: mapSanityImage(c.image, local?.image),
        contentImages: c.contentImages?.length ? mapSanityImageArray(c.contentImages) : local?.contentImages || [],
        products: c.products || [],
        date: c.date,
      };
    });
  }
  return initialCases as CaseItem[];
}

export async function getCaseBySlug(slug: string): Promise<CaseItem | null> {
  const { initialCases } = require('@/data/siteData');
  const data = await sanityFetch<any>('*[_type == "case" && slug.current == $slug][0] { _id, title, "slug": slug.current, client, location, description, image, contentImages, products, date }', { slug });
  if (data) {
    const local = initialCases.find((x: any) => x.id === (data.slug || data._id));
    return {
      id: data.slug || data._id,
      title: data.title,
      client: data.client || '',
      location: data.location || '',
      description: data.description || '',
      image: mapSanityImage(data.image, local?.image),
      contentImages: data.contentImages?.length ? mapSanityImageArray(data.contentImages) : local?.contentImages || [],
      products: data.products || [],
      date: data.date,
    };
  }
  return initialCases.find((c: any) => c.id === slug) || null;
}

export async function getBanners(): Promise<BannerItem[]> {
  const { initialBanners } = require('@/data/siteData');
  const data = await sanityFetch<any[]>('*[_type == "banner"] | order(order asc) { _id, title, subtitle, image, link, order }');
  if (data && data.length > 0) {
    return data.map((b: any) => {
      const local = initialBanners.find((x: any) => x.order === (b.order || 0));
      return {
        id: b._id,
        title: b.title,
        subtitle: b.subtitle || '',
        image: mapSanityImage(b.image, local?.image),
        link: b.link || '/products',
        order: b.order || 0,
      };
    });
  }
  return initialBanners as BannerItem[];
}

export async function getSiteConfig(): Promise<SiteConfigItem> {
  const data = await sanityFetch<any>('*[_type == "siteConfig"][0]');
  if (data) {
    return {
      name: data.name || '河南磐霆速科新材料科技有限公司',
      shortName: data.shortName || '磐霆速科',
      description: data.description || '',
      address: data.address || '',
      phone: data.phone || '',
      email: data.email || '',
      wechat: data.wechat || '',
      qq: data.qq || '',
      workingHours: data.workingHours || '',
    };
  }
  const { siteConfig } = require('@/data/siteData');
  return siteConfig as SiteConfigItem;
}

// ===================== 同步导出版本（给 client 组件在 mount 之前用） =====================

export { productCategories } from '@/data/siteData';
