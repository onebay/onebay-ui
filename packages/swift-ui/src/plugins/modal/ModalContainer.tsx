import { defineComponent, ref } from 'vue'
import Modal from '../../components/modal'

export default defineComponent({
  name: 'ModalContainer',
  components: {
    Modal
  },
  props: {
    config: {
      type: Object,
      default: () => ({
        content: '',
        title: ''
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
  render(): JSX.Element {
    const { showToast, handleClose } = this
    const { config } = this.$props
    return <Modal isOpened={showToast} onClose={handleClose} {...config} />
  }
})
