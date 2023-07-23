import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import remarkToc from 'remark-toc';
import preact from "@astrojs/preact";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkToc]
  },
  integrations: [preact(), tailwind({
    applyBaseStyles: false
  }), mdx()]
});