import path from 'node:path'
import { fileURLToPath } from 'node:url'
import dts from 'rollup-plugin-dts'

import alias from '@rollup/plugin-alias'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const aliasPlugin = alias({
  entries: [{ find: '@', replacement: path.resolve(__dirname, 'packages') }],
})

/*
 * JavaScript module
 */
/** @type {import('rollup').RollupOptions} */
const mainConfig = {
  input: 'packages/main.ts',
  output: [
    {
      file: 'build/index.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [aliasPlugin, typescript(), terser()],
}

/*
 * TypeScript module
 */
/** @type {import('rollup').RollupOptions} */
const dtsConfig = {
  input: 'packages/main.ts',
  output: {
    file: 'build/index.d.ts',
    format: 'es',
  },
  plugins: [aliasPlugin, dts()],
}

export default [mainConfig, dtsConfig]
