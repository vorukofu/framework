import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

/*
 * JavaScript module
 */
/** @type {import('rollup').RollupOptions} */
const mainConfig = {
  input: "packages/main.ts",
  output: [
    {
      file: "build/index.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [typescript(), terser()],
};

/*
 * TypeScript module
 */
/** @type {import('rollup').RollupOptions} */
const dtsConfig = {
  input: "packages/main.ts",
  output: {
    file: "build/index.d.ts",
    format: "es",
  },
  plugins: [dts()],
};

export default [mainConfig, dtsConfig];
