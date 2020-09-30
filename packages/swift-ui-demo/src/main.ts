import { createApp } from 'vue'
import App from './App.vue'
import './app.scss';
import router from './router'
import '/@/swift-ui/src/style/index.scss'
import DocsHeader from './components/DocsHeader.vue'
import SwiftUi from '/@/swift-ui/src/index'

const app = createApp(App)
app.component('DocsHeader', DocsHeader)
app.use(router)
app.use(SwiftUi)
app.mount("#app")