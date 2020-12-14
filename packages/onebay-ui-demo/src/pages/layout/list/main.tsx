import { defineComponent } from 'vue'
import { List } from onebay - ui
import toast from 'onebay-ui'
import DocsHeader from '../../../components/DocHeader/DocsHeader'

const { ListItem } = List
export default defineComponent({
  name: 'ListPage',
  setup() {
    const handleChange = (e: string) => {
      toast({
        text: `Change Switch: ${e}`
      })
    }

    const handleClick = (e: string) => {
      toast({
        text: `Click item`
      })
    }
    return () => {
      return (
        <div class="page">
          <DocsHeader title="List" />

          <div class="doc-body">
            {/* <!-- Basic usage --> */}
            <div class="panel">
              <div class="panel__title">Basic usage</div>
              <div class="panel__content no-padding">
                <div class="example-item">
                  <List>
                    <ListItem title="Title text" onClick={handleClick} />
                    <ListItem title="Title text" arrow="right" />
                    <ListItem title="Title text" extraText="details info" />
                    <ListItem title="Disabled state" disabled extraText="Detailed info" />
                  </List>
                </div>
              </div>
            </div>

            {/* <!-- Contains description information --> */}
            <div class="panel">
              <div class="panel__title">Contains description information</div>
              <div class="panel__content no-padding">
                <div class="example-item">
                  <List>
                    <ListItem title="Title text" note="Description" />
                    <ListItem title="Title text" note="Description" arrow="right" />
                    <ListItem
                      arrow="right"
                      note="Description"
                      title="I am a very long, very long title text"
                      extraText="Detailed info detailed information detailed information"
                    />
                  </List>
                </div>
              </div>
            </div>

            {/* <!-- Include pictures --> */}
            <div class="panel">
              <div class="panel__title">Include pictures</div>
              <div class="panel__content no-padding">
                <div class="example-item">
                  <List>
                    <ListItem
                      title="Title text"
                      arrow="right"
                      thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
                    />
                    <ListItem
                      title="Title text"
                      note="Description"
                      arrow="right"
                      thumb="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
                    />
                    <ListItem
                      title="Title text"
                      note="Description"
                      extraText="Detailed info"
                      arrow="right"
                      thumb="http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
                    />
                  </List>
                </div>
              </div>
            </div>

            <div class="panel">
              <div class="panel__title">Support icon (cannot exist with thumb at the same time)</div>
              <div class="panel__content no-padding">
                <div class="example-item">
                  <List>
                    <ListItem
                      title="Title text"
                      note="Description"
                      arrow="right"
                      iconInfo={{
                        size: 25,
                        color: '#78A4FA',
                        value: 'calendar'
                      }}
                    />
                    <ListItem
                      title="Title text"
                      note="Description"
                      extraText="Detailed info"
                      arrow="right"
                      iconInfo={{
                        size: 25,
                        color: '#FF4949',
                        value: 'bookmark'
                      }}
                    />
                  </List>
                </div>
              </div>
            </div>

            {/* <!-- no border --> */}
            <div class="panel">
              <div class="panel__title">no border</div>
              <div class="panel__content no-padding">
                <div class="example-item">
                  <List hasBorder={false}>
                    <ListItem
                      isSwitch
                      title="Title text"
                      hasBorder={false}
                      onSwitchChange={handleChange}
                    />
                    <ListItem
                      isSwitch
                      title="Title text"
                      hasBorder={false}
                      onSwitchChange={handleChange}
                    />
                  </List>
                </div>
              </div>
            </div>

            {/* <!-- Switch button list --> */}
            <div class="panel">
              <div class="panel__title">Switch button list</div>
              <div class="panel__content no-padding">
                <div class="example-item">
                  <List>
                    <ListItem
                      title="Title text"
                      isSwitch
                      onClick={handleClick}
                      onSwitchChange={handleChange}
                    />
                    <ListItem
                      isSwitch
                      disabled
                      switchIsCheck
                      title="Disabled state"
                      onSwitchChange={handleChange}
                    />
                    <ListItem isSwitch switchIsCheck title="Title text" onSwitchChange={handleChange} />
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
})