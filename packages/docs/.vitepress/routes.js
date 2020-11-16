const path = require('path')
const fs = require('fs')

const baseDir = path.resolve(__dirname, '../../swift-ui-demo/src/pages')

const baseDirs = fs.readdirSync(baseDir)

const template =
  `# compName` +
  '\r' +
  '\r' +
  '``` javascript' +

  `
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    return () => {
      return <h1>hello world</h1>
    }
  }
})
`+
  '```'
const routes = []
baseDirs.forEach(dir => {
  const subRoutes = fs.readdirSync(`${baseDir}/${dir}`)
  const reslut = {
    text: dir,
    children: subRoutes.map(subRoute => {
      fs.mkdirSync(path.resolve(__dirname, `../docs/${dir}/`), { recursive: true })
      fs.writeFileSync(path.resolve(__dirname, `../docs/${dir}/${subRoute}.md`), template.replace('compName', subRoute))
      return {
        text: subRoute,
        link: `/docs/${dir}/${subRoute}`
      }
    })
  }
  routes.push(reslut)
})

console.log('routes', JSON.stringify(routes, null, 2))