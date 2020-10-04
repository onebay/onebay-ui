import { defineComponent, ref } from 'vue';
// import { SButton } from './components'
import { Button } from '/@/swift-ui/src/index.ts'
import '/@/swift-ui/src/style/components/loading.scss'
import '/@/swift-ui/src/style/components/accordion.scss'
import '/@/swift-ui/src/style/components/icon.scss'
import '/@/swift-ui/src/style/index.scss'
import Index from './index.vue'
export default defineComponent({
  name: 'App',
  setup() {
    const value1 = ref(false)
    return {
      value1
    };
  },
  methods: {
    openModal() {
      this.$modal({
        title: 'Open Modal as Method',
        'cancel-text': 'Cancel',
        'confirm-text': 'Confirm',
        content: <p>This is modal content This is modal content</p>
      })
    }
  },
  render() {
    const { openModal } = this
    return (
      <div id="nav">
        <Button onClick={openModal}>open Modal</Button>
        <Index />
      </div>
    )
  }
});