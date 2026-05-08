import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
export default defineConfig({
  site: 'https://charlotteace.github.io',
  integrations: [react()]
});