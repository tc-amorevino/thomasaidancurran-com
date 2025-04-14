// @ts-check

// Globals
import globals from 'globals';
import eslint from '@eslint/js';
import typescriptEslint from 'typescript-eslint';

// Plugins
// import prettier from 'eslint-plugin-prettier';
import prettier from 'eslint-config-prettier/flat';
import astro from 'eslint-plugin-astro';
import tailwindcss from 'eslint-plugin-tailwindcss';
import jsdoc from 'eslint-plugin-jsdoc';
import * as mdx from 'eslint-plugin-mdx'; // notes
import react from 'eslint-plugin-react'; // notes

export default typescriptEslint.config(
  // Ignores
  {
    ignores: ['dist', 'node_modules', '.astro', '.github', '.public'],
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
  // Astro Framework config
  ...astro.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      sourceType: 'module',
      ecmaVersion: 'latest',
      parser: typescriptEslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  // Additional config
  // TypeScript config
  {
    files: ['**/*.ts', '**/*.tsx'],
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
    files: ['**/*.mdx'],
    ...mdx.flat,
  },
);
