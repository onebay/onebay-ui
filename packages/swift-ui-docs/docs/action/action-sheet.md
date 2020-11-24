# action-sheet 

<DemoView />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```tsx
import { defineComponent, ref } from 'vue'
import { ActionSheet, ActionSheetItem, Button } from 'swift-ui/src/index'
import toast from 'swift-ui/src/plugins/toast'
import DocsHeader from '../../../components/DocHeader/DocsHeader'

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
      toast({
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
        cancelText="取消"
        :isOpened="isOpened"
        title="清除位置信息后， 别人将不能查看到你"
        @cancel="handleClose"
        @close="handleClose"
      >
        <ActionSheetItem @click="showToast('点击了按钮一')"> 按钮一 </ActionSheetItem>
        <ActionSheetItem @click="showToast('点击了按钮二')"> 按钮二 </ActionSheetItem>
      </ActionSheet>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ActionSheet, ActionSheetItem, Button } from '/@/swift-ui/src/index.ts'
export default defineComponent({
  name: 'ActionSheetPage',
  components: {
    ActionSheet,
    ActionSheetItem,
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
      this.$toast({
        text: name
      })
    }
  }
})
</script>
```

</div> 