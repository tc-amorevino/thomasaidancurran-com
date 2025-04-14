/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  plugins: [
    'prettier-plugin-tailwindcss',
    'prettier-plugin-astro',
  ],
  singleQuote: true,
  semi: true,
  printWidth: 80,
  tabWidth: 2,
  bracketSpacing: true,
  endOfLine: 'lf',
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
        useTabs: false,
        proseWrap: 'always',
      },
    },
  ],
};

export default config;
