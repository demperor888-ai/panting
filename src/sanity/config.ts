import { projectId, dataset, apiVersion } from './env';

/** 全局共享的 Sanity 连接配置 */
export const sanityConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: typeof document !== 'undefined',
};
