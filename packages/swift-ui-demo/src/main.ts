import { createApp } from 'vue';
import App from './App';
import './index.css';
import ActionSheetPage from './components/ActionSheet/index.vue'
const app = createApp(App)
app.component('ActionSheetPage', ActionSheetPage)
app.mount('#app');