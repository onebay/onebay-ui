# drawer 

<DemoView />
<BackTop />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```vue
<template>
  <div class="page">
    <DocsHeader title="Drawer 抽屉"></DocsHeader>

    <div class="doc-body">
      <div class="panel">
        <div class="panel__title">左边滑出</div>
        <div class="panel__content no-padding">
          <div class="example">
            <Button @click="leftDrawerClick">显示 Drawer</Button>
            <Drawer
              :show="leftDrawerShow"
              mask
              :onItemClick="onItemClick"
              :onClose="onClose"
              :items="['菜单1', '菜单2']"
            ></Drawer>
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="panel__title">右边滑出</div>
        <div class="panel__content no-padding">
          <div class="example">
            <Button :onClick="rightDrawerClick">显示 Drawer</Button>
            <Drawer
              :show="rightDrawerShow"
              right
              mask
              :onItemClick="onItemClick"
              @Close="onClose"
              :items="['菜单1', '菜单2']"
            ></Drawer>
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="panel__title">自定义内容</div>
        <div class="panel__content no-padding">
          <div class="example">
            <Button :onClick="childrenDrawerClick">显示 Drawer</Button>
            <Drawer :show="childrenDrawerShow" mask :onItemClick="onItemClick" @close="onClose">
              <div
                v-for="(item, index) in childrenItem"
                :class="
                  classNames('drawer-item', {
                    'drawer-item--sub': index === 1 || index === 2,
                  })
                "
                :onClick="onItemClick.bind(this, index)"
                :key="`drawer-item-${index}`"
              >
                {{ item }}
                <Badge value="3" v-if="index === 3 && icons[index]"></Badge>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Button, Drawer, Badge } from '/@/swift-ui/src/index.ts'
import classNames from 'classnames'
import './index.scss'
export default {
  name: 'DrawerPage',
  components: {
    Button,
    Drawer,
    Badge
  },
  data() {
    return {
      leftDrawerShow: false,
      rightDrawerShow: false,
      childrenDrawerShow: false,
      childrenItem: ['首页', '可自定义结构', '或自定义样式', '消息', '个人'],
      icons: ['home', '', '', 'message', 'user']
    }
  },
  methods: {
    classNames,
    leftDrawerClick() {
      this.leftDrawerShow = !this.leftDrawerShow
    },

    rightDrawerClick() {
      this.rightDrawerShow = !this.rightDrawerShow
    },

    childrenDrawerClick() {
      this.childrenDrawerShow = !this.childrenDrawerShow
    },

    onItemClick(index) {
      let content
      if (typeof index !== 'number') {
        content = ''
      } else {
        content = `你点击了第 ${+index + 1} 个项目`
      }
      content && alert(content)
    },

    onClose() {
      this.leftDrawerShow = false
      this.rightDrawerShow = false
      this.childrenDrawerShow = false
    }
  }
}
</script>

```

</div> 