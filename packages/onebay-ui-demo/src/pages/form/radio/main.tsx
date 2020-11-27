import { defineComponent, reactive } from 'vue'
import { Radio } from 'onebay-ui/src'
import DocsHeader from '../../../components/DocHeader/DocsHeader'

const radioOptions1 = [
  { label: 'Radio one', value: 'option1' },
  { label: 'Radio two', value: 'option2' },
  { label: 'Radio three ', value: 'option3' }
]

const radioOptions2 = [
  { label: 'Radio one', value: 'option1', desc: 'Radio description one' },
  { label: 'Radio two', value: 'option2', desc: 'Radio description two' },
  { label: 'Radio three ', value: 'option3', desc: 'Radio description three' }
]

const radioOptions3 = [
  { label: 'Radio one', value: 'option1', desc: 'Radio description' },
  { label: 'Radio two', value: 'option2' },
  {
    label: 'Radio three disabled',
    value: 'option3',
    desc: 'Radio description',
    disabled: true
  }
]

export default defineComponent({
  name: 'RadioPage',
  components: {
    Radio
  },
  setup() {
    const state = reactive({
      radioValue1: 'option1',
      radioValue2: 'option1',
      radioValue3: 'option3'
    })
    const handleRadioChange = (value: string) => {
      state.radioValue1 = value
    }

    const handleRadioChangeScnd = (value: string) => {
      state.radioValue2 = value
    }

    const handleRadioChangeThd = (value: string) => {
      state.radioValue3 = value
    }
    return () => {
      const {
        radioValue1,
        radioValue2,
        radioValue3
      } = state
      return (
        <div class="page">
          {/* <!-- S Header --> */}
          <DocsHeader title="Radio"></DocsHeader>
          {/* <!-- E Header --> */}

          {/* <!-- S Body --> */}
          <div class="doc-body">
            {/* <!-- Basic usage --> */}
            <div class="panel">
              <div class="panel__title">Basic usage</div>
              <div class="panel__content no-padding">
                <div class="radio-container">
                  <Radio options={radioOptions1} value={radioValue1} onClick={handleRadioChange} />
                </div>
              </div>
            </div>

            {/* <!-- Contains description --> */}
            <div class="panel">
              <div class="panel__title">Contains description</div>
              <div class="panel__content no-padding">
                <div class="radio-container">
                  <Radio options={radioOptions2} value={radioValue2} onClick={handleRadioChangeScnd} />
                </div>
              </div>
            </div>

            {/* <!-- disable item --> */}
            <div class="panel">
              <div class="panel__title">disable item</div>
              <div class="panel__content no-padding">
                <div class="radio-container">
                  <Radio options={radioOptions3} value={radioValue3} onClick={handleRadioChangeThd} />
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
