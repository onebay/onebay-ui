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
        <ActionSheetItem @click="showToast('click button 1')"> Button 1 </ActionSheetItem>
        <ActionSheetItem @click="showToast('click button 2')"> Button 2 </ActionSheetItem>
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