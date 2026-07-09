// @ts-check

// Sample
// https://github.com/withastro/docs/blob/main/eslint.config.mjs

// Plugins
import eslint from '@eslint/js';
import astroParser from 'astro-eslint-parser';
import { defineConfig } from 'eslint/config';
import astro from 'eslint-plugin-astro';
import jsdoc from 'eslint-plugin-jsdoc';
import * as mdx from 'eslint-plugin-mdx';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import typescriptEslint from 'typescript-eslint';
export default defineConfig(
  // Ignores
  {
    ignores: ['dist/', '.astro/'],
  },
  // JavaScript / TypeScript config
  {
    files: ['**/*.{js,ts,jsx,tsx}'], //
    extends: [
      eslint.configs.recommended,
      typescriptEslint.configs.recommendedTypeChecked,
    ],
  },
  // Code Style config
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
    },
  },
  // JSDoc config
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    extends: [jsdoc.configs['flat/recommended-typescript']],
  },
  // Javascript / Typescript Custom config
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
      },
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
  {
    files: ['**/*.astro'],
    rules: {
      '@typescript-eslint/no-misused-promises': 'off',
    },
    extends: [
      eslint.configs.recommended,
      typescriptEslint.configs.recommendedTypeChecked,
      astro.configs.recommended,
    ],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: typescriptEslint.parser,
        extraFileExtensions: ['.astro'],
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // Markdown config
  {
    files: ['**/*.mdx'],
    extends: [mdx.flat],
  },
);
