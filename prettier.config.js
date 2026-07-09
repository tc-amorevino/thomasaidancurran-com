/* eslint-disable jsdoc/check-tag-names */
/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
export default {
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss',
    'prettier-plugin-packagejson',
  ],
  tailwindConfig: './tailwind.config.ts',
  tailwindFunctions: ['clsx', 'classnames', 'ctl'],
  singleQuote: true,
  semi: true,
  printWidth: 80,
  tabWidth: 2,
  bracketSpacing: true,
  // htmlWhitespaceSensitivity: 'strict',
  // bracketSameLine: true,
  overrides: [
    {
      files: ['*.astro'],
      options: {
        parser: 'astro',
        bracketSameLine: true,
      },
    },
    {
      files: './src/styles/global.css',
      options: {
        printWidth: 120,
      },
    },
    {
      files: ['**/*.md', '**/*.mdx'],
      options: {
        printWidth: 120,
        useTabs: false,
        proseWrap: 'always',
      },
    },
  ],
};
