import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src/stand',
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
