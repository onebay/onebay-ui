# action-sheet 

<DemoView />
<BackToTop />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```tsx
import { defineComponent, ref } from 'vue'
import { ActionSheet, Button, Toast } from 'onebay-ui'
import DocsHeader from '../../../components/DocHeader/DocsHeader'

const ActionSheetItem = ActionSheet.item
export default defineComponent({
  name: 'ActionSheetPage',
  components: {
    ActionSheet,
    ActionSheetItem,
    Button
  },
  setup() {
    const isOpened = ref(false)
    const handleClose = () => {
      isOpened.value = !isOpened.value
    }
    const showToast = (name: string) => {
      Toast({
        text: name
      })
    }
    return () => {
      return (
        <div class="page">
          <DocsHeader title="ActionSheet" />
          <div class="doc-body">
            <div class="panel">
              <div class="panel__title">Basic Modal</div>
              <div class="panel__content">
                <div class="example-item">
                  <Button onClick={handleClose}>toggle ActionSheet</Button>
                </div>
              </div>
            </div>
            <ActionSheet
              onClose={handleClose}
              cancelText="cancel"
              isOpened={isOpened.value}
              title="After clearing the location information, others will not be able to see you"
            >
              <ActionSheetItem onClick={() => showToast('click button 1')}> button 1 </ActionSheetItem>
              <ActionSheetItem onClick={() => showToast('click button 2')}> button 2 </ActionSheetItem>
            </ActionSheet>
          </div>
        </div>
      )
    }
  }
})

```

```vue
<template>
  <div class="page">
    <DocsHeader title="ActionSheet" />
    <div class="doc-body">
      <!-- Basic Modal -->
      <div class="panel">
        <div class="panel__title">Basic Modal</div>
        <div class="panel__content">
          <div class="example-item">
            <Button @click="isOpened = !isOpened">toggle ActionSheet</Button>
          </div>
        </div>
      </div>
      <ActionSheet
        cancelText="Cancel"
        :isOpened="isOpened"
        title="After clearing the location information, others will not be able to see you"
        @cancel="handleClose"
        @close="handleClose"
      >
        <ActionSheetItem @click="showToast('Click Button 1')"> Button 1 </ActionSheetItem>
        <ActionSheetItem @click="showToast('Click Button 2')"> Button 2 </ActionSheetItem>
      </ActionSheet>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ActionSheet, Button, Toast } from 'onebay-ui'
export default defineComponent({
  name: 'ActionSheetPage',
  components: {
    ActionSheet,
    ActionSheetItem: ActionSheet.Item,
    Button
  },
  setup(props) {
    const isOpened = ref(false)
    return {
      isOpened
    }
  },
  methods: {
    handleClose() {
      this.isOpened = !this.isOpened
    },
    showToast(name) {
      Toast({
        text: name
      })
    }
  }
})
</script>
```

</div> 

## ActionSheet API

| Properties | Descrition                             | Type       | Default |
| ---------- | -------------------------------------- | ---------- | ------- |
| title      | title                                  | string     | -       |
| isOpened   | whether is show                        | boolean    | `false`   |
| cancelText | cancel button text                     | string     | -       |
| onClose    | set the handler to handle close event  | () => void | -       |
| onCancel   | set the handler to handle cancel event | () => void | -       |
| className  | class name                             | string     | -       |


## ActionSheetItem API

| Properties | Descrition                            | Type       | Default |
| ---------- | ------------------------------------- | ---------- | ------- |
| onClick    | set the handler to handle click event | () => void | -       |
| className  | class name                            | string     | -       |
