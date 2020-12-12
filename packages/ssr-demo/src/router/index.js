import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import ActivityIndicator from '../pages/action/activity-indicator/index.vue';
import Button from '../pages/basic/button/index.vue';

const isServer = typeof window === 'undefined';
const history = isServer ? createMemoryHistory() : createWebHistory();
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/activity-indicator',
    name: 'ActivityIndicator',
    component: ActivityIndicator,
  },
  {
    path: '/button',
    name: 'Button',
    component: Button,
  },
];

const router = createRouter({
  history,
  routes,
});

export default router;
