# segmented-control 

<DemoView />
<BackToTop />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```tsx
import DocsHeader from '../../../components/DocHeader/DocsHeader'
import { defineComponent, reactive } from 'vue'
import { SegmentedControl } from 'onebay-ui'
import './index.scss'

type Current = 'current1' | 'current2'

export default defineComponent({
  name: 'SegmentedControlPage',
  components: {
    SegmentedControl
  },
  setup() {
    const state = reactive({
      current1: 0,
      current2: 0,
      tabList1: ['tab1', 'tab2'],
      tabList2: ['tab1', 'tab2', 'tab3']
    })

    const handleClick = (num: number, value: number) => {
      state[`current${num}` as Current] = value
    }
    return () => {
      const { current1, current2, tabList1, tabList2 } = state
      return (
        <div class="page">
          {/* <!-- S Header --> */}
          <DocsHeader title="Segmented Control"></DocsHeader>
          {/* <!-- E Header --> */}

          {/* <!-- S Body --> */}
          <div class="doc-body">
            {/* <!-- Basic usage --> */}
            <div class="panel">
              <div class="panel__title">Basic usage</div>
              <div class="panel__content">
                <div>
                  <SegmentedControl
                    onClick={(val: number) => handleClick(val, 1)}
                    current={current1}
                    values={tabList2}
                  />
                  <div class="tab-content">tab {current1 + 1} content</div>
                </div>
              </div>
            </div>

            {/* <!-- custom --> */}
            <div class="panel">
              <div class="panel__title">Custom color, font size</div>
              <div class="panel__content">
                <div>
                  <SegmentedControl
                    onClick="handleClick.bind(this, 2)"
                    selectedColor="#FF4949"
                    fontSize="20"
                    current={current2}
                    values={tabList2}
                  />
                  <div class="tab-content">tab {current2 + 1} content</div>
                </div>
              </div>
            </div>

            {/* <!-- Disable --> */}
            <div class="panel">
              <div class="panel__title">Disable</div>
              <div class="panel__content">
                <SegmentedControl disabled values={tabList1} />
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
import { SegmentedControl } from 'onebay-ui'
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

## API
| Properties    | Descrition                                                                                                   | Type                 | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------ | -------------------- | ------- |
| className     | class name                                                                                                   | string               | -       |
| style         | custom style                                                                                                 | CSSProperties        | -       |
| current       | The currently selected tab index value, counting from 0                                                      | number               | 0       |
| color         | The background color and the font color of the selected label                                                | string               | #fff    |
| disabled      | whether is disabled                                                                                          | boolean              | `false` |
| selectedColor | The selected label background color and border color                                                         | string               | ''      |
| fontSize      | font size                                                                                                    | `number | string`    | 20      |
| values        | Option array, the value is a string, eg: ['tab page 1','tab page 2']                                         | []                   | -       |
| onClick       | Required. Click to trigger the event, you needs to update the current value change through the onClick event | (index, event)=>void | -       |