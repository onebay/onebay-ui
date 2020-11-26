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
import { ActionSheet, ActionSheetItem, Button } from '/@/onebay-ui/src/index.ts'
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