/**
 * 数据迁移脚本
 *
 * 把 siteData.ts 中的所有数据导入 Sanity
 *
 * 使用方法：
 *   1. 先设置环境变量 SANITY_API_TOKEN（需要在 Sanity 后台创建 API token）
 *   2. 运行: npx tsx scripts/migrate-to-sanity.ts
 *
 * 注意：图片不会自动上传，迁移后请在 Sanity Studio 中手动上传图片
 */

import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiToken = process.env.SANITY_API_TOKEN || '';

if (!projectId || !apiToken) {
  console.error('\n\u274c 请先设置环境变量：');
  console.error('  NEXT_PUBLIC_SANITY_PROJECT_ID=你的项目ID');
  console.error('  SANITY_API_TOKEN=你的API写权限Token');
  console.error('\n在 Sanity 后台 \u2192 API \u2192 Tokens \u2192 Add API token 创建');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token: apiToken,
  apiVersion: '2025-01-01',
  useCdn: false,
});

// eslint-disable-next-line @typescript-eslint/no-var-requires
const {
  initialProducts,
  initialNews,
  initialCases,
  initialBanners,
  siteConfig,
  // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require('../src/data/siteData');

async function migrateProducts() {
  console.log(`\n\ud83d\udce6 迁移产品 (${initialProducts.length} 个)...`);
  for (const p of initialProducts) {
    const doc = {
      _type: 'product',
      _id: `product-${p.id}`,
      name: p.name,
      slug: { _type: 'slug', current: p.id },
      category: p.category,
      description: p.description,
      features: p.features,
      order: 0,
    };
    try {
      await client.createIfNotExists(doc);
      console.log(`  \u2705 ${p.name}`);
    } catch (err: any) {
      console.error(`  \u274c ${p.name}: ${err.message}`);
    }
  }
}

async function migrateNews() {
  console.log(`\n\ud83d\udcf0 迁移新闻 (${initialNews.length} 篇)...`);
  for (const n of initialNews) {
    const doc = {
      _type: 'news',
      _id: `news-${n.id}`,
      title: n.title,
      slug: { _type: 'slug', current: n.id },
      category: n.category,
      summary: n.summary,
      content: n.content,
      date: n.date,
      views: n.views,
    };
    try {
      await client.createIfNotExists(doc);
      console.log(`  \u2705 ${n.title}`);
    } catch (err: any) {
      console.error(`  \u274c ${n.title}: ${err.message}`);
    }
  }
}

async function migrateCases() {
  console.log(`\n\ud83c\udfd7\ufe0f 迁移案例 (${initialCases.length} 个)...`);
  for (const c of initialCases) {
    const doc = {
      _type: 'case',
      _id: `case-${c.id}`,
      title: c.title,
      slug: { _type: 'slug', current: c.id },
      client: c.client,
      location: c.location,
      description: c.description,
      products: c.products,
      date: c.date,
    };
    try {
      await client.createIfNotExists(doc);
      console.log(`  \u2705 ${c.title}`);
    } catch (err: any) {
      console.error(`  \u274c ${c.title}: ${err.message}`);
    }
  }
}

async function migrateBanners() {
  console.log(`\n\ud83d\uddbc\ufe0f 迁移轮播 (${initialBanners.length} 个)...`);
  for (const b of initialBanners) {
    const doc = {
      _type: 'banner',
      _id: `banner-${b.id}`,
      title: b.title,
      subtitle: b.subtitle,
      link: b.link,
      order: b.order,
    };
    try {
      await client.createIfNotExists(doc);
      console.log(`  \u2705 ${b.title}`);
    } catch (err: any) {
      console.error(`  \u274c ${b.title}: ${err.message}`);
    }
  }
}

async function migrateSiteConfig() {
  console.log(`\n\u2699\ufe0f 迁移公司配置...`);
  const doc = {
    _type: 'siteConfig',
    _id: 'siteConfig',
    name: siteConfig.name,
    shortName: siteConfig.shortName,
    description: siteConfig.description,
    address: siteConfig.address,
    phone: siteConfig.phone,
    email: siteConfig.email,
    wechat: siteConfig.wechat,
    workingHours: siteConfig.workingHours,
  };
  try {
    await client.createIfNotExists(doc);
    console.log(`  \u2705 公司配置`);
  } catch (err: any) {
    console.error(`  \u274c 公司配置: ${err.message}`);
  }
}

async function main() {
  console.log('========================================');
  console.log('  磐霆速科 \u2192 Sanity 数据迁移');
  console.log(`  项目: ${projectId} / ${dataset}`);
  console.log('========================================');

  await migrateProducts();
  await migrateNews();
  await migrateCases();
  await migrateBanners();
  await migrateSiteConfig();

  console.log('\n\u2705 迁移完成！');
  console.log('\n\ud83d\udccc 下一步：');
  console.log('  1. 打开 /studio 登录后台');
  console.log('  2. 为每个产品、新闻、案例上传图片');
  console.log('  3. 检查数据是否正确');
}

main().catch(console.error);
