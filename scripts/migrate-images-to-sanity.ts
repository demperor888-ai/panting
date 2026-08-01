/**
 * 图片迁移脚本
 *
 * 把 siteData.ts 中的本地图片上传到 Sanity，并挂到对应文档的 image/contentImages 字段。
 * 只对尚未设置图片的文档写入（setIfMissing），不会覆盖后台手动上传的图片。
 *
 * 使用方法：
 *   1. 确认 .env.local 中有 SANITY_API_TOKEN
 *   2. 运行: npx tsx scripts/migrate-images-to-sanity.ts
 */

import fs from 'fs';
import path from 'path';
import { createClient } from '@sanity/client';

function loadEnvFile(): Record<string, string> {
  const envPath = path.join(process.cwd(), '.env.local');
  if (!fs.existsSync(envPath)) return {};
  const env: Record<string, string> = {};
  for (const line of fs.readFileSync(envPath, 'utf-8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq <= 0) continue;
    env[trimmed.slice(0, eq).trim()] = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, '');
  }
  return env;
}

const env = loadEnvFile();
const projectId = env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const dataset = env.NEXT_PUBLIC_SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiToken = env.SANITY_API_TOKEN || process.env.SANITY_API_TOKEN || '';

if (!projectId || !apiToken) {
  console.error('\n\u274c 请先配置 .env.local：NEXT_PUBLIC_SANITY_PROJECT_ID 和 SANITY_API_TOKEN');
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
  // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require('../src/data/siteData');

const uploadedAssets = new Map<string, string>();
let uploadedCount = 0;
let linkedCount = 0;
let failedCount = 0;

async function uploadImage(relPath: string, title: string): Promise<string | null> {
  if (!relPath) return null;
  const filePath = path.join(process.cwd(), 'public', relPath.replace(/^\//, ''));
  if (!fs.existsSync(filePath)) {
    console.warn(`  \u26a0\ufe0f 文件不存在，跳过: ${relPath}`);
    return null;
  }
  if (uploadedAssets.has(filePath)) return uploadedAssets.get(filePath)!;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const asset = await client.assets.upload('image', fs.createReadStream(filePath), {
        filename: path.basename(filePath),
        title,
      });
      uploadedAssets.set(filePath, asset._id);
      uploadedCount += 1;
      return asset._id;
    } catch (err: any) {
      if (attempt === 3) {
        console.error(`  \u274c 上传失败 ${relPath}: ${err.message}`);
        failedCount += 1;
        return null;
      }
      console.warn(`  \u21bb ${relPath} 第 ${attempt} 次失败，重试中...`);
      await new Promise((r) => setTimeout(r, 2000 * attempt));
    }
  }
  return null;
}

async function loadExistingAssets(): Promise<Map<string, string>> {
  const assets = await client.fetch<any[]>('*[_type == "sanity.imageAsset"] { _id, originalFilename }');
  const byName = new Map<string, string>();
  for (const a of assets) {
    if (a.originalFilename && !byName.has(a.originalFilename)) {
      byName.set(a.originalFilename, a._id);
    }
  }
  return byName;
}

async function loadDocsWithImages(type: string): Promise<Map<string, { hasImage: boolean; hasContentImages: boolean }>> {
  const docs = await client.fetch<any[]>(
    `*[_type == $type] { _id, "hasImage": defined(image), "hasContentImages": count(contentImages) > 0 }`,
    { type }
  );
  const map = new Map<string, { hasImage: boolean; hasContentImages: boolean }>();
  for (const d of docs) map.set(d._id, { hasImage: d.hasImage, hasContentImages: d.hasContentImages });
  return map;
}

async function uploadImageWithExisting(
  relPath: string,
  title: string,
  existingAssets: Map<string, string>
): Promise<string | null> {
  const fileName = relPath.split('/').pop() || '';
  const cached = existingAssets.get(fileName);
  if (cached) {
    uploadedAssets.set(path.join(process.cwd(), 'public', relPath.replace(/^\//, '')), cached);
    return cached;
  }
  const assetId = await uploadImage(relPath, title);
  if (assetId && fileName) existingAssets.set(fileName, assetId);
  return assetId;
}

async function setImageIfMissing(
  docId: string,
  relPath: string,
  title: string,
  existingAssets?: Map<string, string>
): Promise<boolean> {
  const assetId = existingAssets
    ? await uploadImageWithExisting(relPath, title, existingAssets)
    : await uploadImage(relPath, title);
  if (!assetId) return false;
  await client
    .patch(docId)
    .setIfMissing({
      image: {
        _type: 'image',
        asset: { _type: 'reference', _ref: assetId },
      },
    })
    .commit();
  return true;
}

async function migrateProducts() {
  const existingAssets = await loadExistingAssets();
  const docState = await loadDocsWithImages('product');
  console.log(`\n\ud83d\udce6 产品封面 (${initialProducts.length} 个)...`);
  for (const p of initialProducts) {
    const state = docState.get(`product-${p.id}`);
    if (state?.hasImage) continue;
    const ok = await setImageIfMissing(`product-${p.id}`, p.image, p.name, existingAssets);
    if (ok) linkedCount += 1;
  }
}

async function migrateNews() {
  const existingAssets = await loadExistingAssets();
  const docState = await loadDocsWithImages('news');
  console.log(`\n\ud83d\udcf0 新闻封面 (${initialNews.length} 篇)...`);
  for (const n of initialNews) {
    const state = docState.get(`news-${n.id}`);
    if (state?.hasImage) continue;
    const ok = await setImageIfMissing(`news-${n.id}`, n.image, n.title, existingAssets);
    if (ok) linkedCount += 1;
  }
}

async function migrateCases() {
  const existingAssets = await loadExistingAssets();
  const docState = await loadDocsWithImages('case');
  console.log(`\n\ud83c\udfd7\ufe0f 案例封面与图集 (${initialCases.length} 个)...`);
  for (const c of initialCases) {
    const state = docState.get(`case-${c.id}`);
    if (!state?.hasImage) {
      const coverOk = await setImageIfMissing(`case-${c.id}`, c.image, c.title, existingAssets);
      if (coverOk) linkedCount += 1;
    }

    if (c.contentImages?.length && !state?.hasContentImages) {
      const assetIds: string[] = [];
      for (const img of c.contentImages) {
        const assetId = await uploadImageWithExisting(img, `${c.title} 图集`, existingAssets);
        if (assetId) assetIds.push(assetId);
      }
      if (assetIds.length) {
        await client
          .patch(`case-${c.id}`)
          .setIfMissing({
            contentImages: assetIds.map((assetId) => ({
              _type: 'image',
              asset: { _type: 'reference', _ref: assetId },
            })),
          })
          .commit();
      }
    }
  }
}

async function migrateBanners() {
  const existingAssets = await loadExistingAssets();
  const docState = await loadDocsWithImages('banner');
  console.log(`\n\ud83d\uddbc\ufe0f 首页轮播 (${initialBanners.length} 个)...`);
  for (const b of initialBanners) {
    const state = docState.get(`banner-${b.id}`);
    if (state?.hasImage) continue;
    const ok = await setImageIfMissing(`banner-${b.id}`, b.image, b.title, existingAssets);
    if (ok) linkedCount += 1;
  }
}

async function main() {
  console.log('========================================');
  console.log('  磐霆速科 \u2192 Sanity 图片迁移');
  console.log(`  项目: ${projectId} / ${dataset}`);
  console.log('========================================');

  await migrateProducts();
  await migrateNews();
  await migrateCases();
  await migrateBanners();

  console.log(`\n\u2705 完成！新上传 ${uploadedCount} 个图片，已写入 ${linkedCount} 个文档，失败 ${failedCount} 个。`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
