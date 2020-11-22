import DocsHeader from '../../../components/DocHeader/DocsHeader'
import { defineComponent, ref } from 'vue'
import { PullToRefresh, Button, Noticebar } from 'swift-ui/src/index'
import toast from 'swift-ui/src/plugins/toast'

export default defineComponent({
  name: 'PullToRefreshPage',
  components: {
    Button,
    PullToRefresh
  },
  setup(props) {
    const direction = ref<'up' | 'down'>('down')
    const changeDirection = () => {
      direction.value = direction.value === 'up' ? 'down' : 'up'
    }
    const onRefresh = () => {
      toast({
        text: 'onRefresh'
      })
    }
    return () => {
      return (
        <div class="page row-page">
          <Noticebar marquee>
            This component only supports Touch events, please use mobile mode/device to open this page.
          </Noticebar>
          <DocsHeader title="PullToRefresh" />
          <div class="doc-body" style="height: 100%">
            <div class="panel">
              <div class="panel__title">Basic usage</div>
              <div class="panel__content no-padding">
                <Button onClick={changeDirection}> direction: {direction.value} </Button>
                <PullToRefresh
                  onRefresh={onRefresh}
                  style="height: 60vh; overflow: auto"
                  direction={direction.value}
                >
                  {
                    Array(20).fill(0).map((_, index) => {
                      return (
                        <div key={index} style="text-align: center; padding: 20px">
                          pull { direction.value} { index}
                        </div>
                      )
                    })
                  }
                </PullToRefresh>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
})
