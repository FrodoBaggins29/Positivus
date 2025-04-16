import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// Import the Vercel adapter
import github from '@astrojs/github-pages';

// https://astro.build/config
export default defineConfig({
  site: "https://frodobaggins29.github.io/Positivus",
  integrations: [tailwind()],
  output: 'static',
  adapter: github(),
});
