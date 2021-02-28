import { createRouter, createWebHashHistory, createMemoryHistory } from 'vue-router'
import tsxRoutes from './tsxRoutes'
import vueRoutes from './vueRoutes'

const isServer = typeof window === 'undefined';
const history = isServer ? createMemoryHistory() : createWebHashHistory();
const env = import.meta.env
const router = createRouter({
  history,
  routes: env.VITE_LANG_ENV === 'vue' ? vueRoutes : tsxRoutes
})

export default router
