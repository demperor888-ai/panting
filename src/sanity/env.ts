/**
 * Sanity 环境配置 —— 读取环境变量，提供安全兜底
 * 在 Vercel 上通过 Dashboard → Environment Variables 设置
 */

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'zpptbf6v';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-01';

export const studioTitle = '磐霆速科 内容管理后台';

export function assertCredentials() {
  if (!projectId) {
    throw new Error(
      '缺少 Sanity 项目 ID。\n\n' +
      '请在项目根目录创建 .env.local 文件，添加：\n' +
      'NEXT_PUBLIC_SANITY_PROJECT_ID=你的项目ID\n\n' +
      '或者运行: npx sanity init'
    );
  }
}
