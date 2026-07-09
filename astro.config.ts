import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';
import htmlBeautifier from 'astro-html-beautifier';

export default defineConfig({
  site: 'https://thomasaidancurran.com/',
  devToolbar: {
    enabled: false,
  },
  build: {
    assets: '_assets',
  },
  image: {},
  markdown: {
    syntaxHighlight: false,
  },
  security: {
    csp: {},
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'NotoSans',
      cssVariable: '--font-notosans',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          {
            src: [
              {
                url: './src/lib/fonts/NotoSans-VariableFont_wdth,wght.ttf',
                tech: 'variations',
              },
            ],
            weight: '300 700',
            style: 'normal',
            display: 'swap',
          },
          {
            src: [
              {
                url: './src/lib/fonts/NotoSans-Italic-VariableFont_wdth,wght.ttf',
                tech: 'variations',
              },
            ],
            weight: '300 700',
            style: 'italic',
            display: 'swap',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'NotoSansCondensed',
      cssVariable: '--font-notosanscondensed',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          {
            src: [
              {
                url: './src/lib/fonts/NotoSans-VariableFont_wdth,wght.ttf',
                tech: 'variations',
              },
            ],
            weight: '200 600 ',
            style: 'normal',
            display: 'swap',
            variationSettings: "'wdth' 75",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'NotoSansMono',
      cssVariable: '--font-notosansmono',
      fallbacks: ['monospace'],
      options: {
        variants: [
          {
            src: [
              {
                url: './src/lib/fonts/NotoSansMono-VariableFont_wdth,wght.ttf',
                tech: 'variations',
              },
            ],
            weight: '300 700',
            style: 'normal',
            display: 'swap',
          },
        ],
      },
    },
  ],
  output: 'static',
  trailingSlash: 'always',
  scopedStyleStrategy: 'class',
  integrations: [
    mdx(),
    sitemap(),
    // NOTE: Currently using a local shim until upstream fixes its export map.
    // TODO: Remove this when astro-html-beautifier is updated to support
    // TypeScript.
    htmlBeautifier(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
