import { defineComponent, ref } from 'vue'
import ImagePreview from './ImagePreview'

export default defineComponent({
  name: 'ModalContainer',
  components: {
    ImagePreview
  },
  props: {
    config: {
      type: Object,
      default: () => ({
        startPosition: 0,
        paginationVisible: true
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
    const visible = ref(true)
    return { visible }
  },
  methods: {
    handleClose() {
      this.visible = false
      this.$props.close()
    }
  },
  render(): JSX.Element {
    const { visible, handleClose } = this
    const { config } = this.$props
    return <ImagePreview show={visible} onClose={handleClose} {...config} />
  }
})
