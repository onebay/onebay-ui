<template>
  <div class="page page-index">
    <div class="logo">
      <img class="img" :src="taroLogo" />
    </div>
    <div class="page-title">onebay UI</div>
    <div class="module-list">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="module-list__item"
        @click="gotoPanel(item.id)"
      >
        <div class="module-list__icon">
          <img :src="item.icon" class="img" mode="widthFix" />
        </div>
        <div class="module-list__info">
          <div class="title">
            {{ item.title }}
          </div>
          <div class="content">
            {{ item.content }}
          </div>
        </div>
        <div class="module-list__arrow">
          <span class="ob-icon ob-icon-chevron-right" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import iconAction from '../../assets/images/icon-list-action.png'
import iconBasic from '../../assets/images/icon-list-basic.png'
import iconForm from '../../assets/images/icon-list-form.png'
import iconLayout from '../../assets/images/icon-list-layout.png'
import iconNavigation from '../../assets/images/icon-list-navigation.png'
import iconView from '../../assets/images/icon-list-view.png'
import taroLogo from '../../assets/images/logo_onebay.png'
import './index.scss'

const list = [
  {
    id: 'Basic',
    title: 'Basic',
    content: 'Include Icon & Button',
    icon: iconBasic
  },
  {
    id: 'View',
    title: 'View',
    content: 'Include Noticebar, Tag, Badge, etc.',
    icon: iconView
  },
  {
    id: 'Action',
    title: 'Action',
    content: 'Include Modal, Progress, Toast, etc.',
    icon: iconAction
  },
  {
    id: 'Form',
    title: 'Form',
    content: 'Include Input, Radio, Checkbox, etc.',
    icon: iconForm
  },
  {
    id: 'Layout',
    title: 'Layout',
    content: 'Include Flex, List, Accordion, etc.',
    icon: iconLayout
  },
  {
    id: 'Navigation',
    title: 'Navigation',
    content: 'Include NavBar, Tabs, Drawer, etc.',
    icon: iconNavigation
  }
]

export default defineComponent({
  data() {
    return {
      taroLogo,
      list
    }
  },
  methods: {
    gotoPanel(id) {
      this.$router.push(`/pages/panel/index?id=${id.toLowerCase()}`)
    }
  }
})
</script>
