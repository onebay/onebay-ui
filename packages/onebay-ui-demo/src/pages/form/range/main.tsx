import './index.scss'
import { defineComponent, reactive } from 'vue'
import { Range, Noticebar } from onebay - ui
import DocsHeader from '../../../components/DocHeader/DocsHeader'

export default defineComponent({
  name: 'RangePage',
  components: {
    Range
  },
  setup(props) {
    const state = reactive({
      value1: [50, 60],
      value2: [50, 60]
    })
    type State = keyof typeof state
    const handleChange = (key: State, value: number[]) => {
      state[key] = value
    }

    return () => {
      const { value1, value2 } = state
      return (
        <div class="page">
          <Noticebar marquee>
            This component only supports Touch events, please use mobile mode/device to open this page.
          </Noticebar>
          {/* <!-- S Header --> */}
          <DocsHeader title="Range"></DocsHeader>
          {/* <!-- E Header --> */}

          {/* <!-- S Body --> */}
          <div class="doc-body">
            {/* <!-- Basic usage --> */}
            <div class="panel">
              <div class="panel__title">Basic usage</div>
              <div class="panel__content">
                <div class="example-item">Value range：{value1[0]}~{value1[1]}</div>
                <Range
                  min={30}
                  max={90}
                  value={value1}
                  onChange={(val: number[]) => handleChange('value1', val)}
                />
              </div>
            </div>
            {/* <!-- Custom style --> */}
            <div class="panel">
              <div class="panel__title">Custom style</div>
              <div class="panel__content">
                <div class="example-item">Value range：{value2[0]}~{value2[1]}</div>
                <Range
                  sliderStyle={{ backgroundColor: '#6190E8' }}
                  value={value2}
                  onChange={(val: number[]) => handleChange('value2', val)}
                />
              </div>
            </div>
            {/* <!-- Disabled state --> */}
            <div class="panel">
              <div class="panel__title">Disabled state</div>
              <div class="panel__content">
                <Range value={[30, 50]} disabled />
              </div>
            </div>
          </div>
          {/* <!-- E Body --> */}
        </div>
      )
    }
  }
})