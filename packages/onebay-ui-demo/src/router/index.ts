import { createRouter, createWebHashHistory, RouteRecordRaw, createMemoryHistory } from 'vue-router'
import tsxRoutes from './tsxRoutes'
import vueRoutes from './vueRoutes'
import getEnv from './getEnv'

const isServer = typeof window === 'undefined';
const history = isServer ? createMemoryHistory() : createWebHashHistory();
const env = getEnv()
const router = createRouter({
  history,
  routes: env.VITE_LANG_ENV === 'vue' ? vueRoutes : tsxRoutes
})

export default router
