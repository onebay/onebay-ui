# divider 

<DemoView />
<BackToTop />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```tsx
import { defineComponent } from 'vue'
import { Divider } from 'onebay-ui'
import DocsHeader from '../../../components/DocHeader/DocsHeader'
import './index.scss'

export default defineComponent({
  name: 'DividerPage',
  setup() {
    return () => {
      return (
        <div class="page">
          {/* <!-- S Header --> */}
          <DocsHeader title="Divider"></DocsHeader>
          {/* <!-- E Header --> */}

          {/* <!-- S Body --> */}
          <div class="doc-body">
            {/* <!-- 文字 --> */}
            <div class="panel">
              <div class="panel__title">General usage</div>
              <div class="panel__content no-padding">
                <Divider content="Divider" />
              </div>
            </div>

            {/* <!-- Custom color --> */}
            <div class="panel">
              <div class="panel__title">Custom color</div>
              <div class="panel__content no-padding">
                <Divider content="No more" fontColor="#ed3f14" lineColor="#ed3f14" />
                <Divider content="No more" fontColor="#ff9900" lineColor="#ff9900" />
                <Divider content="No more" fontColor="#2d8cf0" lineColor="#2d8cf0" />
              </div>
            </div>

            {/* <!-- Custom content --> */}
            <div class="panel">
              <div class="panel__title">Custom content</div>
              <div class="panel__content no-padding">
                <Divider>Custom content</Divider>
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
    <DocsHeader title="Divider"></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <div class="doc-body">
      <!-- 文字 -->
      <div class="panel">
        <div class="panel__title">General usage</div>
        <div class="panel__content no-padding">
          <Divider content="Divider" />
        </div>
      </div>

      <!-- Custom color -->
      <div class="panel">
        <div class="panel__title">Custom color</div>
        <div class="panel__content no-padding">
          <Divider content="No more" fontColor="#ed3f14" lineColor="#ed3f14" />
          <Divider content="No more" fontColor="#ff9900" lineColor="#ff9900" />
          <Divider content="No more" fontColor="#2d8cf0" lineColor="#2d8cf0" />
        </div>
      </div>

      <!-- Custom content -->
      <div class="panel">
        <div class="panel__title">Custom content</div>
        <div class="panel__content no-padding">
          <Divider>Custom content</Divider>
        </div>
      </div>
    </div>
    <!-- E Body -->
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { Divider } from 'onebay-ui'
import './index.scss'
export default defineComponent({
  name: 'DividerPage',
  components: {
    Divider
  }
})
</script>

```

</div> 

## API
| Properties | Descrition   | Type              | Default |
| ---------- | ------------ | ----------------- | ------- |
| className  | class name   | string            | -       |
| style      | custom style | CSSProperties     | -       |
| content    | Divider text | string            | ''      |
| fontColor  | font color   | string            | ''      |
| fontSize   | font size    | `string | number` | 16      |
| height     | Divider text | `string | number` | 64      |
| lineColor  | line color   | string            | ''      |