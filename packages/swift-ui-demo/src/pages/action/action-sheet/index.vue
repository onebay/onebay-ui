<template>
  <div>
    <ActionSheet
      cancelText="取消"
      :isOpened="isOpened"
      title="清除位置信息后， 别人将不能查看到你"
      @cancel="handleClose"
    >
      <ActionSheetItem @click="showToast('点击了按钮一')">
        按钮一
      </ActionSheetItem>
      <ActionSheetItem @click="showToast('点击了按钮二')">
        按钮二
      </ActionSheetItem>
    </ActionSheet>
    <button @click="isOpened = !isOpened">toggle ActionSheet</button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { ActionSheet, ActionSheetItem } from '/@/swift-ui/src/index.ts'
export default defineComponent({
  name: 'ActionSheetPage',
  components: {
    ActionSheet, 
    ActionSheetItem,
  },
  setup (props) {
    const isOpened = ref(false)
    return {
      isOpened
    }
  },
  methods: {
    handleClose() {
      console.log('close :>> ');
    },
    showToast(name) {
      console.log(name)
    },
  },
})
</script>