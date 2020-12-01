import { defineComponent, reactive, ref } from 'vue'
import { Button, FloatLayout, Toast } from '/@/onebay-ui/src'
import DocsHeader from '../../../components/DocHeader/DocsHeader'

export default defineComponent({
  name: 'FloatLayoutPage',
  setup() {
    const state = reactive({
      isOpened1: false,
      isOpened2: false,
      isOpened3: false,
      showToast: false,

    })
    const toastContent = ref('')

    type State = keyof typeof state
    const openToast = (content: string) => {
      toastContent.value = content
      state.showToast = true
    }
    const closeToast = () => {
      state.showToast = false
    }
    const onScroll = (event: Event) => {
      alert({
        title: `onScroll: ${event}`,
        icon: 'none'
      })
    }

    const onScrollToLower = (event: Event) => {
      alert({
        title: `onScrollToLower: ${event}`,
        icon: 'none'
      })
    }

    const onScrollToUpper = (event: Event) => {
      alert({
        title: `onScrollToUpper: ${event}`,
        icon: 'none'
      })
    }

    const handleClick = (type: string) => {
      state[`isOpened${type}` as State] = true
    }

    const handleClose = (type: string) => {
      state[`isOpened${type}` as State] = false
      openToast(`handleClose: ${type}`)
    }
    return () => {
      const { isOpened1, isOpened2, isOpened3, showToast } = state
      return (
        <div class="page float-layout-page">
          <DocsHeader title="Float Layout 浮动弹层" />

          <div class="doc-body">
            {/* <!-- Basic usage --> */}
            <div class="panel">
              <div class="panel__title">Basic usage</div>
              <div class="panel__content">
                <div class="example-item">
                  <Button onClick={() => handleClick('1')}>open Float Layout</Button>
                </div>
              </div>
            </div>

            {/* <!-- max height --> */}
            <div class="panel">
              <div class="panel__title">max height</div>
              <div class="panel__content">
                <div class="example-item">
                  <Button onClick={() => handleClick('2')}>open Float Layout</Button>
                </div>
              </div>
            </div>

            <div class="panel">
              <div class="panel__title">Event Listeners</div>
              <div class="panel__content">
                <div class="example-item">
                  <Button onClick={() => handleClick('3')}>open Float Layout</Button>
                </div>
              </div>
            </div>
          </div>

          <FloatLayout isOpened={isOpened1} onClose={() => handleClose('1')}>
            <div class="content-wrapper">
              This is the content area. Write it as you like. This is the content area. Write it as you
              like. This is the content area. Write it as you like. This is the content area. Write it as
              you like. This is the content area.
      </div>
          </FloatLayout>

          <FloatLayout
            title="This is a title"
            isOpened={isOpened2}
            onClose={() => handleClose('2')}
          >
            <div class="content-wrapper">
              "The Poet Continues to Silence" contains twelve short stories by Yehoshua. They use
              dreamlike brushwork to create characters that are both sensitive and slow. Sometimes the
              story is in the city, sometimes in the battlefield, sometimes in the remote mountain
              village, sometimes completely confined to the family, and always grotesque from commonplace.
              The main thread of each story brings ever-increasing tension, even on the surface, nothing
              important happens at all: The poet of the seal pen lives with his son with intellectual
              disability; the desperate spare child takes care of the child of the dream lover and others
              The father who had been sent for many years intercepted letters from his daughter’s suitor.
              The villagers waited for the train to pass by in a ritual ritual. The commander refused to
              order his troops on the battlefield. The sleepy worker slipped home to rest. There was an
              immortal old man among the neighbors...
      </div>
          </FloatLayout>

          <FloatLayout
            title="This is a title"
            isOpened={isOpened3}
            onScroll={onScroll}
            onScrollToLower={onScrollToLower}
            onScrollToUpper={onScrollToUpper}
            onClose={() => handleClose('3')}
          >
            <div class="content-wrapper">
              <p>this is content!!!</p>
              <p>this is content!!!</p>
              <p>this is content!!!</p>
              <p>this is content!!!</p>
              <p>this is content!!!</p>
              <p>this is content!!!</p>
              <p>this is content!!!</p>
              <p>this is content!!!</p>
              <p>this is content!!!</p>
              <p>this is content!!!</p>
              <p>this is content!!!</p>
              <p>this is content!!!</p>
              <p>this is content!!!</p>
              <p>this is content!!!</p>
              <p>this is content!!!</p>
              <p>this is content!!!</p>
              <p>this is content!!!</p>
              <p>this is content!!!</p>
              <p>this is content!!!</p>
              <p>this is content!!!</p>
              <p>this is content!!!</p>
              <p>this is content!!!</p>
              <p>this is content!!!</p>
              <p>this is content!!!</p>
              <p>this is content!!!</p>
              <p>this is content!!!</p>
              <p>this is content!!!</p>
              <p>this is content!!!</p>
              <p>this is content!!!</p>
              <p>this is content!!!</p>
            </div>
          </FloatLayout>
          <Toast isOpened={showToast} text="toastContent" onClose={closeToast}></Toast>
        </div>
      )
    }
  }
})