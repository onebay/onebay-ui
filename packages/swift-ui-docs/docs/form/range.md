# range 

<DemoView />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```vue
<template>
  <div class="page">
    <!-- S Header -->
    <DocsHeader title="Range"></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <div class="doc-body">
      <!-- Basic usage -->
      <div class="panel">
        <div class="panel__title">Basic usage</div>
        <div class="panel__content">
          <div class="example-item">Value range：{{ value1[0] }}~{{ value1[1] }}</div>
          <Range
            :min="30"
            :max="90"
            :value="value1"
            :onChange="handleChange.bind(this, 'value1')"
          />
        </div>
      </div>
      <!-- Custom style -->
      <div class="panel">
        <div class="panel__title">Custom style</div>
        <div class="panel__content">
          <div class="example-item">Value range：{{ value2[0] }}~{{ value2[1] }}</div>
          <Range
            :sliderStyle="{ backgroundColor: '#6190E8' }"
            :value="value2"
            :onChange="handleChange.bind(this, 'value2')"
          />
        </div>
      </div>
      <!-- Disabled state -->
      <div class="panel">
        <div class="panel__title">Disabled state</div>
        <div class="panel__content">
          <Range :value="[30, 50]" disabled />
        </div>
      </div>
    </div>
    <!-- E Body -->
  </div>
</template>

<script>
import './index.scss'
import { defineComponent } from 'vue'
import { Range } from '/@/swift-ui/src/index.ts'

export default defineComponent({
  name: 'RangePage',
  components: {
    Range
  },
  data() {
    return {
      value1: [50, 60],
      value2: [50, 60]
    }
  },
  methods: {
    handleChange(key, value) {
      this[key] = value
    }
  }
})
</script>

```

</div> 