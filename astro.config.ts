import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField, fontProviders } from 'astro/config';
import htmlBeautifier from 'astro-html-beautifier';
import { loadEnv } from 'vite';

// Manually load the environment into the config, as Astro by default exposes
// the environment variables only after processing the configuration file during
// the build step. We know certain environment variables will be available as
// they are validated during build time.
// https://main.vite.dev/config/#using-environment-variables-in-config
const hotEnv = loadEnv(process.env.NODE_ENV ?? '', process.cwd(), 'PUBLIC_');
const defaultSiteUrl = 'https://thomasaidancurran.com/';

export default defineConfig({
  site: hotEnv.PUBLIC_SITE_URL || defaultSiteUrl,

  devToolbar: {
    enabled: false,
  },

  env: {
    schema: {
      PUBLIC_SITE_URL: envField.string({
        context: 'client',
        access: 'public',
        optional: false,
        default: defaultSiteUrl,
      }),
    },
    validateSecrets: true,
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
  integrations: [mdx(), sitemap(), htmlBeautifier()],
  vite: {
    plugins: [tailwindcss()],
  },
});
