// @ts-check

// Globals
import globals from 'globals';
import eslint from '@eslint/js';
import typescriptEslint from 'typescript-eslint';

// Plugins
import prettier from 'eslint-config-prettier';
import astro from 'eslint-plugin-astro';
import tailwindcss from 'eslint-plugin-tailwindcss';
import jsdoc from 'eslint-plugin-jsdoc';
import * as mdx from 'eslint-plugin-mdx';
import react from 'eslint-plugin-react';

export default typescriptEslint.config(
  // Ignores
  {
    ignores: ['dist', 'node_modules', '.github', '.public'],
  },
  // Base config
  // JavaScript config
  eslint.configs.recommended,
  // TypeScript config
  ...typescriptEslint.configs.recommendedTypeChecked,
  // Style config
  prettier,
  // CSS Class config
  ...tailwindcss.configs['flat/recommended'],
  {
    settings: {},
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      sourceType: 'module',
      ecmaVersion: 'latest',
      parser: typescriptEslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
        extraFileExtensions: ['.astro'],
      },
    },
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    },
  },
  // Astro Framework config
  ...astro.configs.recommended,

  // TypeScript config
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['**/*.mdx/**.ts', '**/*.mdx/**.tsx'],
    ...jsdoc.configs['flat/recommended-typescript'],
  },

  // TypeScript Def config
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },

  // React config
  {
    files: ['**/*.tsx'],
    ...react.configs.flat.recommended,
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },

  // Markdown config
  {
    files: ['**/**.mdx'],
    ...mdx.flat,
  },
);
