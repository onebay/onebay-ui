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
      childrenItem: ['首页', '可自定义结构', '或自定义样式', '消息', '个人'],
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
        content = `你点击了第 ${+index + 1} 个项目`
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
          <DocsHeader title="Drawer 抽屉"></DocsHeader>

          <div class="doc-body">
            <div class="panel">
              <div class="panel__title">左边滑出</div>
              <div class="panel__content no-padding">
                <div class="example">
                  <Button onClick={leftDrawerClick}>显示 Drawer</Button>
                  <Drawer
                    show={leftDrawerShow}
                    mask
                    onItemClick={onItemClick}
                    onClose={onClose}
                    items={['菜单11', '菜单2']}
                  ></Drawer>
                </div>
              </div>
            </div>

            <div class="panel">
              <div class="panel__title">右边滑出</div>
              <div class="panel__content no-padding">
                <div class="example">
                  <Button onClick={rightDrawerClick}>显示 Drawer</Button>
                  <Drawer
                    show={rightDrawerShow}
                    right
                    mask
                    onItemClick={onItemClick}
                    onClose={onClose}
                    items={['菜单1', '菜单2']}
                  ></Drawer>
                </div>
              </div>
            </div>

            <div class="panel">
              <div class="panel__title">自定义内容</div>
              <div class="panel__content no-padding">
                <div class="example">
                  <Button onClick={childrenDrawerClick}>显示 Drawer</Button>
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
