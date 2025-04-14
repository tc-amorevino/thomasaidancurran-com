import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import tailwindAnimate from 'tailwindcss-animate';
import colors from 'tailwindcss/colors';
import { hexToRgb } from './src/utils/colors';

export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': colors.rose[800],
            '--tw-prose-headings': colors.rose[900],
            '--tw-prose-lead': colors.rose[600],
            '--tw-prose-links': colors.rose[900],
            '--tw-prose-bold': colors.rose[900],
            '--tw-prose-counters': colors.rose[500],
            '--tw-prose-bullets': colors.rose[300],
            '--tw-prose-hr': colors.rose[200],
            '--tw-prose-quotes': colors.rose[900],
            '--tw-prose-quote-borders': colors.rose[200],
            '--tw-prose-captions': colors.rose[500],
            '--tw-prose-kbd': colors.rose[900],
            '--tw-prose-kbd-shadows': hexToRgb(colors.rose[900]),
            '--tw-prose-code': colors.rose[900],
            '--tw-prose-pre-code': colors.rose[200],
            '--tw-prose-pre-bg': colors.rose[800],
            '--tw-prose-th-borders': colors.rose[300],
            '--tw-prose-td-borders': colors.rose[200],
            '--tw-prose-invert-body': colors.rose[300],
            '--tw-prose-invert-headings': colors.white,
            '--tw-prose-invert-lead': colors.rose[400],
            '--tw-prose-invert-links': colors.white,
            '--tw-prose-invert-bold': colors.white,
            '--tw-prose-invert-counters': colors.rose[400],
            '--tw-prose-invert-bullets': colors.rose[600],
            '--tw-prose-invert-hr': colors.rose[700],
            '--tw-prose-invert-quotes': colors.rose[100],
            '--tw-prose-invert-quote-borders': colors.rose[700],
            '--tw-prose-invert-captions': colors.rose[400],
            '--tw-prose-invert-kbd': colors.white,
            '--tw-prose-invert-kbd-shadows': hexToRgb(colors.white),
            '--tw-prose-invert-code': colors.white,
            '--tw-prose-invert-pre-code': colors.rose[300],
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': colors.rose[600],
            '--tw-prose-invert-td-borders': colors.rose[700],
          },
        },
      },
    },
  },
  plugins: [tailwindAnimate, typography],
} satisfies Config;
