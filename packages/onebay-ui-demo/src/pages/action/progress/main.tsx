import { defineComponent, ref } from 'vue'
import { Button, Progress } from onebay - ui
import DocsHeader from '../../../components/DocHeader/DocsHeader'
import './index.scss'

const OFFSET = 15
export default defineComponent({
  name: 'ProgressPage',
  components: {
    Button,
    Progress
  },
  setup() {
    const percent = ref(0)

    const reduce = () => {
      if (percent.value === 0) {
        return
      }
      percent.value = percent.value - OFFSET < 0 ? 0 : percent.value - OFFSET
    }

    const increase = () => {
      if (percent.value === 100) {
        return
      }
      percent.value = percent.value + OFFSET > 100 ? 100 : percent.value + OFFSET
    }

    return () => {
      return (
        <div class="page progress-page">
          <DocsHeader title="Progress" />

          <div class="doc-body">
            <div class="panel">
              <div class="panel__title">Basic process</div>
              <div class="panel__content">
                <div class="example-item">
                  <Progress percent={25} />
                </div>
                <div class="example-item">
                  <Progress percent={50} />
                </div>
                <div class="example-item">
                  <Progress percent={75} />
                </div>
              </div>
            </div>
            <div class="panel">
              <div class="panel__title">Hide progress text</div>
              <div class="panel__content">
                <div class="example-item">
                  <Progress percent={25} isHidePercent />
                </div>
                <div class="example-item">
                  <Progress percent={75} isHidePercent />
                </div>
              </div>
            </div>

            <div class="panel">
              <div class="panel__title">Custom progress bar line width</div>
              <div class="panel__content">
                <div class="example-item">
                  <Progress percent={25} strokeWidth={6} />
                </div>
                <div class="example-item">
                  <Progress percent={50} strokeWidth={8} />
                </div>
                <div class="example-item">
                  <Progress percent={75} strokeWidth={10} />
                </div>
              </div>
            </div>

            <div class="panel">
              <div class="panel__title">Custom color</div>
              <div class="panel__content">
                <div class="example-item">
                  <Progress percent={25} color="#FF4949" />
                </div>
                <div class="example-item">
                  <Progress percent={50} color="#13CE66" />
                </div>
                <div class="example-item">
                  <Progress percent={75} color="#FFC82C" />
                </div>
              </div>
            </div>

            <div class="panel">
              <div class="panel__title">Different states</div>
              <div class="panel__content">
                <div class="example-item">
                  <div class="example-item__desc">time out</div>
                  <Progress percent={25} />
                </div>
                <div class="example-item">
                  <div class="example-item__desc">processing</div>
                  <Progress percent={50} status="progress" />
                </div>
                <div class="example-item">
                  <div class="example-item__desc">error</div>
                  <Progress percent={75} status="error" />
                </div>
                <div class="example-item">
                  <div class="example-item__desc">completed</div>
                  <Progress percent={100} status="success" />
                </div>
              </div>
            </div>

            <div class="panel">
              <div class="panel__title">actual case</div>
              <div class="panel__content">
                <div class="example-item">
                  <Progress percent={percent.value} />
                  <div class="example-item__buttons">
                    <div class="btn">
                      <Button size="small" onClick={reduce}> subtract </Button>
                    </div>
                    <div class="btn">
                      <Button size="small" onClick={increase}> add </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
})