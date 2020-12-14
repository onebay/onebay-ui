import { createApp } from 'vue'
import App from './App.vue'
import './app.scss';
import router from './router'
import 'onebay-ui/dist/style/index.css'
import DocsHeader from './components/DocsHeader.vue'
import onebayUi from 'onebay-ui'

const app = createApp(App)
app.component('DocsHeader', DocsHeader)
app.use(router)
app.use(onebayUi)
app.mount("#app")