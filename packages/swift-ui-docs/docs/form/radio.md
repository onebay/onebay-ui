# radio 

<DemoView />
<BackTop />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```vue
<template>
  <div class="page">
    <!-- S Header -->
    <DocsHeader title="Radio"></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <div class="doc-body">
      <!-- Basic usage -->
      <div class="panel">
        <div class="panel__title">Basic usage</div>
        <div class="panel__content no-padding">
          <div class="radio-container">
            <Radio :options="radioOptions1" :value="radioValue1" :onClick="handleRadioChange" />
          </div>
        </div>
      </div>

      <!-- Contains description -->
      <div class="panel">
        <div class="panel__title">Contains description</div>
        <div class="panel__content no-padding">
          <div class="radio-container">
            <Radio :options="radioOptions2" :value="radioValue2" :onClick="handleRadioChangeScnd" />
          </div>
        </div>
      </div>

      <!-- disable item -->
      <div class="panel">
        <div class="panel__title">disable item</div>
        <div class="panel__content no-padding">
          <div class="radio-container">
            <Radio :options="radioOptions3" :value="radioValue3" :onClick="handleRadioChangeThd" />
          </div>
        </div>
      </div>
    </div>
    <!-- E Body -->
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Radio } from '/@/swift-ui/src/index.ts'

export default {
  name: 'RadioPage',
  components: {
    Radio
  },
  data() {
    return {
      radioValue1: 'option1',
      radioValue2: 'option1',
      radioValue3: 'option3',
      radioOptions1: [
        { label: 'Radio one', value: 'option1' },
        { label: 'Radio two', value: 'option2' },
        { label: 'Radio three ', value: 'option3' }
      ],
      radioOptions2: [
        { label: 'Radio one', value: 'option1', desc: 'Radio description one' },
        { label: 'Radio two', value: 'option2', desc: 'Radio description two' },
        { label: 'Radio three ', value: 'option3', desc: 'Radio description three' }
      ],
      radioOptions3: [
        { label: 'Radio one', value: 'option1', desc: 'Radio description' },
        { label: 'Radio two', value: 'option2' },
        {
          label: 'Radio three disabled',
          value: 'option3',
          desc: 'Radio description',
          disabled: true
        }
      ]
    }
  },
  methods: {
    handleRadioChange(value) {
      this.radioValue1 = value
    },

    handleRadioChangeScnd(value) {
      this.radioValue2 = value
    },

    handleRadioChangeThd(value) {
      this.radioValue3 = value
    }
  }
}
</script>

```

</div> 