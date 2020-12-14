# flex 

<DemoView />
<BackTop />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```tsx
import { defineComponent } from 'vue'
import { Flex } from 'onebay-ui'
import DocsHeader from '../../../components/DocHeader/DocsHeader'
import './index.scss'

const FlexItem = Flex.Item

export default defineComponent({
  name: 'RowPage',
  setup() {
    return () => {
      return (
        <div class="page row-page">
          <DocsHeader title="Flex" />
          <div class="doc-body">
            <div class="panel">
              <div class="panel__title">Basic usage</div>
              <div class="panel__content no-padding">
                <Flex>
                  <FlexItem>Flex</FlexItem>
                  <FlexItem>Flex</FlexItem>
                </Flex>
                <Flex>
                  <FlexItem>Flex</FlexItem>
                  <FlexItem>Flex</FlexItem>
                  <FlexItem>Flex</FlexItem>
                </Flex>
                <Flex>
                  <FlexItem>Flex</FlexItem>
                  <FlexItem>Flex</FlexItem>
                  <FlexItem>Flex</FlexItem>
                  <FlexItem>Flex</FlexItem>
                </Flex>
                <Flex align="end">
                  <FlexItem>Flex</FlexItem>
                  <FlexItem>Flex</FlexItem>
                  <FlexItem>Flex</FlexItem>
                  <FlexItem>Flex</FlexItem>
                </Flex>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
})
```

```vue
<template>
  <div class="page row-page">
    <DocsHeader title="Row & Col" />
    <div class="doc-body">
      <div class="panel">
        <div class="panel__title">Basic usage</div>
        <div class="panel__content no-padding">
          <Flex>
            <FlexItem>Flex</FlexItem>
            <FlexItem>Flex</FlexItem>
          </Flex>
          <Flex>
            <FlexItem>Flex</FlexItem>
            <FlexItem>Flex</FlexItem>
            <FlexItem>Flex</FlexItem>
          </Flex>
          <Flex>
            <FlexItem>Flex</FlexItem>
            <FlexItem>Flex</FlexItem>
            <FlexItem>Flex</FlexItem>
            <FlexItem>Flex</FlexItem>
          </Flex>
          <Flex align="end">
            <FlexItem>Flex</FlexItem>
            <FlexItem>Flex</FlexItem>
            <FlexItem>Flex</FlexItem>
            <FlexItem>Flex</FlexItem>
          </Flex>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Flex } from 'onebay-ui'
import './index.scss'

export default defineComponent({
  name: 'RowPage',
  components: {
    Flex,
    FlexItem: Flex.Item
  }
})
</script>
```

</div> 