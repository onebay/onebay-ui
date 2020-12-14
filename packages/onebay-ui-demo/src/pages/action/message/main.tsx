import { defineComponent, ref } from 'vue'
import { Button } from onebay - ui
import message, { MessageType } from 'onebay-ui'
import DocsHeader from '../../../components/DocHeader/DocsHeader'
import './index.scss'

export default defineComponent({
  name: 'MessagePage',
  components: {
    Button
  },
  setup() {
    const handleClick = (type: string) => {
      message({
        message: 'new message',
        type: type as MessageType
      })
    }
    return () => {
      return (
        <div class="page toast-page">
          <DocsHeader title="Message" />

          <div class="doc-body">
            <div class="panel">
              <div class="panel__title">Basic usage</div>
              <div class="panel__content">
                <div class="example-item">
                  <Button onClick={() => handleClick('')}> normal message </Button>
                </div>
                <div class="example-item">
                  <Button onClick={() => handleClick('success')}> success message </Button>
                </div>
                <div class="example-item">
                  <Button onClick={() => handleClick('error')}> error message </Button>
                </div>
                <div class="example-item">
                  <Button onClick={() => handleClick('warning')}> warning message </Button>
                </div>
                <div class="example-item">
                  <Button onClick={() => handleClick('info')}> prompt message </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
})
