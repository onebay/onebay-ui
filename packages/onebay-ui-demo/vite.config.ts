const path = require('path');
import type { UserConfig } from 'vite'
import tsResolver from 'vite-tsconfig-paths'
// import { getBabelOutputPlugin } from '@rollup/plugin-babel'

const config: UserConfig = {
  // alias: {
  //   '/@/onebay-ui/': path.resolve(__dirname, '../onebay-ui'),
  // },
  resolvers: [tsResolver],
  // rollupInputOptions: {
  //   pluginsPostBuild: [
  //     getBabelOutputPlugin({
  //       plugins: [
  //         [
  //           'import',
  //           {
  //             // 组件库的名字,可以根据你发布的库的package.json的name自行更改
  //             libraryName: 'onebay-ui',

  //             // 默认打包是lib,不用更改
  //             libraryDirectory: 'lib',

  //             style: (name: string) => {
  //               const libDirIndex = name.lastIndexOf('/');
  //               const fileName = name.substr(libDirIndex + 1);
  //               return `onebay-ui/dist/style/${fileName}.css`;
  //             },
  //           },
  //         ],
  //       ]
  //     })
  //   ]
  // },
  port: 3333
}

export default config
