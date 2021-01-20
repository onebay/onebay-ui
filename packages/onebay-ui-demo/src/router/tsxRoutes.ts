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
    component: () => import('../pages/action/action-sheet/main')
  },
  {
    path: '/pages/action/activity-indicator/index',
    component: () => import('../pages/action/activity-indicator/main')
  },
  {
    path: '/pages/view/badge/index',
    component: () => import('../pages/view/badge/main')
  },
  {
    path: '/pages/basic/button/index',
    component: () => import('../pages/basic/button/main')
  },
  {
    path: '/pages/basic/icon/index',
    component: () => import('../pages/basic/icon/main')
  },
  {
    path: '/pages/form/checkbox/index',
    component: () => import('../pages/form/checkbox/main')
  },
  {
    path: '/pages/layout/accordion/index',
    component: () => import('../pages/layout/accordion/main')
  },
  {
    path: '/pages/layout/list/index',
    component: () => import('../pages/layout/list/main')
  },
  {
    path: '/pages/view/divider/index',
    component: () => import('../pages/view/divider/main')
  },
  {
    path: '/pages/navigation/drawer/index',
    component: () => import('../pages/navigation/drawer/main')
  },
  {
    path: '/pages/layout/float-layout/index',
    component: () => import('../pages/layout/float-layout/main')
  },
  {
    path: '/pages/form/input/index',
    component: () => import('../pages/form/input/main')
  },
  {
    path: '/pages/action/message/index',
    component: () => import('../pages/action/message/main')
  },
  {
    path: '/pages/action/modal/index',
    component: () => import('../pages/action/modal/main')
  },
  {
    path: '/pages/navigation/navbar/index',
    component: () => import('../pages/navigation/navbar/main')
  },
  {
    path: '/pages/view/noticebar/index',
    component: () => import('../pages/view/noticebar/main')
  },
  {
    path: '/pages/navigation/pagination/index',
    component: () => import('../pages/navigation/pagination/main')
  },
  {
    path: '/pages/action/progress/index',
    component: () => import('../pages/action/progress/main')
  },
  {
    path: '/pages/form/radio/index',
    component: () => import('../pages/form/radio/main')
  },
  {
    path: '/pages/form/rate/index',
    component: () => import('../pages/form/rate/main')
  },
  {
    path: '/pages/navigation/segmented-control/index',
    component: () => import('../pages/navigation/segmented-control/main')
  },
  {
    path: '/pages/form/slider/index',
    component: () => import('../pages/form/slider/main')
  },
  {
    path: '/pages/view/steps/index',
    component: () => import('../pages/view/steps/main')
  },
  {
    path: '/pages/view/tag/index',
    component: () => import('../pages/view/tag/main')
  },
  {
    path: '/pages/navigation/tabbar/index',
    component: () => import('../pages/navigation/tabbar/main')
  },
  {
    path: '/pages/view/swiper/index',
    component: () => import('../pages/view/swiper/main')
  },
  {
    path: '/pages/form/picker/index',
    component: () => import('../pages/form/picker/main')
  },
  {
    path: '/pages/form/input-number/index',
    component: () => import('../pages/form/input-number/main')
  },
  {
    path: '/pages/form/switch/index',
    component: () => import('../pages/form/switch/main')
  },
  {
    path: '/pages/form/textarea/index',
    component: () => import('../pages/form/textarea/main')
  },
  {
    path: '/pages/form/range/index',
    component: () => import('../pages/form/range/main')
  },
  {
    path: '/pages/form/image-picker/index',
    component: () => import('../pages/form/image-picker/main')
  },
  {
    path: '/pages/form/search-bar/index',
    component: () => import('../pages/form/search-bar/main')
  },
  {
    path: '/pages/view/image-preview/index',
    component: () => import('../pages/view/image-preview/main')
  },
  {
    path: '/pages/layout/flex/index',
    component: () => import('../pages/layout/flex/main')
  },
  {
    path: '/pages/navigation/back-top/index',
    component: () => import('../pages/navigation/back-top/main')
  },
  {
    path: '/pages/view/timeline/index',
    component: () => import('../pages/view/timeline/main')
  },
  {
    path: '/pages/action/pull-to-refresh/index',
    component: () => import('../pages/action/pull-to-refresh/main')
  }
]


export default routes
