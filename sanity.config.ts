import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemas';

export default defineConfig({
  name: 'default',
  title: 'Presura Studio',

  // Clearly fake local configurations to restrict production dependencies
  projectId: 'local-placeholder',
  dataset: 'production',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
