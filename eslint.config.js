// @ts-check

// Plugins
import eslint from '@eslint/js';
import astro from 'eslint-plugin-astro';
import jsdoc from 'eslint-plugin-jsdoc';
import * as mdx from 'eslint-plugin-mdx';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tailwindcss from 'eslint-plugin-tailwindcss';
import globals from 'globals';
import typescriptEslint from 'typescript-eslint';

// export default typescriptEslint.config(
export default typescriptEslint.config(
  // Ignores
  {
    ignores: [
      'dist/',
      '.astro/',
      '**/**/node_modules',
      '**/.github',
      '**/*.mdx/**.ts', // remove maybe
    ],
  },
  // JavaScript config
  {
    files: ['**/*.{js}'], //
    extends: [eslint.configs.recommended],
  },

  // TypeScript config
  {
    files: ['**/*.{ts}'],
    extends: [typescriptEslint.configs.recommended],
  },

  // typescriptEslint.configs.eslintRecommended,

  // Code Style config
  {
    extends: [tailwindcss.configs['flat/recommended']],
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'tailwindcss/no-custom-classname': 'off',
      'simple-import-sort/exports': 'error',
    },
  },

  // JSDoc config
  {
    files: ['**/*.{js,ts}'],
    extends: [jsdoc.configs['flat/recommended-typescript-error']],
  },

  // Javascript / Typescript Custom config
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      sourceType: 'module',
      ecmaVersion: 'latest',
      parser: typescriptEslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // TypeScript Definitions config
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },

  // Astro Framework config
  ...astro.configs.recommended,
  {
    files: ['**/*.astro'],
    languageOptions: {
      parserOptions: {
        extraFileExtensions: ['.astro'],
        // project: './tsconfig.json',
        // sourceType: 'module',
      },
    },
  },

  // Markdown config
  {
    files: ['**/*.mdx'],
    extends: [mdx.flat],
  },
);
