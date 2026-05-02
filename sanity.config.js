import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schema } from './sanity/schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'Darut Taqwa Studio', // Konsisten dengan nama institusi

  // Update ke ID proyek terbaru sesuai data .env kamu
  projectId: 'u9n0ne1d', 
  dataset: 'production',

  basePath: '/studio', 

  plugins: [
    structureTool(), 
    visionTool()
  ],

  schema: {
    types: schema.types,
  },
});