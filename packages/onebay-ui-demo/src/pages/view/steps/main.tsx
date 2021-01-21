import DocsHeader from '../../../components/DocHeader/DocsHeader'
import { defineComponent, reactive } from 'vue'
import { Steps } from 'onebay-ui'
const items1 = [{ title: 'step 1' }, { title: 'step 2' }]

const items2 = [{ title: 'step 1' }, { title: 'step 2' }, { title: 'step 3' }]

const items3 = [
  { title: 'step 1', desc: 'Here is additional information, up to two lines' },
  { title: 'step 2', desc: 'Here is additional information, up to two lines' },
  { title: 'step 3', desc: 'Here is additional information, up to two lines' }
]

const items4 = [
  {
    title: 'step 1',
    desc: 'Here is additional information, up to two lines',
    icon: {
      value: 'sound',
      activeColor: '#fff',
      inactiveColor: '#78A4FA',
      size: '14'
    }
  },
  {
    title: 'step 2',
    desc: 'Here is additional information, up to two lines',
    icon: {
      value: 'shopping-cart',
      activeColor: '#fff',
      inactiveColor: '#78A4FA',
      size: '14'
    }
  },
  {
    title: 'step 3',
    desc: 'Here is additional information, up to two lines',
    icon: {
      value: 'camera',
      activeColor: '#fff',
      inactiveColor: '#78A4FA',
      size: '14'
    }
  }
]

const items5 = [
  {
    title: 'step 1',
    desc: 'Here is additional information, up to two lines',
    status: 'success'
  },
  {
    title: 'step 2',
    desc: 'Here is additional information, up to two lines'
  },
  {
    title: 'step 3',
    desc: 'Here is additional information, up to two lines',
    status: 'error'
  }
]

export default defineComponent({
  name: 'StepsPage',
  components: {
    Steps
  },
  data() {
    return {
      current1: 0,
      current2: 0,
      current3: 0,
      current4: 0,
      current5: 1,
      items1,
      items2,
      items3,
      items4,
      items5
    }
  },
  setup() {
    const state = reactive({
      current1: 0,
      current2: 0,
      current3: 0,
      current4: 0,
      current5: 1
    })
    type State = keyof typeof state
    const onChange = (stateName: State, current: number) => {
      state[stateName] = current
    }
    return () => {
      const { current1, current2, current3, current4, current5 } = state
      return (
        <div class="page">
          <DocsHeader title="Steps"></DocsHeader>

          <div class="doc-body">
            {/* <!-- Basic usage --> */}
            <div class="panel">
              <div class="panel__title">Basic usage</div>
              <div class="panel__content">
                <div class="example-item">
                  <Steps
                    items={items1}
                    current={current1}
                    onChange={(val: number) => {
                      onChange('current1', val)
                    }}
                  />
                  <Steps
                    items={items2}
                    current={current2}
                    onChange={(val: number) => onChange('current2', val)}
                  />
                </div>
              </div>
            </div>

            {/* <!-- With additional information --> */}
            <div class="panel">
              <div class="panel__title">With additional information</div>
              <div class="panel__content">
                <div class="example-item">
                  <Steps
                    items={items3}
                    current={current3}
                    onChange={(val: number) => onChange('current3', val)}
                  />
                </div>
              </div>
            </div>

            {/* <!-- Custom icon --> */}
            <div class="panel">
              <div class="panel__title">Custom icon</div>
              <div class="panel__content">
                <div class="example-item">
                  <Steps
                    items={items4}
                    current={current4}
                    onChange={(val: number) => onChange('current4', val)}
                  />
                </div>
              </div>
            </div>

            {/* <!-- Status step bar --> */}
            <div class="panel">
              <div class="panel__title">Status step bar</div>
              <div class="panel__content">
                <div class="example-item">
                  <Steps
                    items={items5}
                    current={current5}
                    onChange={(val: number) => onChange('current5', val)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
})