import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
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
  experimental: {
    csp: true,
    contentIntellisense: true,
    fonts: [
      {
        provider: 'local',
        name: 'NotoSans',
        cssVariable: '--font-notosans',
        fallbacks: ['sans-serif'],
        variants: [
          {
            src: [
              {
                url: './src/lib/fonts/NotoSans-VariableFont_wdth,wght.ttf',
                tech: 'variations',
              },
            ],
            weight: '300 400 500 600 700',
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
            weight: '300 400 500 600 700',
            style: 'italic',
            display: 'swap',
          },
        ],
      },
      {
        provider: 'local',
        name: 'NotoSansCondensed',
        cssVariable: '--font-notosanscondensed',
        fallbacks: ['sans-serif'],
        variants: [
          {
            src: [
              {
                url: './src/lib/fonts/NotoSans-VariableFont_wdth,wght.ttf',
                tech: 'variations',
              },
            ],
            weight: '200 400 600 ',
            style: 'normal',
            display: 'swap',
            variationSettings: "'wdth' 75",
          },
        ],
      },
      {
        provider: 'local',
        name: 'NotoSansMono',
        cssVariable: '--font-notosansmono',
        fallbacks: ['monospace'],
        variants: [
          {
            src: [
              {
                url: './src/lib/fonts/NotoSansMono-VariableFont_wdth,wght.ttf',
                tech: 'variations',
              },
            ],
            weight: '300 400 500 600 700',
            style: 'normal',
            display: 'swap',
          },
        ],
      },
    ],
  },
  output: 'static',
  trailingSlash: 'always',
  scopedStyleStrategy: 'class',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
    sitemap(),
    // To DO: Remove this when astro-html-beautifier is updated to support TypeScript
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    htmlBeautifier(),
  ],
});
