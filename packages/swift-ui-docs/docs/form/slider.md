# slider 

<DemoView />
<BackTop />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```vue
<template>
  <div class="page">
    <!-- S Header -->
    <DocsHeader title="Slider"></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <div class="doc-body">
      <!-- Basic usage -->
      <div class="panel">
        <div class="panel__title">Basic usage</div>
        <div class="panel__content">
          <div class="example-item">
            <div class="example-item__desc">value=50</div>
            <Slider :value="50"></Slider>
          </div>
        </div>
      </div>

      <!-- Show current Value -->
      <div class="panel">
        <div class="panel__title">Show current Value</div>
        <div class="panel__content">
          <div class="example-item">
            <div class="example-item__desc">showValue = true</div>
            <Slider :value="50" showValue></Slider>
          </div>
        </div>
      </div>

      <!-- Set max/min -->
      <div class="panel">
        <div class="panel__title">Set max/min</div>
        <div class="panel__content">
          <div class="example-item">
            <div class="example-item__desc">min = 50, max = 200</div>
            <Slider :value="100" :min="50" :max="200" showValue></Slider>
          </div>
        </div>
      </div>

      <!-- Custom style -->
      <div class="panel">
        <div class="panel__title">Custom style</div>
        <div class="panel__content">
          <div class="example-item">
            <div class="example-item__desc">
              activeColor = "#4285F4" <br />
              handlerColor = "#BDBDBD" <br />
              trackColor="#FF4455"
            </div>
            <Slider
              :value="50"
              activeColor="#4285F4"
              handlerColor="#BDBDBD"
              trackColor="#FF4455"
            ></Slider>
          </div>
        </div>
      </div>

      <!-- disabled status -->
      <div class="panel">
        <div class="panel__title">disabled status</div>
        <div class="panel__content">
          <div class="example-item">
            <div class="example-item__desc">disabled = true</div>
            <Slider :value="50" showValue disabled></Slider>
          </div>
        </div>
      </div>
    </div>
    <!-- E Body -->
  </div>
</template>

<script>
import './index.scss'
import { defineComponent } from 'vue'
import { Slider } from '/@/swift-ui/src/index.ts'
export default defineComponent({
  name: 'SliderPage',
  components: {
    Slider
  }
})
</script>

```

</div> 