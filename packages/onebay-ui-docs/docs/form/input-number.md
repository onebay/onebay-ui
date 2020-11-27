# input-number 

<DemoView />
<BackTop />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```tsx
import { defineComponent, reactive } from 'vue'
import { InputNumber } from 'onebay-ui/src'
import DocsHeader from '../../../components/DocHeader/DocsHeader'
import './index.scss'

export default defineComponent({
  name: 'InputNumberPage',
  components: {
    InputNumber
  },
  setup() {
    const state = reactive({
      number1: 1,
      number2: 1,
      number3: 1,
      number4: 1,
      number5: 1,
      number6: 1
    })
    type State = keyof typeof state
    const handleNumberChange = (stateName: State, value: number, e: Event) => {
      state[stateName] = value
      console.log('Event:', e)
    }

    return () => {
      return (
        <div class="page">
          {/* <!-- S Header --> */}
          <DocsHeader title="Input Number"></DocsHeader>
          {/* <!-- E Header --> */}

          {/* <!-- S Body --> */}
          <div class="doc-body">
            {/* <!-- Basic usage --> */}
            <div class="panel">
              <div class="panel__title">Basic usage</div>
              <div class="panel__content">
                <div class="example-item">
                  <div class="example-item__desc">min=0, max=10, step=1</div>
                  <InputNumber
                    min={0}
                    max={10}
                    step={1}
                    value={state.number1}
                    onChange={(value: number, e: Event) => handleNumberChange('number1', value, e)}
                  />
                </div>
              </div>
            </div>

            {/* <!-- Decimal --> */}
            <div class="panel">
              <div class="panel__title">Decimal</div>
              <div class="panel__content">
                <div class="example-item">
                  <div class="example-item__desc">min=0, max=10, step=0.1</div>
                  <InputNumber
                    type="digit"
                    min={0}
                    max={10}
                    step={0.1}
                    value={state.number2}
                    onChange={(value: number, e: Event) => handleNumberChange('number2', value, e)}
                  />
                </div>
              </div>
            </div>

            {/* <!-- Disabled state --> */}
            <div class="panel">
              <div class="panel__title">Disabled state</div>
              <div class="panel__content">
                <div class="example-item">
                  <InputNumber
                    disabled
                    min={0}
                    max={10}
                    step={1}
                    value={state.number3}
                    onChange={(value: number, e: Event) => handleNumberChange('number3', value, e)}
                  />
                </div>
              </div>
            </div>
            {/* <!-- Disable input state --> */}
            <div class="panel">
              <div class="panel__title">Disable input state</div>
              <div class="panel__content">
                <div class="example-item">
                  <InputNumber
                    disabledInput
                    min={0}
                    max={10}
                    step={1}
                    value={state.number4}
                    onChange={(value: number, e: Event) => handleNumberChange('number4', value, e)}
                  />
                </div>
              </div>
            </div>

            {/* <!-- Custom width --> */}
            <div class="panel">
              <div class="panel__title">Custom width</div>
              <div class="panel__content">
                <div class="example-item">
                  <InputNumber
                    width={200}
                    min={0}
                    max={10}
                    step={1}
                    value={state.number5}
                    onChange={(value: number, e: Event) => handleNumberChange('number5', value, e)}
                  />
                </div>
              </div>
            </div>

            {/* <!-- large size --> */}
            <div class="panel">
              <div class="panel__title">large size</div>
              <div class="panel__content">
                <div class="example-item">
                  <InputNumber
                    size="large"
                    min={0}
                    max={10}
                    step={1}
                    value={state.number6}
                    onChange={(value: number, e: Event) => handleNumberChange('number6', value, e)}
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
```

```vue
<template>
  <div class="page">
    <!-- S Header -->
    <DocsHeader title="Input Number"></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <div class="doc-body">
      <!-- Basic usage -->
      <div class="panel">
        <div class="panel__title">Basic usage</div>
        <div class="panel__content">
          <div class="example-item">
            <div class="example-item__desc">min=0, max=10, step=1</div>
            <InputNumber
              :min="0"
              :max="10"
              :step="1"
              :value="state.number1"
              :onChange="handleNumberChange.bind(this, 'number1')"
            />
          </div>
        </div>
      </div>

      <!-- Decimal -->
      <div class="panel">
        <div class="panel__title">Decimal</div>
        <div class="panel__content">
          <div class="example-item">
            <div class="example-item__desc">min=0, max=10, step=0.1</div>
            <InputNumber
              type="digit"
              :min="0"
              :max="10"
              :step="0.1"
              :value="state.number2"
              :onChange="handleNumberChange.bind(this, 'number2')"
            />
          </div>
        </div>
      </div>

      <!-- Disabled state -->
      <div class="panel">
        <div class="panel__title">Disabled state</div>
        <div class="panel__content">
          <div class="example-item">
            <InputNumber
              disabled
              :min="0"
              :max="10"
              :step="1"
              :value="state.number3"
              :onChange="handleNumberChange.bind(this, 'number3')"
            />
          </div>
        </div>
      </div>
      <!-- Disable input state -->
      <div class="panel">
        <div class="panel__title">Disable input state</div>
        <div class="panel__content">
          <div class="example-item">
            <InputNumber
              disabledInput
              :min="0"
              :max="10"
              :step="1"
              :value="state.number6"
              :onChange="handleNumberChange.bind(this, 'number6')"
            />
          </div>
        </div>
      </div>

      <!-- Custom width -->
      <div class="panel">
        <div class="panel__title">Custom width</div>
        <div class="panel__content">
          <div class="example-item">
            <InputNumber
              :width="200"
              :min="0"
              :max="10"
              :step="1"
              :value="state.number4"
              :onChange="handleNumberChange.bind(this, 'number4')"
            />
          </div>
        </div>
      </div>

      <!-- large size -->
      <div class="panel">
        <div class="panel__title">large size</div>
        <div class="panel__content">
          <div class="example-item">
            <InputNumber
              size="large"
              :min="0"
              :max="10"
              :step="1"
              :value="state.number5"
              :onChange="handleNumberChange.bind(this, 'number5')"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- E Body -->
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { InputNumber } from '/@/onebay-ui/src/index.ts'
import './index.scss'

export default defineComponent({
  name: 'InputNumberPage',
  components: {
    InputNumber
  },
  data() {
    return {
      state: {
        number1: 1,
        number2: 1,
        number3: 1,
        number4: 1,
        number5: 1,
        number6: 1
      }
    }
  },
  methods: {
    handleNumberChange(stateName, value, e) {
      this.state[stateName] = value
      console.log('Event:', e)
    }
  }
})
</script>

```

</div> 