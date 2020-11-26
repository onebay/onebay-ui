# modal 

<DemoView />
<BackTop />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```tsx
import { defineComponent, reactive } from 'vue'
import { Button, Modal, ModalAction, ModalHeader, ModalContent } from 'onebay-ui/src/index'
import toast from 'onebay-ui/src/plugins/toast'
import modal from 'onebay-ui/src/plugins/modal'
import DocsHeader from '../../../components/DocHeader/DocsHeader'

export default defineComponent({
  components: {
    Button,
    Modal,
    ModalAction,
    ModalHeader,
    ModalContent
  },
  name: 'ModalPage',
  setup() {
    const state = reactive({
      isOpened1: false,
      isOpened2: false,
      isOpened3: false,
      isOpened4: false
    })
    const handleClickShow = (type) => {
      state[`isOpened${type}`] = true
      console.log(type)
    }
    const closeModal = (type, msg) => {
      state[`isOpened${type}`] = false
      toast({
        text: msg
      })
    }

    const closeModalConfirm = (type, msg) => {
      console.log(type, msg)
      state[`isOpened${type}`] = false
      console.log(`isOpened${type}`, state[`isOpened${type}`])
      toast({
        text: msg
      })
    }

    const openModal = () => {
      const myModal = modal({
        title: 'Open Modal as Method',
        'cancel-text': 'Cancel',
        'confirm-text': 'Confirm',
        content: 'This is modal content This is modal content',
        onCancel: () => myModal && myModal.close()
      })
    }
    return () => {
      console.log(state.isOpened1)
      return (
        <div class="page">
          <DocsHeader title="Modal" />
          <div class="doc-body">
            <div class="panel">
              <div class="panel__title">Basic Modal</div>
              <div class="panel__content">
                <div class="example-item">
                  <Button onClick={() => handleClickShow(1)}> Open Basic Modal </Button>
                </div>
              </div>
            </div>

            <div class="panel">
              <div class="panel__title">Single Button</div>
              <div class="panel__content">
                <div class="example-item">
                  <Button onClick={() => handleClickShow(2)}>Open Single Button Modal</Button>
                </div>
              </div>
            </div>

            <div class="panel">
              <div class="panel__title">No Title</div>
              <div class="panel__content">
                <div class="example-item">
                  <Button onClick={() => handleClickShow(3)}> Open No Title Modal </Button>
                </div>
              </div>
            </div>

            <div class="panel">
              <div class="panel__title">Simplified use</div>
              <div class="panel__content">
                <div class="example-item">
                  <Button onClick={() => handleClickShow(4)}> Open Simplified use Modal </Button>
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

            <Modal
              isOpened={state.isOpened1}
              onClose={() => closeModal(1, 'Modal had been closed')}
            >
              <ModalHeader>This is Title</ModalHeader>
              <ModalContent>
                <div class="modal-content">
                  This is modal content, This is modal content, This is modal content
                </div>
              </ModalContent>
              <ModalAction>
                <button onClick={() => closeModal(1, 'click cancel')}>Cancel</button>
                <button onClick={() => closeModal(1, 'click confirm')}>Confirm</button>
              </ModalAction>
            </Modal>

            <Modal
              isOpened={state.isOpened2}
              onClose={() => closeModal(2, 'Modal had been closed')}
            >
              <ModalHeader>This is Title</ModalHeader>
              <ModalContent>
                <div class="modal-content">
                  This is modal content, This is modal content, This is modal content
                </div>
              </ModalContent>
              <ModalAction>
                <button onClick={() => closeModal(2, 'click confirm')}>Confirm</button>
              </ModalAction>
            </Modal>

            <Modal
              isOpened={state.isOpened3}
              content="This is modal content, This is modal content, This is modal content"
              onClose={() => closeModal(3, 'Modal had been closed')}
              onCancel={() => closeModal(3, 'click cancel')}
              onConfirm={() => closeModalConfirm(3, 'click confirm')}
              cancelText="Cancel"
              confirmText="Confirm"
            />
            <Modal
              isOpened={state.isOpened4}
              title="Simplified use"
              cancelText="Cancel"
              confirmText="Confirm"
              content="This is modal content This is modal content"
              onClose={() => closeModal(4, 'Modal had been closed')}
              onCancel={() => closeModal(4, 'click cancel')}
              onConfirm={() => closeModalConfirm(4, 'click confirm')}
            />
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

      <!-- No Title -->
      <div class="panel">
        <div class="panel__title">No Title</div>
        <div class="panel__content">
          <div class="example-item">
            <Button @click="handleClickShow(3)"> Open No Title Modal </Button>
          </div>
        </div>
      </div>

      <!-- Simplified use -->
      <div class="panel">
        <div class="panel__title">Simplified use</div>
        <div class="panel__content">
          <div class="example-item">
            <Button @click="handleClickShow(4)"> Open Simplified use Modal </Button>
          </div>
        </div>
      </div>

      <!-- use Modal as a Method -->
      <div class="panel">
        <div class="panel__title">use Modal as a Method</div>
        <div class="panel__content">
          <div class="example-item">
            <Button @click="openModal"> Open Modal </Button>
          </div>
        </div>
      </div>

      <!-- Basic Modal -->
      <Modal
        :is-opened="state.isOpened1"
        :on-close="closeModal.bind(null, 1, 'Modal had been closed')"
      >
        <ModalHeader>This is Title</ModalHeader>
        <ModalContent>
          <div class="modal-content">
            This is modal content, This is modal content, This is modal content
          </div>
        </ModalContent>
        <ModalAction>
          <button @click="closeModal(1, 'click cancel')">Cancel</button>
          <button @click="closeModal(1, 'click confirm')">Confirm</button>
        </ModalAction>
      </Modal>

      <!-- Single Button -->
      <Modal
        :is-opened="state.isOpened2"
        :on-close="closeModal.bind(this, 2, 'Modal had been closed')"
      >
        <ModalHeader>This is Title</ModalHeader>
        <ModalContent>
          <div class="modal-content">
            This is modal content, This is modal content, This is modal content
          </div>
        </ModalContent>
        <ModalAction>
          <button @click="closeModal(2, 'click confirm')">Confirm</button>
        </ModalAction>
      </Modal>

      <!-- No Title -->
      <Modal
        :is-opened="state.isOpened3"
        content="This is modal content, This is modal content, This is modal content"
        :on-close="closeModal.bind(this, 3, 'Modal had been closed')"
        :on-cancel="closeModal.bind(this, 3, 'click cancel')"
        :on-confirm="closeModalConfirm.bind(this, 3, 'click confirm')"
        cancel-text="Cancel"
        confirm-text="Confirm"
      />

      <!-- Simplified use -->
      <Modal
        :is-opened="state.isOpened4"
        title="Simplified use"
        cancel-text="Cancel"
        confirm-text="Confirm"
        content="This is modal content This is modal content"
        :on-close="closeModal.bind(this, 4, 'Modal had been closed')"
        :on-cancel="closeModal.bind(this, 4, 'click cancel')"
        :on-confirm="closeModalConfirm.bind(this, 4, 'click confirm')"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Button, Modal, ModalAction, ModalHeader, ModalContent } from '/@/onebay-ui/src/index.ts'
export default defineComponent({
  components: {
    Button,
    Modal,
    ModalAction,
    ModalHeader,
    ModalContent
  },
  name: 'ModalPage',
  data() {
    return {
      state: {
        isOpened1: false,
        isOpened2: false,
        isOpened3: false,
        isOpened4: false
      }
    }
  },
  methods: {
    handleClickShow(type) {
      this.state[`isOpened${type}`] = true
      console.log(type)
    },
    closeModal(type, msg) {
      this.state[`isOpened${type}`] = false
      console.log(`isOpened${type}`, this.state[`isOpened${type}`])
      this.$toast({
        text: msg
      })
    },

    closeModalConfirm(type, msg) {
      console.log(type, msg)
      this.state[`isOpened${type}`] = false
      console.log(`isOpened${type}`, this.state[`isOpened${type}`])
      this.$toast({
        text: msg
      })
    },
    openModal() {
      const myModal = this.$modal({
        title: 'Open Modal as Method',
        'cancel-text': 'Cancel',
        'confirm-text': 'Confirm',
        content: 'This is modal content This is modal content'
      })
    }
  }
})
</script>

```

</div> 