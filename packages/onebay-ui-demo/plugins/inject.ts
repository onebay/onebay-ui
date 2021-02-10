import { Plugin, ResolvedConfig } from 'vite'

export default function vitePluginInject(): Plugin {
  let viteConfig: ResolvedConfig
  const name = 'vite-plugin-inject'

  return {
    name,
    configResolved(resolvedConfig) {
      // store the resolved config
      viteConfig = resolvedConfig
    },
    transform(code, id) {
      const isBuild = viteConfig.command === 'build'
      if (!/(node_modules)/.test(id) && id.endsWith('.tsx') && !isBuild) {
        console.log('code', code)
        return {
          code,
          map: null
        }
      }
      return code
    }
  }
}
