import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    
    compressHTML: false,
    outDir: '../docs',
    site: 'https://chatlotteace.github.io',
    build: {
        // Example: Generate `page.html` instead of `page/index.html` during build.
        format: 'file'
      }
    
});
