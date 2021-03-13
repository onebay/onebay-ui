export const renderTabs = () => {
  setTimeout(() => {
    const template = localStorage.getItem('codeTemplate') || 'vue'
    const codeBox = document.querySelector('.code-box')
    const codeTabs = document.querySelector('.code-tabs')
    const tabsLang = ['vue', 'tsx']
    const toggleCodeDemo = (lang: string, isInit: boolean = false) => {
      codeBox.classList.remove('code-vue-active', 'code-tsx-active')
      codeBox.classList.add(`code-${lang}-active`)
      if (!isInit) {
        localStorage.setItem('codeTemplate', lang)
      }
    }
    if (tabsLang.includes(template)) {
      toggleCodeDemo(template, true)
    }
    tabsLang.forEach(cls => {
      const langEl = document.querySelector(`.code-box .language-${cls}`)
      if (langEl) {
        const button = document.createElement('button')
        button.textContent = cls
        button.className = `btn-${cls}`
        button.onclick = () => toggleCodeDemo(cls)
        
        codeTabs.append(button)
      }
    })
  }, 0);
}