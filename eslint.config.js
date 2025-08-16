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
      },
    },

    plugins: {
      '@typescript-eslint': tseslint,
      unicorn: eslintPluginUnicorn,
    },

    rules: {
      ...tseslint.configs.recommended.rules,
      ...eslintPluginUnicorn.configs.recommended.rules,
      'unicorn/filename-case': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'unicorn/prefer-event-target': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/prefer-query-selector': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'unicorn/prefer-add-event-listener': 'off',
      'unicorn/prevent-abbreviations': 'off',
    },
  },
])
