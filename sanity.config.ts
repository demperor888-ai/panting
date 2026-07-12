import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/sanity/schema';
import { projectId, dataset, studioTitle } from './src/sanity/env';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: studioTitle,
  plugins: [
    structureTool(),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
