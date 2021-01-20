<template>
  <div class="page">
    <DocsHeader title="Modal" />
    <div class="doc-body">
      <!-- Basic Modal -->
      <div class="panel">
        <div class="panel__title">Basic Modal</div>
        <div class="panel__content">
          <div class="example-item">
            <Button @click="handleClickShow(1)"> Open Basic Modal </Button>
          </div>
        </div>
      </div>

      <!-- Single Button -->
      <div class="panel">
        <div class="panel__title">Single Button</div>
        <div class="panel__content">
          <div class="example-item">
            <Button @click="handleClickShow(2)">Open Single Button Modal</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Button, Modal, Toast } from 'onebay-ui'

export default defineComponent({
  components: {
    Button
  },
  name: 'ModalPage',
  data() {
    return {
      state: {}
    }
  },
  methods: {
    handleClickShow(type) {
      const modal = Modal({
        title: 'This is Title',
        content: '"This is modal content, This is modal content, This is modal content',
        cancelText: type === 1 ? 'Cancel' : '',
        confirmText: 'Confirm',
        onCancel() {
          Toast({
            text: 'click Cancel'
          })
          modal.close()
        },
        onConfirm() {
          Toast({
            text: 'click Confirm'
          })
          modal.close()
        }
      })
    }
  }
})
</script>
