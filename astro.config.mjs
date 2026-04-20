// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

const sites = {
  web: 'https://orangeliner.net',
  blog: 'https://blog.orangeliner.net',
};

const siteId = process.env.SITE_ID || 'web';

// https://astro.build/config
export default defineConfig({
  site: sites[siteId],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
