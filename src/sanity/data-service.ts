/**
 * 统一数据服务层
 * 
 * 当 Sanity 已配置时 → 从 Sanity 取数据
 * 当 Sanity 未配置时 → 回退到本地 siteData.ts
 * 
 * 前端页面只需要导入这个模块，不用关心数据来源。
 */

import { projectId } from './env';

// 只在 Sanity 配置了的情况下才加载客户端
let client: import('@sanity/client').SanityClient | null = null;
let urlFor: ((source: any) => any) | null = null;

function ensureClient() {
  if (!projectId) return false;
  if (!client) {
    const { createClient } = require('@sanity/client') as typeof import('@sanity/client');
    const { sanityConfig } = require('./config');
    client = createClient(sanityConfig);

    const imageUrlBuilder = require('@sanity/image-url') as typeof import('@sanity/image-url');
    const builder = imageUrlBuilder.default?.(client) ?? imageUrlBuilder.default(client);
    urlFor = (source: any) => builder.image(source).url();
  }
  return true;
}

export function hasSanity(): boolean {
  return !!projectId;
}

// ===================== Server-side fetch (for SSG / generateStaticParams) =====================

export async function fetchData<T>(query: string, params?: Record<string, unknown>): Promise<T> {
  if (!ensureClient() || !client) {
    return getFallbackData<T>(query, params);
  }
  try {
    return await client.fetch<T>(query, params || {});
  } catch {
    console.warn('[Sanity] 查询失败，回退到本地数据');
    return getFallbackData<T>(query, params);
  }
}

// ===================== Fallback: 从 siteData.ts 取出对应的数据 =====================

function getFallbackData<T>(query: string, params?: Record<string, unknown>): T {
  const sd = require('@/data/siteData');

  // 根据 GROQ 查询特征判断返回什么数据
  if (query.includes('"banner"')) return (sd.initialBanners || []) as T;
  if (query.includes('"siteConfig"')) return (sd.siteConfig || {}) as T;

  if (query.includes('"product"')) {
    let products = [...sd.initialProducts];
    if (params?.slug) products = products.filter((p: any) => p.id === params!.slug);
    if (params?.category) products = products.filter((p: any) => p.category === params!.category);
    if (query.includes('[0]')) return (products[0] || null) as T;
    if (query.includes('[0...6]')) return (products.slice(0, 6)) as T;
    return products as T;
  }

  if (query.includes('"news"')) {
    let news = [...sd.initialNews];
    if (params?.slug) news = news.filter((n: any) => n.id === params!.slug);
    if (params?.category) news = news.filter((n: any) => n.category === params!.category);
    if (query.includes('[0]')) return (news[0] || null) as T;
    if (query.includes('[0...3]')) return (news.slice(0, 3)) as T;
    if (query.includes('[0...4]')) return (news.slice(0, 4)) as T;
    return news as T;
  }

  if (query.includes('"case"')) {
    let cases = [...sd.initialCases];
    if (params?.slug) cases = cases.filter((c: any) => c.id === params!.slug);
    if (query.includes('[0]')) return (cases[0] || null) as T;
    if (query.includes('[0...3]')) return (cases.slice(0, 3)) as T;
    return cases as T;
  }

  return [] as T;
}
