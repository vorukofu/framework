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
      sourceType: 'module',
    },

    plugins: {
      '@typescript-eslint': tseslint,
    },

    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },
])
