import NodePath from 'path'
import RollupJson from '@rollup/plugin-json'
import RollupNodeResolve from '@rollup/plugin-node-resolve'
import RollupCommonjs from '@rollup/plugin-commonjs'
import RollupTypescript from 'rollup-plugin-typescript2'
import Package from '../package.json'
import babel from 'rollup-plugin-babel'
import VuePlugin from 'rollup-plugin-vue'
import jsx from 'acorn-jsx'
import glob from 'glob'
import scss from 'rollup-plugin-scss'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
// import { terser } from 'rollup-plugin-terser'
// const DEV_ENV = process.env.LIB_ENV === 'dev'

const resolveFile = (path) => NodePath.resolve(__dirname, '..', path)

const externalPackages = ['vue']
const extensions = ['.js', '.jsx', '.ts', '.tsx']

const tsxFiles = glob.sync(NodePath.resolve(__dirname, '../src/components/**/index.tsx'))
const scssFiles = glob.sync(NodePath.resolve(__dirname, '../src/style/components/*.scss'))

const getCommonConfig = (ts = false) => {
  return {
    external: externalPackages,
    acornInjectPlugins: [jsx()],
    plugins: [
      VuePlugin(),

      RollupNodeResolve({
        customResolveOptions: {
          moduleDirectory: 'node_modules'
        },
        extensions
      }),
      RollupCommonjs({
        include: /\/node_modules\//
      }),
      RollupJson(),
      // !DEV_ENV && terser(),
      ts
        ? RollupTypescript({
          tsconfig: NodePath.resolve(__dirname, 'tsconfig.rollup.json'),
          include: ['*.ts+(|x)', '**/*.ts+(|x)']
        })
        : null,
      babel({
        extensions,
        exclude: 'node_modules/**',
        // babelHelpers: 'runtime',
        runtimeHelpers: true,
        externalHelpers: true,
        plugins: ['@babel/plugin-transform-runtime']
      })
    ]
  }
}

const scssTasks = scssFiles.map((item) => {
  const paths = item.split('/')
  const name = paths[paths.length - 1].replace('.scss', '')
  return {
    input: resolveFile(`src/style/components/${name}.scss`),
    plugins: [
      scss({
        output: `dist/style/${name}.css`,
        processor: (css) =>
          postcss([autoprefixer])
            .process(css)
            .then((result) => result.css)
      })
    ]
  }
})
// const configs = []
const configs = tsxFiles
  .filter((item) => {
    const paths = item.split('/')
    return paths[paths.length - 3] === 'components'
  })
  .map((item) => {
    const paths = item.split('/')
    const name = paths[paths.length - 2]
    return {
      input: resolveFile(`src/components/${name}/index.tsx`),
      output: [
        {
          file: `es/${name}/index.js`,
          format: 'es'
        },
        {
          file: `lib/${name}/index.js`,
          format: 'cjs'
        }
      ],
      ...getCommonConfig()
    }
  })

configs.push({
  input: resolveFile(Package.source),
  output: [
    {
      file: `lib/index.js`,
      format: 'cjs',
      name: 'OnebayUi',
      sourcemap: true
    },
    {
      file: `es/index.esm.js`,
      format: 'es',
      name: 'OnebayUi',
      sourcemap: true
    },
    {
      file: resolveFile(Package.browser),
      format: 'umd',
      name: 'OnebayUi',
      sourcemap: true,
      globals: {}
    }
  ],
  ...getCommonConfig(true)
})

configs.push(...scssTasks)

export default configs
