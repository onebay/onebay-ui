import { createApp } from 'vue'
import App from './App.vue'
import './app.scss';
import router from './router'
import '/@/swift-ui/src/style/index.scss'
import DocsHeader from './components/DocsHeader.vue'

const app = createApp(App)
app.component('DocsHeader', DocsHeader)
app.use(router).mount("#app");