# slider 

<DemoView />
<BackToTop />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```tsx
import './index.scss'
import { defineComponent } from 'vue'
import { Slider, Noticebar } from 'onebay-ui'
import DocsHeader from '../../../components/DocHeader/DocsHeader'

export default defineComponent({
  name: 'SliderPage',
  setup() {
    return () => {
      return (
        <div class="page">
          <Noticebar marquee>
            This component only supports Touch events, please use mobile mode/device to open this page.
          </Noticebar>
          {/* <!-- S Header --> */}
          <DocsHeader title="Slider"></DocsHeader>
          {/* <!-- E Header --> */}

          {/* <!-- S Body --> */}
          <div class="doc-body">
            {/* <!-- Basic usage --> */}
            <div class="panel">
              <div class="panel__title">Basic usage</div>
              <div class="panel__content">
                <div class="example-item">
                  <div class="example-item__desc">value=50</div>
                  <Slider value={50}></Slider>
                </div>
              </div>
            </div>

            {/* <!-- Show current Value --> */}
            <div class="panel">
              <div class="panel__title">Show current Value</div>
              <div class="panel__content">
                <div class="example-item">
                  <div class="example-item__desc">showValue = true</div>
                  <Slider value={50} showValue></Slider>
                </div>
              </div>
            </div>

            {/* <!-- Set max/min --> */}
            <div class="panel">
              <div class="panel__title">Set max/min</div>
              <div class="panel__content">
                <div class="example-item">
                  <div class="example-item__desc">min = 50, max = 200</div>
                  <Slider value={100} min={50} max={200} showValue></Slider>
                </div>
              </div>
            </div>

            {/* <!-- Custom style --> */}
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
                    value={50}
                    activeColor="#4285F4"
                    handlerColor="#BDBDBD"
                    trackColor="#FF4455"
                  ></Slider>
                </div>
              </div>
            </div>

            {/* <!-- disabled status --> */}
            <div class="panel">
              <div class="panel__title">disabled status</div>
              <div class="panel__content">
                <div class="example-item">
                  <div class="example-item__desc">disabled = true</div>
                  <Slider value={50} showValue disabled></Slider>
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
    <Noticebar marquee>
      This component only supports Touch events, please use mobile mode/device to open this page.
    </Noticebar>
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
import { Slider, Noticebar } from 'onebay-ui'
export default defineComponent({
  name: 'SliderPage',
  components: {
    Slider,
    Noticebar
  }
})
</script>

```

</div> 

## API

| Properties   | Descrition                           | Type                   | Default |
| ------------ | ------------------------------------ | ---------------------- | ------- |
| value        | the slider value                     | number                 | 0       |
| onChange     | trigger when the slider change       | (value, event) => void | -       |
| className    | class name                           | string                 | -       |
| style  | custom style                         | CSSProperties          | -       |
| showValue    | Whether to display the current Value | CSSProperties          | -       |
| disabled     | Whether is disabled                  | boolean                | `false` |
| activeColor  | Selected color                       | string                 | ''      |
| handlerColor | slider handler color                 | string                 | -       |
| trackColor   | slider track color                   | string                 | -       |
| max          | Maxinum value                        | number                 | 100     |
| min          | Mininum value                        | number                 | 0       |