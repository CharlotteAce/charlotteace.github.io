import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import yaml from '@rollup/plugin-yaml';
import { SITE_ROOT } from './src/config/site';

import rehypeNormalizeLinks from './src/plugins/rehype-normalize-links.mjs';

export default defineConfig({
  site: SITE_ROOT,
  integrations: [react()],
  vite: {
    plugins: [yaml()],
  },
  markdown: {
    rehypePlugins: [
      [
        rehypeNormalizeLinks,
        {
          site: SITE_ROOT,
          isProd: process.env.NODE_ENV === 'production',
        },
      ],
    ],
  },
});
