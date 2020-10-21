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
import { InputNumber } from '/@/swift-ui/src/index.ts'
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
