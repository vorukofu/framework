import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import { defineConfig, globalIgnores } from 'eslint/config'

import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'

export default defineConfig([
  /* Ignore patterns */
  globalIgnores(['node_modules/*', 'build/*']),

  /* Main configuration */
  {
    files: ['**/*.ts'],

    languageOptions: {
      parser: tsparser,
      parserOptions: {
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },

    plugins: {
      '@typescript-eslint': tseslint,
      unicorn: eslintPluginUnicorn,
    },

    rules: {
      ...tseslint.configs.recommended.rules,
      ...eslintPluginUnicorn.configs.recommended.rules,
    },
  },
])
