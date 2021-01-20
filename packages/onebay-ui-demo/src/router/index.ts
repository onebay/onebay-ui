import { createRouter, createWebHashHistory, RouteRecordRaw, createMemoryHistory } from 'vue-router'
import tsxRoutes from './tsxRoutes'
import vueRoutes from './vueRoutes'
// import Index from '../pages/index/index.vue'
// import Panel from '../pages/panel/index.vue'
// import Drawer from '../pages/navigation/drawer/index.vue'

// const dynamicRoute = (path: string): RouteRecordRaw => {
//   const comp = `..${path}.vue`
//   if (process?.env?.NODE_ENV === 'tsx') {
//     const tsxComp = comp.replace('index.vue', 'main.tsx')
//     return {
//       path,
//       component: () => import(tsxComp)
//     }
//   }

//   return {
//     path,
//     component: () => import(comp)
//   }
// }

// const routes = [
//   {
//     path: '/',
//     component: Index
//   },
//   {
//     path: '/jsx',
//     component: () => import('../App')
//   },
//   {
//     path: '/pages/panel/index',
//     component: Panel
//   },
//   // dynamicRoute('/pages/panel/index'),
//   dynamicRoute('/pages/action/action-sheet/index'),
//   dynamicRoute('/pages/action/activity-indicator/index'),
//   dynamicRoute('/pages/view/badge/index'),
//   dynamicRoute('/pages/basic/button/index'),
//   dynamicRoute('/pages/basic/icon/index'),
//   dynamicRoute('/pages/form/checkbox/index'),
//   dynamicRoute('/pages/layout/accordion/index'),
//   dynamicRoute('/pages/layout/list/index'),
//   dynamicRoute('/pages/view/divider/index'),
//   dynamicRoute('/pages/navigation/drawer/index'),
//   dynamicRoute('/pages/layout/float-layout/index'),
//   dynamicRoute('/pages/form/input/index'),
//   dynamicRoute('/pages/action/message/index'),
//   {
//     path: '/pages/navigation/drawer/index',
//     component: Drawer
//   },
//   dynamicRoute('/pages/action/modal/index'),
//   dynamicRoute('/pages/navigation/navbar/index'),
//   dynamicRoute('/pages/view/noticebar/index'),
//   dynamicRoute('/pages/navigation/pagination/index'),
//   dynamicRoute('/pages/action/progress/index'),
//   dynamicRoute('/pages/form/radio/index'),
//   dynamicRoute('/pages/form/rate/index'),
//   dynamicRoute('/pages/navigation/segmented-control/index'),
//   dynamicRoute('/pages/form/slider/index'),
//   dynamicRoute('/pages/view/steps/index'),
//   dynamicRoute('/pages/view/tag/index'),
//   dynamicRoute('/pages/navigation/tabbar/index'),
//   dynamicRoute('/pages/view/swiper/index'),
//   dynamicRoute('/pages/form/picker/index'),
//   dynamicRoute('/pages/form/input-number/index'),
//   dynamicRoute('/pages/form/switch/index'),
//   dynamicRoute('/pages/form/textarea/index'),
//   dynamicRoute('/pages/form/range/index'),
//   dynamicRoute('/pages/form/image-picker/index'),
//   dynamicRoute('/pages/form/search-bar/index'),
//   dynamicRoute('/pages/view/image-preview/index'),
//   dynamicRoute('/pages/layout/flex/index'),
//   dynamicRoute('/pages/navigation/back-top/index'),
//   dynamicRoute('/pages/view/timeline/index'),
//   dynamicRoute('/pages/action/pull-to-refresh/index'),
// ]

const isServer = typeof window === 'undefined';
const history = isServer ? createMemoryHistory() : createWebHashHistory();
const router = createRouter({
  history,
  routes: vueRoutes
})

export default router
