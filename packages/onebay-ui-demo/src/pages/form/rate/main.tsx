import './index.scss'
import { defineComponent, reactive } from 'vue'
import { Rate } from 'onebay-ui'
import DocsHeader from '../../../components/DocHeader/DocsHeader'

export default defineComponent({
  name: 'RatePage',
  components: { Rate },
  setup() {
    const state = reactive({
      rateValue1: 3,
      rateValue2: 3,
      rateValue3: 3,
      rateValue4: 3
    })
    type State = keyof typeof state
    const handleRateChange = (stateName: State, value: number) => {
      state[stateName] = value
    }
    return () => {
      const {
        rateValue1,
        rateValue2,
        rateValue3,
        rateValue4
      } = state
      return (
        <div class="page">
          {/* <!-- S Header --> */}
          <DocsHeader title="Rate"></DocsHeader>
          {/* <!-- E Header --> */}

          {/* <!-- S Body --> */}
          <div class="doc-body">
            {/* <!-- Basic usage --> */}
            <div class="panel">
              <div class="panel__title">Basic usage</div>
              <div class="panel__content">
                <div class="example-item">
                  <Rate value={rateValue1} onChange={(val: number) => handleRateChange('rateValue1', val)} />
                </div>
              </div>
            </div>

            {/* <!-- Custom size --> */}
            <div class="panel">
              <div class="panel__title">Custom size</div>
              <div class="panel__content">
                <div class="example-item">
                  <Rate
                    size="16"
                    value={rateValue2}
                    onChange={(val: number) => handleRateChange('rateValue2', val)}
                  />
                </div>
              </div>
            </div>

            {/* <!-- Custom rate --> */}
            <div class="panel">
              <div class="panel__title">Custom rate</div>
              <div class="panel__content">
                <div class="example-item">
                  <Rate
                    max={10}
                    value={rateValue3}
                    onChange={(val: number) => handleRateChange('rateValue3', val)}
                  />
                </div>
              </div>
            </div>

            {/* <!-- Custom margin --> */}
            <div class="panel">
              <div class="panel__title">Custom margin</div>
              <div class="panel__content">
                <div class="example-item">
                  <Rate
                    margin={15}
                    value={rateValue4}
                    onChange={(val: number) => handleRateChange('rateValue4', val)}
                  />
                </div>
              </div>
            </div>

            {/* <!-- Readonly --> */}
            <div class="panel">
              <div class="panel__title">Readonly</div>
              <div class="panel__content">
                <div class="example-item">
                  <div>rate: 3.5</div>
                  <div>
                    <Rate value={3.5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- E Body --> */}
        </div>
      )
    }
  }
})