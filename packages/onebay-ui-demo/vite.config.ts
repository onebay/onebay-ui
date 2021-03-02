import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vitePluginImp from 'vite-plugin-imp'
// const { resolve } = require('path')
// const vitePluginImp = require(resolve(__dirname, '../vite-plugin-imp/dist')).default

export default defineConfig({
  esbuild: {
    jsxInject: `import { h } from 'vue'\n`,
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  server: {
    port: 3333,
  },
  plugins: [
    vue()
  ],
  base: './'
})