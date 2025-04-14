import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://thomasaidancurran.com/',
  devToolbar: {
    enabled: false,
  },
  build: {
    assets: '_assets',
  },
  prefetch: {
    prefetchAll: true,
  },
  experimental: {},
  output: 'static',
  trailingSlash: 'always',
  integrations: [tailwind({ applyBaseStyles: false }), react(), mdx()],
});
