import ActionSheetBody from './components/body'
import ActionSheetFooter from './components/footer'
import ActionSheetHeader from './components/header'
import ActionSheetItem from './components/item'
import classNames from 'classnames'
import { defineComponent, ref, computed } from 'vue'

const ActionSheet = defineComponent({
  name: 'ActionSheet',
  components: {
    ActionSheetBody,
    ActionSheetFooter,
    ActionSheetHeader
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: ''
    },
    isOpened: {
      type: Boolean,
      default: false
    },
    className: {
      type: [Array, String],
      default: () => ''
    },
    onClose: {
      type: Function,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      default: () => {}
    }
  },
  emits: ['close', 'cancel'],
  setup(props) {
    const show = ref(props.isOpened)
    const rootClass = computed(() => {
      const res = classNames(
        'ob-action-sheet',
        {
          'ob-action-sheet--active': show.value
        },
        props.className
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
    }
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
    handleTouchMove(e: Event) {
      e.stopPropagation()
      e.preventDefault()
    }
  },
  render(): JSX.Element {
    const { title, cancelText } = this.$props
    const { handleTouchMove, close, handleCancel, $slots, rootClass } = this
    return (
      <div class={rootClass} onTouchmove={handleTouchMove}>
        <div class="ob-action-sheet__overlay" onClick={close} />
        <div class="ob-action-sheet__container">
          {title && <ActionSheetHeader>{title}</ActionSheetHeader>}
          <ActionSheetBody>{$slots.default?.()}</ActionSheetBody>
          <ActionSheetFooter onClick={handleCancel}>{cancelText}</ActionSheetFooter>
        </div>
      </div>
    )
  }
})

ActionSheet.Item = ActionSheetItem

export default ActionSheet
