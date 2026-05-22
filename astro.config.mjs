import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import yaml from '@rollup/plugin-yaml';

import rehypeNormalizeLinks from './src/plugins/rehype-normalize-links.mjs';

export default defineConfig({
  site: "https://charlotteace.github.io",
  integrations: [react()],
  vite: {
    plugins: [yaml()],
  },
  markdown: {
    rehypePlugins: [
      [
        rehypeNormalizeLinks,
        {
          site: 'https://charlotteace.github.io',
          isProd: process.env.NODE_ENV === 'production',
        },
      ],
    ],
  },
});
