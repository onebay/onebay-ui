import { createApp } from 'vue';
import App from './App';
import './index.css';
import ActionSheetPage from './components/ActionSheet/index.vue'
import ActivityIndicatorPage from './components/activity-indicator/index.vue'
const app = createApp(App)
app.component('ActionSheetPage', ActionSheetPage)
app.component('ActivityIndicatorPage', ActivityIndicatorPage)
app.mount('#app');