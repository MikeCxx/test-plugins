const path = require('path');
const { default: resolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const typescript = require('rollup-plugin-typescript2');
const packageJSON = require('./package.json');

const getPath = _path => path.resolve(__dirname, _path);

const extensions = ['.mjs', '.js', '.ts', '.json', '.node']

module.exports = {
  input: getPath('src/index.ts'),
  plugins: [
    resolve({ extensions }),
    commonjs(),
    json(),
    typescript({
      tsconfig: getPath('tsconfig.json'),
    }),
  ],
  output: {
    file: packageJSON.main,
    format: 'cjs',
    sourcemap: false,
  },
};
