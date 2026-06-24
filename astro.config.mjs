// @ts-check

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { remarkDefaultLayout } from './plugins/remark-default-layout.mjs';

const sites = {
  web: 'https://orangeliner.net',
  blog: 'https://blog.orangeliner.net',
};

const siteId = /** @type {keyof typeof sites} */ (process.env.SITE_ID || 'web');

// https://astro.build/config
export default defineConfig({
  site: sites[siteId],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    define: {
      'import.meta.env.SITE_ID': JSON.stringify(siteId),
    },
  },

  markdown: {
    remarkPlugins: [
      [
        remarkDefaultLayout,
        '/layouts/MarkDownPageLayout.astro',
      ],
    ],
  },

  integrations: [
    sitemap(),
  ],
});
