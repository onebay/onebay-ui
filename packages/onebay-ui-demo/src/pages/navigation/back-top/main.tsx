import { defineComponent, ref } from 'vue'
import { BackTop, Button } from 'onebay-ui'
import DocsHeader from '../../../components/DocHeader/DocsHeader'
import './index.scss'

export default defineComponent({
  name: 'BackTopPage',
  components: {
    BackTop,
    Button
  },
  setup() {
    const initStyle = {}
    const topText = ref('')
    const style = ref(initStyle)
    const changeText = (txt: string) => {
      topText.value = txt
    }
    const changeStyle = () => {
      style.value = {
        right: '40px',
        bottom: '40px',
        backgroundColor: '#f45'
      }
    }
    const resetStyle = () => {
      style.value = initStyle
    }
    return () => {
      return (
        <div class="page backtop-page" style="height: 1000px">
          <DocsHeader title="BackTop" />
          <div class="doc-body" style="height: 100%">
            <BackTop v-if="topText" style="style">{topText}</BackTop>
            <BackTop v-else style="style" />
            <div class="panel">
              <div class="panel__title">Basic usage</div>
              <div class="panel__content no-padding">
                <p>default content is "top"</p>
              </div>
            </div>
            <div class="panel">
              <div class="panel__title">Change content</div>
              <div class="panel__content no-padding">
                <Button type="primary" onClick={() => changeText(topText.value === 'top' ? 'up' : 'top')}
                >change default content to text "{topText.value === 'top' ? 'up' : 'top'}"</Button
                >
              </div>
            </div>
            <div class="panel">
              <div class="panel__title">Change style</div>
              <div class="panel__content no-padding">
                <Button type="primary" onClick={changeStyle}>Change style</Button>
              </div>
            </div>
            <div class="panel">
              <div class="panel__title">reset style</div>
              <div class="panel__content no-padding">
                <Button type="primary" onClick={resetStyle}>reset</Button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
})
