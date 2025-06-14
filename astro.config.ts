import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

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
  experimental: {
    contentIntellisense: true,
  },
  output: 'static',
  trailingSlash: 'never',
  scopedStyleStrategy: 'class',
  integrations: [tailwind({ applyBaseStyles: false }), mdx(), sitemap()],
});
