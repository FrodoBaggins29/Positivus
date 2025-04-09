import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import github from '@astrojs/github';

export default defineConfig({
  site: "https://FroddoBaggins29.github.io/Positivus",
  integrations: [tailwind()],
  output: 'static',
  adapter: github(),
});
