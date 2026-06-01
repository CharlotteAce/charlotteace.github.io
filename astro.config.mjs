import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import yaml from '@rollup/plugin-yaml';

import rehypeNormalizeLinks from './src/plugins/rehype-normalize-links.mjs';
const SITE_URL = 'https://charlotteace.jp';


export default defineConfig({
  site: SITE_URL,
  integrations: [react()],
  vite: {
    plugins: [yaml()],
  },
  markdown: {
    rehypePlugins: [
      [
        rehypeNormalizeLinks,
        {
          site: SITE_URL,
          isProd: process.env.NODE_ENV === 'production',
        },
      ],
    ],
  },
});
