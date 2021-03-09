# modal 

<DemoView />
<BackToTop />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```tsx
import { defineComponent } from 'vue'
import { Button, Modal, Toast } from 'onebay-ui'
import DocsHeader from '../../../components/DocHeader/DocsHeader'

export default defineComponent({
  components: {
    Button,
  },
  name: 'ModalPage',
  setup() {
    const handleClickShow1 = () => {
      const myModal = Modal({
        title: 'Open Modal as Method',
        cancelText: 'Cancel',
        confirmText: 'Confirm',
        content: 'This is modal content This is modal content',
        onConfirm: () => {
          myModal && myModal.close()
          Toast({ text: 'click confirm' })
        },
        onCancel: () => {
          myModal && myModal.close()
          Toast({ text: 'click cancel' })
        }
      })
    }
    const handleClickShow2 = () => {
      const myModal = Modal({
        title: 'Open Modal as Method',
        confirmText: 'Confirm',
        content: 'This is modal content This is modal content',
        onConfirm: () => {
          myModal && myModal.close()
          Toast({ text: 'click confirm' })
        }
      })
    }
    const handleClickShow3 = () => {
      const myModal = Modal({
        cancelText: 'Cancel',
        confirmText: 'Confirm',
        content: 'This is modal content This is modal content',
        onConfirm: () => {
          myModal && myModal.close()
          Toast({ text: 'click confirm' })
        },
        onCancel: () => {
          myModal && myModal.close()
          Toast({ text: 'click cancel' })
        }
      })
    }

    const openModal = () => {
      const myModal = Modal({
        title: 'Open Modal as Method',
        cancelText: 'Cancel',
        confirmText: 'Confirm',
        content: 'This is modal content This is modal content',
        onConfirm: () => {
          myModal && myModal.close()
          Toast({ text: 'click confirm' })
        },
        onCancel: () => myModal && myModal.close()
      })
    }

    return () => {
      return (
        <div class="page">
          <DocsHeader title="Modal" />
          <div class="doc-body">
            <div class="panel">
              <div class="panel__title">Basic Modal</div>
              <div class="panel__content">
                <div class="example-item">
                  <Button onClick={handleClickShow1}> Open Basic Modal </Button>
                </div>
              </div>
            </div>

            <div class="panel">
              <div class="panel__title">Single Button</div>
              <div class="panel__content">
                <div class="example-item">
                  <Button onClick={handleClickShow2}>Open Single Button Modal</Button>
                </div>
              </div>
            </div>

            <div class="panel">
              <div class="panel__title">No Title</div>
              <div class="panel__content">
                <div class="example-item">
                  <Button onClick={handleClickShow3}> Open No Title Modal </Button>
                </div>
              </div>
            </div>

            <div class="panel">
              <div class="panel__title">use Modal as a Method</div>
              <div class="panel__content">
                <div class="example-item">
                  <Button onClick={openModal}> Open Modal </Button>
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

```

</div> 

## API 

| Properties          | Descrition                                              | Type       | Default |
| ------------------- | ------------------------------------------------------- | ---------- | ------- |
| title               | the modal title                                         | string     | -       |
| content             | the modal content                                       | string     | -       |
| cancelText          | cancel button text                                      | string     | -       |
| closeOnClickOverlay | Automatically close when clicking on the floating layer | boolean    | `true`  |
| confirmText         | Confirm button text                                     | string     | -       |
| isOpened            | Whether to display the modal box                        | boolean    | -       |
| onClose             | set the handler to handle close event                   | () => void | -       |
| onCancel            | set the handler to handle cancel event                  | () => void | -       |
| onConfirm           | set the handler to handle comfirm event                 | () => void | -       |
| className           | class name                                              | string     | -       |