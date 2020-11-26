import NodePath from 'path'
import RollupJson from '@rollup/plugin-json'
import RollupNodeResolve from '@rollup/plugin-node-resolve'
import RollupCommonjs from '@rollup/plugin-commonjs'
import RollupTypescript from 'rollup-plugin-typescript2'
import Package from '../package.json'
import babel from 'rollup-plugin-babel'
import VuePlugin from 'rollup-plugin-vue'
import jsx from 'acorn-jsx'
import { terser } from 'rollup-plugin-terser'

const babelConfig = require('../babel.config')
const DEV_ENV = process.env.LIB_ENV === 'dev'

// 这里需要将 @vue/babel-preset-jsx参数injectH设置为 false, 否则打包报错
// https://github.com/vuejs/jsx/issues/34
// babelConfig.presets[0] = [
//   '@vue/babel-preset-jsx',
//   {
//     injectH: false,
//   },
// ]

const resolveFile = path => NodePath.resolve(__dirname, '..', path)

const externalPackages = ['vue']
const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default {
  input: resolveFile(Package.source),
  output: [
    {
      file: resolveFile(Package.main),
      format: 'cjs',
      sourcemap: true
    },
    {
      file: resolveFile(Package.module),
      format: 'es',
      sourcemap: true
    },
    {
      file: resolveFile(Package.browser),
      format: 'umd',
      name: 'onebay-ui',
      sourcemap: true,
      globals: {}
    }
  ],
  external: externalPackages,
  acornInjectPlugins: [jsx()],
  plugins: [
    VuePlugin(),

    RollupNodeResolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      },
      extensions,
    }),
    RollupCommonjs({
      include: /\/node_modules\//
    }),
    RollupJson(),
    // !DEV_ENV && terser(),
    RollupTypescript({
      tsconfig: NodePath.resolve(__dirname, 'tsconfig.rollup.json'),
      include: ['*.ts+(|x)', '**/*.ts+(|x)'],
    }),
    babel({
      extensions,
      exclude: 'node_modules/**',
      // babelHelpers: 'runtime',
      runtimeHelpers: true,
      externalHelpers: true,
      plugins: ['transform-vue-jsx'],
    })
  ]
}