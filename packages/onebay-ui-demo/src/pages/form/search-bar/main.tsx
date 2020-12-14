import { defineComponent, reactive } from 'vue'
import { SearchBar } from onebay - ui
import toast from 'onebay-ui'
import DocsHeader from '../../../components/DocHeader/DocsHeader'

export default defineComponent({
  name: 'SearchBarPage',
  setup() {
    const state = reactive({
      value1: '',
      value2: '',
      value3: '',
      value4: ''
    })
    type State = keyof typeof state
    const onChange = (stateName: State, value: string) => {
      state[stateName] = value
    }
    const onActionClick = () => {
      toast({
        text: 'start search',
        status: 'success'
      })
    }
    return () => {
      const { value1, value2, value3, value4 } = state
      return (
        <div class="page">
          {/* <!-- S Header --> */}
          <DocsHeader title="SearchBar"></DocsHeader>
          {/* <!-- E Header --> */}
          {/* <!-- S Body --> */}
          <div class="doc-body">
            {/* <!-- Basic usage --> */}
            <div class="panel">
              <div class="panel__title">Basic usage</div>
              <div class="panel__content no-padding">
                <div class="component-item">
                  <SearchBar
                    value={value1}
                    onChange={(val: string) => onChange('value1', val)}
                    onActionClick={onActionClick}
                  />
                </div>
              </div>
            </div>

            {/* <!-- Custom button text and click event --> */}
            <div class="panel">
              <div class="panel__title">Custom button text and click event</div>
              <div class="panel__content no-padding">
                <div class="component-item">
                  <SearchBar
                    actionName="Check"
                    value={value2}
                    onChange={(val: string) => onChange('value2', val)}
                    onActionClick={onActionClick}
                  />
                </div>
              </div>
            </div>

            {/* <!-- Always show button --> */}
            <div class="panel">
              <div class="panel__title">Always show button</div>
              <div class="panel__content no-padding">
                <div class="component-item">
                  <SearchBar
                    placeholder="Please enter the ISBN number"
                    showActionButton
                    value={value3}
                    onChange={(val: string) => onChange('value3', val)}
                    onActionClick={onActionClick}
                  />
                </div>
              </div>
            </div>

            {/* <!-- Custom input box type --> */}
            <div class="panel">
              <div class="panel__title">Custom input box type</div>
              <div class="panel__content no-padding">
                <div class="component-item">
                  <SearchBar
                    placeholder="input number"
                    inputType="number"
                    value={value4}
                    onChange={(val: string) => onChange('value4', val)}
                    onActionClick={onActionClick}
                  />
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