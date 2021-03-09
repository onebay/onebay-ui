# drawer 

<DemoView />
<BackToTop />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```tsx
import { defineComponent, reactive } from 'vue'
import { Button, Drawer, Badge } from 'onebay-ui'
import classNames from 'classnames'
import DocsHeader from '../../../components/DocHeader/DocsHeader'
import './index.scss'

export default defineComponent({
  name: 'DrawerPage',
  components: {
    Button,
    Drawer,
    Badge
  },
  setup() {
    const state = reactive({
      leftDrawerShow: false,
      rightDrawerShow: false,
      childrenDrawerShow: false,
      childrenItem: ['Home page', 'Customizable structure','or custom style','message','personal'],
      icons: ['home', '', '', 'message', 'user']
    })

    const leftDrawerClick = () => {
      state.leftDrawerShow = !state.leftDrawerShow
    }

    const rightDrawerClick = () => {
      state.rightDrawerShow = !state.rightDrawerShow
    }

    const childrenDrawerClick = () => {
      state.childrenDrawerShow = !state.childrenDrawerShow
    }

    const onItemClick = (index: number) => {
      let content
      if (typeof index !== 'number') {
        content = ''
      } else {
        content = `You clicked on the ${+index + 1}  item`
      }
      content && alert(content)
    }

    const onClose = () => {
      state.leftDrawerShow = false
      state.rightDrawerShow = false
      state.childrenDrawerShow = false
    }

    return () => {
      const { leftDrawerShow, rightDrawerShow, childrenDrawerShow, childrenItem, icons } = state
      return (
        <div class="page">
          <DocsHeader title="Drawer"></DocsHeader>

          <div class="doc-body">
            <div class="panel">
              <div class="panel__title">Slide out to the right</div>
              <div class="panel__content no-padding">
                <div class="example">
                  <Button onClick={leftDrawerClick}>Show Drawer</Button>
                  <Drawer
                    show={leftDrawerShow}
                    mask
                    onItemClick={onItemClick}
                    onClose={onClose}
                    items={['Menu11', 'Menu2']}
                  ></Drawer>
                </div>
              </div>
            </div>

            <div class="panel">
              <div class="panel__title">Slide out to the right</div>
              <div class="panel__content no-padding">
                <div class="example">
                  <Button onClick={rightDrawerClick}>Show Drawer</Button>
                  <Drawer
                    show={rightDrawerShow}
                    right
                    mask
                    onItemClick={onItemClick}
                    onClose={onClose}
                    items={['Menu1', 'Menu2']}
                  ></Drawer>
                </div>
              </div>
            </div>

            <div class="panel">
              <div class="panel__title">Custom content</div>
              <div class="panel__content no-padding">
                <div class="example">
                  <Button onClick={childrenDrawerClick}>Show Drawer</Button>
                  <Drawer show={childrenDrawerShow} mask onItemClick={onItemClick} onClose={onClose}>
                    {childrenItem.map((item, index) => (
                      <div
                        class={classNames('drawer-item', {
                          'drawer-item--sub': index === 1 || index === 2
                        })}
                        onClick={() => onItemClick(index)}
                        key={`drawer-item-${index}`}
                      >
                        { item}
                        {index === 3 && icons[index] && <Badge value="3"></Badge>}
                      </div>
                    ))}
                  </Drawer>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
})

```

```vue
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

```

</div> 

## API
| Properties  | Descrition                          | Type              | Default |
| ----------- | ----------------------------------- | ----------------- | ------- |
| className   | class name                          | string            | -       |
| style       | custom style                        | CSSProperties     | -       |
| show        | show or hide                        | boolean           | `false` |
| mask        | show the mask when drawer open      | boolean           | `true`  |
| right       | Whether to slide out from the right | boolean           | `false` |
| width       | drawer width                        | `number | string` | `230px` |
| items       | Menu list                           | []                | -       |
| onItemClick | Triggered when the menu is clicked  | (index)=>void     | -       |
| onClose     | Triggered when the drawer is closed | ()=>void          | -       |