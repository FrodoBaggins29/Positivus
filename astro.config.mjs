import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// Import the Vercel adapter
export default defineConfig({
  site: 'https://frodoBaggins29.github.io',
  base: '/Positivus',
  build: {
    exclude: ['/articles/search'], // Exclude this path
   exclude: ['src/pages/404.astro'],
 exclude: ['src/pages/about.astro'],
   },
})
