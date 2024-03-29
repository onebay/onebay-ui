# message 

<DemoView />
<BackToTop />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```tsx
import { defineComponent } from 'vue'
import { Button, Message } from 'onebay-ui'
import DocsHeader from '../../../components/DocHeader/DocsHeader'
import './index.scss'
import { MessageType } from 'onebay-ui/types/components/message'

export default defineComponent({
  name: 'MessagePage',
  components: {
    Button
  },
  setup() {
    const handleClick = (type: string) => {
      Message({
        message: 'new message',
        type: type as MessageType
      })
    }
    return () => {
      return (
        <div class="page toast-page">
          <DocsHeader title="Message" />

          <div class="doc-body">
            <div class="panel">
              <div class="panel__title">Basic usage</div>
              <div class="panel__content">
                <div class="example-item">
                  <Button onClick={() => handleClick('')}> normal message </Button>
                </div>
                <div class="example-item">
                  <Button onClick={() => handleClick('success')}> success message </Button>
                </div>
                <div class="example-item">
                  <Button onClick={() => handleClick('error')}> error message </Button>
                </div>
                <div class="example-item">
                  <Button onClick={() => handleClick('warning')}> warning message </Button>
                </div>
                <div class="example-item">
                  <Button onClick={() => handleClick('info')}> prompt message </Button>
                </div>
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
  <div class="page toast-page">
    <!-- S Header -->
    <DocsHeader title="Message" />
    <!-- E Header -->

    <!-- S Body -->
    <div class="doc-body">
      <div class="panel">
        <div class="panel__title">Basic usage</div>
        <div class="panel__content">
          <div class="example-item">
            <Button @click="handleClick('')"> normal message </Button>
          </div>
          <div class="example-item">
            <Button @click="handleClick('success')"> success message </Button>
          </div>
          <div class="example-item">
            <Button @click="handleClick('error')"> error message </Button>
          </div>
          <div class="example-item">
            <Button @click="handleClick('warning')"> warning message </Button>
          </div>
          <div class="example-item">
            <Button @click="handleClick('info')"> prompt message </Button>
          </div>
        </div>
      </div>
    </div>
    <!-- E Body -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button, Message } from 'onebay-ui'
export default defineComponent({
  name: 'MessagePage',
  components: {
    Button
  },
  methods: {
    handleClick(type) {
      Message({
        message: 'notification',
        type
      })
    }
  }
})
</script>
<style lang="scss">
@import './index.scss';
</style>

```

</div> 

## API

| Properties | Descrition                            | Type                          | Default |
| ---------- | ------------------------------------- | ----------------------------- | ------- |
| message    | message content                       | string                        | -       |
| type       | message type                          | info，success，error，warning | `info`  |
| duration   | message duration (ms)                 | bumber                        | 3000    |
| onClose    | set the handler to handle close event | () => void                    | -       |
| onClick    | set the handler to handle click event | () => void                    | -       |
| className  | class name                            | string                        | -       |