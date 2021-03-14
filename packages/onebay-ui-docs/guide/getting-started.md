## Install

``` bash
npm i onebay-ui -S
```
or
``` bash
yarn add onebay-ui
```

## Usage
``` ts
import { defineComponent } from 'vue'
import { Button } from 'onebay-ui'

export default defineComponent({
  setup() {
    return () => {
      return (
        <Button>Submit</Button>
      )
    }
  }
})
```

## Import component style (Recommended)

### Only import the styles of the components that are used
``` ts
import { Button } from 'onebay-ui'
import 'onebay-ui/dist/style/button.css'
```

### Using with vite
If your app was created by vite, it is strongly recommended to use the vite plugin [vite-plugin-imp](https://github.com/onebay/vite-plugin-imp) in your project, which can automatically import component styles for you on demand.
``` ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginImp from 'vite-plugin-imp'

export default defineConfig({
  plugins: [
    vue(),
    vitePluginImp({
      libList: [
        {
          libName: 'onebay-ui',
          style(name) {
            return `onebay-ui/dist/style/${name}.css`
          }
        }
      ]
    })
  ]
})

```
Checkout the demo on [codesandbox](https://codesandbox.io/s/vite-project-hph7n?file=/vite.config.ts)

### Using with vue-cli
If your app was created by vue-cli, you can use [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import) as below:
``` ts
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      {
        libraryName: "onebay-ui",
        libraryDirectory: "es",
        style: name => {
          return `${name.replace("/es/", "/dist/style/")}.css`;
        }
      }
    ]
  ]
};

```

### Import all components styles (Not recommended)
``` ts
import 'onebay-ui/dist/style/index.css'
```

## Custom theme
You need to inject scss variables in your project.
### Using with vite

``` ts{12-22,30}
// vite.vonfig.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginImp from 'vite-plugin-imp'

export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: "import { h } from 'vue';"
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          $color-brand: #ffc701;
          $color-brand-light: #ffd541;
          $color-brand-dark: #cc9f01;
        `
      }
    }
  },
  plugins: [
    vue(),
    vitePluginImp({
      libList: [
        {
          libName: 'onebay-ui',
          style(name) {
            return `onebay-ui/src/style/components/${name}.scss`
          }
        }
      ]
    })
  ]
})
```
Checkout demo in [onebay-ui-custom-theme-with-vite](https://github.com/psaren/onebay-ui-custom-theme-with-vite)

### Using with vue-cli
``` ts
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          $color-brand: #ffc701;
          $color-brand-light: #ffd541;
          $color-brand-dark: #cc9f01;
        `
      }
    }
  }
}
```
Checkout demo in [onebay-ui-custom-theme-with-vue-cli](https://github.com/psaren/onebay-ui-custom-theme-with-vue-cli)
