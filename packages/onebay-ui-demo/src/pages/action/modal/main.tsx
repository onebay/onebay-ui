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