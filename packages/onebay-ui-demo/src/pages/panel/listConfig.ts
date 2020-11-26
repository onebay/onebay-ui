/*
 * @Author: pengyue
 * @Date: 2020-07-05 16:12:58
 * @LastEditTime: 2020-07-05 16:15:47
 * @LastEditors: pengyue
 * @Description:
 * @FilePath: /taro-ui-vue/src/pages/panel/listConfig.js
 */
import iconAction from '../../assets/images/icon-list-action.png'
import iconBasic from '../../assets/images/icon-list-basic.png'
import iconForm from '../../assets/images/icon-list-form.png'
import iconHOC from '../../assets/images/icon-list-hoc.png'
import iconLayout from '../../assets/images/icon-list-layout.png'
import iconNavigation from '../../assets/images/icon-list-navigation.png'
import iconView from '../../assets/images/icon-list-view.png'

export const list = {
  basic: [
    {
      id: 'Color',
      name: '颜色',
    },
    {
      id: 'Icon',
      name: '图标',
    },
    {
      id: 'Typo',
      name: '字体',
    },
    {
      id: 'Button',
      name: '按钮',
    },
  ],
  view: [
    {
      id: 'Avatar',
      name: '头像',
    },
    {
      id: 'Article',
      name: '文章',
    },
    {
      id: 'Badge',
      name: '徽标',
    },
    {
      id: 'Countdown',
      name: '倒计时',
    },
    {
      id: 'Curtain',
      name: '幕帘',
    },
    {
      id: 'Divider',
      name: '分割线',
    },
    {
      id: 'NoticeBar',
      name: '通告栏',
    },
    {
      id: 'Tag',
      name: '标签',
    },
    {
      id: 'Timeline',
      name: '时间轴',
    },
    {
      id: 'Swiper',
      name: '滑块视图容器',
    },
    {
      id: 'Load-More',
      name: '页面提示',
    },
    {
      id: 'Steps',
      name: '步骤条',
    },
    {
      id: 'Image-Preview',
      name: 'ImagePreview',
    },
  ],
  action: [
    {
      id: 'Action-Sheet',
      name: '动作面板',
    },
    {
      id: 'Activity-Indicator',
      name: '活动指示器',
    },
    {
      id: 'Modal',
      name: '模态框',
    },
    {
      id: 'Progress',
      name: '进度条',
    },
    {
      id: 'Toast',
      name: '轻提示',
    },
    {
      id: 'Swipe-Action',
      name: '滑动操作',
    },
    {
      id: 'Message',
      name: '消息通知',
    },
    {
      id: 'Pull-To-Refresh',
      name: 'PullToRefresh',
    },
  ],
  form: [
    {
      id: 'Form',
      name: '表单',
    },
    {
      id: 'Input',
      name: '输入框',
    },
    {
      id: 'Radio',
      name: '单选框',
    },
    {
      id: 'Checkbox',
      name: '复选框',
    },
    {
      id: 'Switch',
      name: '开关',
    },
    {
      id: 'Rate',
      name: '评分',
    },
    {
      id: 'Input-Number',
      name: '数字输入框',
    },
    {
      id: 'Textarea',
      name: '多行文本框',
    },
    {
      id: 'Picker',
      name: '选择器',
    },
    {
      id: 'Slider',
      name: '滑动条',
    },
    {
      id: 'Search-Bar',
      name: '搜索栏',
    },
    {
      id: 'Image-Picker',
      name: '图片选择器',
    },
    {
      id: 'Range',
      name: '范围选择器',
    },
  ],
  layout: [
    {
      id: 'Flex',
      name: '弹性布局',
    },
    {
      id: 'Row',
      name: 'Percentage layout',
    },
    {
      id: 'Grid',
      name: '栅格',
    },
    {
      id: 'List',
      name: '列表',
    },
    {
      id: 'Card',
      name: '卡片',
    },
    {
      id: 'Float-Layout',
      name: '浮动弹层',
    },
    {
      id: 'Accordion',
      name: '手风琴',
    },
  ],
  navigation: [
    {
      id: 'NavBar',
      name: '导航栏',
    },
    {
      id: 'TabBar',
      name: '标签栏',
    },
    {
      id: 'Tabs',
      name: '标签页',
    },
    {
      id: 'Segmented-Control',
      name: '分段器',
    },
    {
      id: 'Pagination',
      name: '分页器',
    },
    {
      id: 'Drawer',
      name: '抽屉',
    },
    {
      id: 'Indexes',
      name: '索引选择器',
    },
    {
      id: 'Back-Top',
      name: 'Back Top Button',
    },
  ],
  advanced: [
    {
      id: 'Calendar',
      name: '日历',
    },
  ],
}

export const panelNames = {
  basic: {
    name: '基础',
    icon: iconBasic,
  },
  view: {
    name: '视图',
    icon: iconView,
  },
  action: {
    name: '操作反馈',
    icon: iconAction,
  },
  form: {
    name: '表单',
    icon: iconForm,
  },
  layout: {
    name: '布局',
    icon: iconLayout,
  },
  navigation: {
    name: '导航',
    icon: iconNavigation,
  },
  advanced: {
    name: '高阶组件',
    icon: iconHOC,
  },
}
