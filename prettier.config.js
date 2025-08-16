/** @type {import('prettier').Config} */
export default {
  /* Formatter */
  printWidth: 80,
  tabWidth: 2,
  bracketSameLine: true,
  useTabs: false,
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  endOfLine: 'lf',
  arrowParens: 'always',
  singleAttributePerLine: true,

  /* Plugins */
  plugins: ['@trivago/prettier-plugin-sort-imports'],

  /* Import sorter */
  importOrder: ['^[a-z]', '^@(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
}
