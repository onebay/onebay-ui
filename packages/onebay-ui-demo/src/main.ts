import { createApp } from 'vue'
import App from './App.vue'
import './app.scss';
import router from './router'

import DocsHeader from './components/DocsHeader.vue'

import 'onebay-ui/dist/style/index.css'

const app = createApp(App)
app.component('DocsHeader', DocsHeader)
app.use(router)
app.mount("#app")