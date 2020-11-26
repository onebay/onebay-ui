# segmented-control 

<DemoView />
<BackTop />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```vue
<template>
  <div class="page">
    <!-- S Header -->
    <DocsHeader title="Segmented Control"></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <div class="doc-body">
      <!-- Basic usage -->
      <div class="panel">
        <div class="panel__title">Basic usage</div>
        <div class="panel__content">
          <div>
            <SegmentedControl
              :onClick="handleClick.bind(this, 1)"
              @tap="handleClick"
              :current="current1"
              :values="tabList2"
            />
            <div class="tab-content">tab {{ current1 + 1 }} content</div>
          </div>
        </div>
      </div>

      <!-- custom -->
      <div class="panel">
        <div class="panel__title">Custom color, font size</div>
        <div class="panel__content">
          <div>
            <SegmentedControl
              :onClick="handleClick.bind(this, 2)"
              selectedColor="#FF4949"
              :fontSize="20"
              :current="current2"
              :values="tabList2"
            />
            <div class="tab-content">tab {{ current2 + 1 }} content</div>
          </div>
        </div>
      </div>

      <!-- Disable -->
      <div class="panel">
        <div class="panel__title">Disable</div>
        <div class="panel__content">
          <SegmentedControl disabled :values="tabList1" />
        </div>
      </div>
    </div>
    <!-- E Body -->
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { SegmentedControl } from '/@/onebay-ui/src/index.ts'
import './index.scss'
export default defineComponent({
  name: 'SegmentedControlPage',
  components: {
    SegmentedControl
  },
  data() {
    return {
      current1: 0,
      current2: 0,
      tabList1: ['tab1', 'tab2'],
      tabList2: ['tab1', 'tab2', 'tab3']
    }
  },
  methods: {
    handleClick(num, value) {
      this[`current${num}`] = value
    }
  }
})
</script>

```

</div> 