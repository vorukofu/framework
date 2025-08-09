import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'packages/stand',
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'packages'),
    },
  },
})
