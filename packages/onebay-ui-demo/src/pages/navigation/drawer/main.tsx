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
