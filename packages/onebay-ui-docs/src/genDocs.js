const path = require('path')
const fs = require('fs')
const glob = require("glob")

const sourceDirPath = path.resolve(__dirname, '../../onebay-ui-demo/src/pages')
const fileTypeList = ['main.tsx', 'index.vue']

const renderCodeToDocs = (filePath, preContent) => {
  let content = preContent
  const demoPath = filePath.split('/').slice(-2).join('/').replace('.md', '')
  const demoFilePath = `${sourceDirPath}/${demoPath}`
  let tempContent = ''
  fileTypeList.forEach(item => {
    const demoFile = `${demoFilePath}/${item}`
    if (fs.existsSync(demoFile)) {
      const code = fs.readFileSync(demoFile, { encoding: 'utf8' })
      const codeType = demoFile.split('.').pop()
      tempContent += '\n```' + codeType + '\n' + code + '\n```\n';
    }
  })
  return content.replace('{{code}}', tempContent)
}

const template = fs.readFileSync(path.resolve(__dirname, './template.md'), {
  encoding: 'utf8'
})

const main = () => {
  const mdFiles = glob.sync(path.resolve(__dirname, '../docs/**/*.md'))
  mdFiles.forEach(file => {
    const tempArr = file.split('/')
    const name = tempArr[tempArr.length - 1]
    let content = `${template}`
    content = renderCodeToDocs(file, template)
    fs.writeFileSync(file, content.replace('compName', name.replace('.md', '')), { encoding: 'utf8' })
  })
}
main()