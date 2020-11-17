const path = require('path')
const fs = require('fs')
glob = require("glob")

const template = `# compName `+
'\r'+
'\r'+
'<DemoView />'+
'\r'+
'\r'+
'``` javascript'+
'\r'+
`import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    return () => {
      return <h1>hello world</h1>
    }
  }
})`+
'\r'+
'```'

const main = () => {
  const mdFiles = glob.sync(path.resolve(__dirname, './docs/**/*.md'))
  mdFiles.forEach(file => {
    const name = file.split('/').pop()
    fs.writeFileSync(file, template.replace('compName', name.replace('.md', '')), { encoding: 'utf8' })
  })
}
main()