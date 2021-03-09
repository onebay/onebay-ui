<template>
  <div class="page">
    <DocsHeader title="Drawer"></DocsHeader>

    <div class="doc-body">
      <div class="panel">
        <div class="panel__title">Slide out to the right</div>
        <div class="panel__content no-padding">
          <div class="example">
            <Button @click="leftDrawerClick">Show Drawer</Button>
            <Drawer
              :show="leftDrawerShow"
              mask
              :onItemClick="onItemClick"
              :onClose="onClose"
              :items="['Menu1', 'Menu2']"
            ></Drawer>
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="panel__title">Slide out to the right</div>
        <div class="panel__content no-padding">
          <div class="example">
            <Button :onClick="rightDrawerClick">Show Drawer</Button>
            <Drawer
              :show="rightDrawerShow"
              right
              mask
              :onItemClick="onItemClick"
              @Close="onClose"
              :items="['Menu1', 'Menu2']"
            ></Drawer>
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="panel__title">Custom content</div>
        <div class="panel__content no-padding">
          <div class="example">
            <Button :onClick="childrenDrawerClick">Show Drawer</Button>
            <Drawer :show="childrenDrawerShow" mask :onItemClick="onItemClick" @close="onClose">
              <div
                v-for="(item, index) in childrenItem"
                :class="
                  classNames('drawer-item', {
                    'drawer-item--sub': index === 1 || index === 2
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
import { Button, Drawer, Badge } from 'onebay-ui'
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
      childrenItem: ['Home page', 'Customizable structure','or custom style','message','personal'],
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
        content = `You clicked on the ${+index + 1}  item`
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
