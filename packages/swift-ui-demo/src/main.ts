import { createApp } from 'vue';
import App from './App';
import './index.css';
import ActionSheetPage from './components/ActionSheet/index.vue'
import ActivityIndicatorPage from './components/activity-indicator/index.vue'
import BadgePage from './components/badge/index.vue'
const app = createApp(App)
app.component('ActionSheetPage', ActionSheetPage)
app.component('ActivityIndicatorPage', ActivityIndicatorPage)
app.component('BadgePage', BadgePage)
app.mount('#app');