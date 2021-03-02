import { defineComponent, ref } from 'vue'
import Toast from './Toast'

export default defineComponent({
  name: 'ToastContainer',
  components: {
    Toast
  },
  props: {
    config: {
      type: Object,
      default: () => ({
        text: '',
        status: '',
        hasMask: true,
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
    const showToast = ref(true)
    return { showToast }
  },
  methods: {
    handleClose() {
      this.showToast = false
      this.$props.close()
    }
  },
  render() {
    const { showToast, handleClose } = this
    const { config } = this.$props
    return <Toast isOpened={showToast} onClose={handleClose} {...config} />
  }
})
