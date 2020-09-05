import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from './router'
import '/@/swift-ui/src/style/index.scss'

createApp(App).use(router).mount("#app");