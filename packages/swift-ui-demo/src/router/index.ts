import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Index from '../pages/index/index.vue'

const dynamicRoute = (path: string): RouteRecordRaw => {
  const comp = `..${path}.vue`
  return {
    path,
    component: () => import(comp)
  }
}

const routes = [
  {
    path: '/',
    component: Index
  },
  dynamicRoute('/pages/panel/index'),
  dynamicRoute('/pages/action/action-sheet/index'),
  dynamicRoute('/pages/action/activity-indicator/index'),
  dynamicRoute('/pages/view/badge/index'),
]
const router = createRouter({
  history: createWebHashHistory(),
  routes 
})

export default router
