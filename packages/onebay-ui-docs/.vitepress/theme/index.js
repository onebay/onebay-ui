import DefaultTheme from 'vitepress/dist/client/theme-default'
import DemoView from '../components/DemoView.vue'
import BackToTop from '../components/BackTop.vue'
import './common.scss'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.config.globalProperties.$router = router
    app.component('DemoView', DemoView)
    app.component('BackToTop', BackToTop)
  }
}