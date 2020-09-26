import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Index from '../pages/index/index.vue'
import Drawer from '../pages/navigation/drawer/index.vue'

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
  dynamicRoute('/pages/basic/button/index'),
  dynamicRoute('/pages/form/checkbox/index'),
  dynamicRoute('/pages/layout/accordion/index'),
  dynamicRoute('/pages/layout/list/index'),
  dynamicRoute('/pages/view/divider/index'),
  dynamicRoute('/pages/navigation/drawer/index'),
  dynamicRoute('/pages/layout/float-layout/index'),
  {
    path: '/pages/navigation/drawer/index',
    component: Drawer
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
