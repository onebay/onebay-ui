import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Index from '../pages/index/index.vue'
import Panel from '../pages/panel/index.vue'
import Drawer from '../pages/navigation/drawer/index.vue'
import getEnv from './getEnv'
const env = getEnv()

const dynamicRoute = (path: string): RouteRecordRaw => {
  const comp = `..${path}.vue`
  if (env.VITE_TEMPLATE_ENV === 'tsx') {
    console.log('VITE_TEMPLATE_ENV', env.VITE_TEMPLATE_ENV)
    // const tsxComp = comp.replace('index.vue', 'main.tsx')
    return {
      path,
      component: () => import('../pages/action/action-sheet/main')
    }
  }

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
  {
    path: '/jsx',
    component: () => import('../App')
  },
  {
    path: '/pages/panel/index',
    component: Panel
  },
  // dynamicRoute('/pages/panel/index'),
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
  dynamicRoute('/pages/form/input/index'),
  dynamicRoute('/pages/action/message/index'),
  {
    path: '/pages/navigation/drawer/index',
    component: Drawer
  },
  dynamicRoute('/pages/action/modal/index'),
  dynamicRoute('/pages/navigation/navbar/index'),
  dynamicRoute('/pages/view/noticebar/index'),
  dynamicRoute('/pages/navigation/pagination/index'),
  dynamicRoute('/pages/action/progress/index'),
  dynamicRoute('/pages/form/radio/index'),
  dynamicRoute('/pages/form/rate/index'),
  dynamicRoute('/pages/navigation/segmented-control/index'),
  dynamicRoute('/pages/form/slider/index'),
  dynamicRoute('/pages/view/steps/index'),
  dynamicRoute('/pages/view/tag/index'),
  dynamicRoute('/pages/navigation/tabbar/index'),
  dynamicRoute('/pages/view/swiper/index'),
  dynamicRoute('/pages/form/picker/index'),
  dynamicRoute('/pages/form/input-number/index'),
  dynamicRoute('/pages/form/switch/index'),
  dynamicRoute('/pages/form/textarea/index'),
  dynamicRoute('/pages/form/range/index'),
  dynamicRoute('/pages/form/image-picker/index'),
  dynamicRoute('/pages/form/search-bar/index'),
  dynamicRoute('/pages/view/image-preview/index'),
  dynamicRoute('/pages/layout/row/index'),
  dynamicRoute('/pages/layout/flex/index'),
  dynamicRoute('/pages/navigation/back-top/index'),
  dynamicRoute('/pages/action/pull-to-refresh/index')
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
console.log('router', router)
export default router
