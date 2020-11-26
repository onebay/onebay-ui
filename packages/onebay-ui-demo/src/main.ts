import { createApp } from 'vue'
import App from './App.vue'
import './app.scss';
import router from './router'
import '/@/onebay-ui/src/style/index.scss'
import DocsHeader from './components/DocsHeader.vue'
import onebayUi from '/@/onebay-ui/src/index'

const app = createApp(App)
app.component('DocsHeader', DocsHeader)
app.use(router)
app.use(onebayUi)
app.mount("#app")