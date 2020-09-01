import classNames from 'classnames'
import { defineComponent, ref, computed } from 'vue'
export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
    cancelText: {
      type: String,
      default: '',
    },
    isOpened: {
      type: Boolean,
      default: false,
    },
    className: {
      type: [Array, String],
      default: () => '',
    },
  },
  setup (props) {
    console.log('props.isOpened :>> ', props.isOpened);
    const { className, isOpened } = props
    const show = ref(isOpened)
    const rootClass = computed(() => {
      const res = classNames(
        'at-action-sheet',
        {
          'at-action-sheet--active': show,
        },
        className
      )
      return res
    })
    return {
      show,
      rootClass
    }
  },
  watch: {
    isOpened(val) {
      this.show = val
      !val && this.handleClose()
    },
  },
  methods: {
    handleClose() {
      this.$emit('close')
    },
    handleCancel() {
      this.$emit('cancel')
      this.close()
    },
    close() {
      this.show = false
      this.handleClose()
    },
    handleTouchMove(e) {
      e.stopPropagation()
      e.preventDefault()
    },
  },
})
