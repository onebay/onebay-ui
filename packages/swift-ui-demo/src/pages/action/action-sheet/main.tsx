import { defineComponent, ref } from 'vue'
// @ts-ignore
import { ActionSheet, ActionSheetItem, Button } from '/@/swift-ui/src/index'
// @ts-ignore
import toast from '/@/swift-ui/src/plugins/toast'
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
              cancelText="取消"
              isOpened={isOpened.value}
              title="清除位置信息后， 别人将不能查看到你"
            >
              <ActionSheetItem onClick={() => showToast('点击了按钮一')}> 按钮一 </ActionSheetItem>
              <ActionSheetItem onClick={() => showToast('点击了按钮二')}> 按钮二 </ActionSheetItem>
            </ActionSheet>
          </div>
        </div>
      )
    }
  }
})
