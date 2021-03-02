import Index from '../pages/index/index.vue'
import Panel from '../pages/panel/index.vue'

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/pages/panel/index',
    component: Panel
  },
  {
    path: '/pages/action/action-sheet/index',
    component: () => import('../pages/action/action-sheet/index.vue')
  },
  {
    path: '/pages/action/activity-indicator/index',
    component: () => import('../pages/action/activity-indicator/index.vue')
  },
  {
    path: '/pages/view/badge/index',
    component: () => import('../pages/view/badge/index.vue')
  },
  {
    path: '/pages/basic/button/index',
    component: () => import('../pages/basic/button/index.vue')
  },
  {
    path: '/pages/basic/icon/index',
    component: () => import('../pages/basic/icon/index.vue')
  },
  {
    path: '/pages/form/checkbox/index',
    component: () => import('../pages/form/checkbox/index.vue')
  },
  {
    path: '/pages/layout/accordion/index',
    component: () => import('../pages/layout/accordion/index.vue')
  },
  {
    path: '/pages/layout/list/index',
    component: () => import('../pages/layout/list/index.vue')
  },
  {
    path: '/pages/view/divider/index',
    component: () => import('../pages/view/divider/index.vue')
  },
  {
    path: '/pages/navigation/drawer/index',
    component: () => import('../pages/navigation/drawer/index.vue')
  },
  {
    path: '/pages/layout/float-layout/index',
    component: () => import('../pages/layout/float-layout/index.vue')
  },
  {
    path: '/pages/form/input/index',
    component: () => import('../pages/form/input/index.vue')
  },
  {
    path: '/pages/action/message/index',
    component: () => import('../pages/action/message/index.vue')
  },
  {
    path: '/pages/action/modal/index',
    component: () => import('../pages/action/modal/index.vue')
  },
  {
    path: '/pages/navigation/navbar/index',
    component: () => import('../pages/navigation/navbar/index.vue')
  },
  {
    path: '/pages/view/noticebar/index',
    component: () => import('../pages/view/noticebar/index.vue')
  },
  {
    path: '/pages/navigation/pagination/index',
    component: () => import('../pages/navigation/pagination/index.vue')
  },
  {
    path: '/pages/action/progress/index',
    component: () => import('../pages/action/progress/index.vue')
  },
  {
    path: '/pages/form/radio/index',
    component: () => import('../pages/form/radio/index.vue')
  },
  {
    path: '/pages/form/rate/index',
    component: () => import('../pages/form/rate/index.vue')
  },
  {
    path: '/pages/navigation/segmented-control/index',
    component: () => import('../pages/navigation/segmented-control/index.vue')
  },
  {
    path: '/pages/form/slider/index',
    component: () => import('../pages/form/slider/index.vue')
  },
  {
    path: '/pages/view/steps/index',
    component: () => import('../pages/view/steps/index.vue')
  },
  {
    path: '/pages/view/tag/index',
    component: () => import('../pages/view/tag/index.vue')
  },
  {
    path: '/pages/navigation/tabbar/index',
    component: () => import('../pages/navigation/tabbar/index.vue')
  },
  {
    path: '/pages/view/swiper/index',
    component: () => import('../pages/view/swiper/index.vue')
  },
  {
    path: '/pages/form/picker/index',
    component: () => import('../pages/form/picker/index.vue')
  },
  {
    path: '/pages/form/input-number/index',
    component: () => import('../pages/form/input-number/index.vue')
  },
  {
    path: '/pages/form/switch/index',
    component: () => import('../pages/form/switch/index.vue')
  },
  {
    path: '/pages/form/textarea/index',
    component: () => import('../pages/form/textarea/index.vue')
  },
  {
    path: '/pages/form/range/index',
    component: () => import('../pages/form/range/index.vue')
  },
  {
    path: '/pages/form/image-picker/index',
    component: () => import('../pages/form/image-picker/index.vue')
  },
  {
    path: '/pages/form/search-bar/index',
    component: () => import('../pages/form/search-bar/index.vue')
  },
  {
    path: '/pages/view/image-preview/index',
    component: () => import('../pages/view/image-preview/index.vue')
  },
  {
    path: '/pages/layout/flex/index',
    component: () => import('../pages/layout/flex/index.vue')
  },
  {
    path: '/pages/navigation/back-top/index',
    component: () => import('../pages/navigation/back-top/index.vue')
  },
  {
    path: '/pages/view/timeline/index',
    component: () => import('../pages/view/timeline/index.vue')
  },
  {
    path: '/pages/action/pull-to-refresh/index',
    component: () => import('../pages/action/pull-to-refresh/index.vue')
  }
]


export default routes
