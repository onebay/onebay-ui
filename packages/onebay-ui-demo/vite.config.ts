import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginImp from 'vite-plugin-imp'
// const { resolve } = require('path')
// const vitePluginImp = require(resolve(__dirname, '../vite-plugin-imp/dist')).default

export default defineConfig({
  server: {
    // port: 3333,
  },
  plugins: [
    vue(),
    vitePluginImp({
      libList: [
        {
          libName: 'vant',
          style(name) {
            return `vant/es/${name}/index.css`
          }
        },
        {
          libName: 'element-plus',
          style: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`
          }
        },
        {
          libName: 'onebay-ui',
          style: (name) => {
            return `onebay-ui/dist/style/${name}.css`
          }
        }
      ]
    })
  ]
})