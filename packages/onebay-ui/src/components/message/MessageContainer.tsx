import { defineComponent, ref } from 'vue'
import Message from './Message'

export default defineComponent({
  name: 'MessageContainer',
  components: {
    Message
  },
  props: {
    config: {
      type: Object,
      default: () => ({
        messasge: '',
        type: 'info',
        isOpened: true,
        duration: 3000
      })
    },
    close: {
      type: Function,
      default: () => {
        /* */
      }
    }
  },
  setup() {
    const showMessage = ref(true)
    return { showMessage }
  },
  methods: {
    handleClose() {
      this.showMessage = false
      this.$props.close()
    }
  },
  render(): JSX.Element {
    const { showMessage, handleClose } = this
    const { config } = this.$props
    return <Message isOpened={showMessage} onClose={handleClose} {...config} />
  }
})
