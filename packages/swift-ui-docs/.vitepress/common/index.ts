export const renderTabs = () => {
  setTimeout(() => {
    const codeBox = document.querySelector('.code-box')
    const codeTabs = document.querySelector('.code-tabs')
    const tabsLang = ['vue', 'tsx']
    tabsLang.forEach(cls => {
      const langEl = document.querySelector(`.code-box .language-${cls}`)
      if (langEl) {
        const button = document.createElement('button')
        button.textContent = cls
        button.className = `btn-${cls}`
        button.onclick = () => {
          codeBox.classList.remove('code-vue-active', 'code-tsx-active')
          codeBox.classList.add(`code-${cls}-active`)
        }
        codeTabs.append(button)
      }
    })
  }, 0);
}