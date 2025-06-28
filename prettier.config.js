/* eslint-disable jsdoc/check-tag-names */
/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
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

export default config;
