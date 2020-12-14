import { defineComponent, ref } from 'vue'
import { ActionSheet, Button, toast } from 'onebay-ui'
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
