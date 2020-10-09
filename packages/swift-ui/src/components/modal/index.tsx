import { defineComponent, computed, ref } from 'vue'
import classNames from 'classnames'
import ModalAction from './action/index'
import ModalContent from './content/index'
import ModalHeader from './header/index'

interface ModalProps {
  isOpened?: boolean
  /* eslint-disable */
  className?: any
  /* eslint-disable */
}

export default defineComponent({
  name: 'Modal',
  components: {
    ModalAction,
    ModalContent,
    ModalHeader
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    isOpened: {
      type: Boolean,
      default: false
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: ''
    },
    confirmText: {
      type: String,
      default: ''
    },
    className: {
      type: [String, Array],
      default: ''
    }
  },
  emits: ['close', 'cancel', 'confirm'],
  setup(props: ModalProps) {
    const visible = ref(props.isOpened)
    const rootClass = computed(() => {
      return classNames(
        'at-modal',
        {
          'at-modal--active': props.isOpened
        },
        props.className
      )
    })
    return {
      rootClass,
      visible
    }
  },
  watch: {
    isOpened(val) {
      if (val !== this.visible) {
        this.visible = val
      }
    }
  },
  methods: {
    handleClickOverlay() {
      if (this.closeOnClickOverlay) {
        this.visible = false
        this.handleClose()
      }
    },

    handleClose() {
      this.$emit('close')
    },

    handleCancel() {
      this.$emit('cancel')
    },

    handleConfirm() {
      this.$emit('confirm')
    },

    handleTouchMove(e: TouchEvent) {
      e.stopPropagation()
    }
  },
  render(): JSX.Element {
    const { title, content, cancelText, confirmText } = this.$props
    const {
      handleClickOverlay,
      rootClass,
      handleConfirm,
      handleCancel,
      handleTouchMove,
      $slots
    } = this
    return (
      <div>
        {title || content ? (
          <div class={rootClass}>
            <div class="at-modal__overlay" onClick={handleClickOverlay} />
            <div class="at-modal__container">
              {title && (
                <ModalHeader>
                  <div>{title}</div>
                </ModalHeader>
              )}
              {content && (
                <ModalContent>
                  <div class="content-simple">
                    <div>{content}</div>
                  </div>
                </ModalContent>
              )}
              {(cancelText || confirmText) && (
                <ModalAction isSimple>
                  {cancelText && <button onClick={handleCancel}>{cancelText}</button>}
                  {confirmText && <button onClick={handleConfirm}>{confirmText}</button>}
                </ModalAction>
              )}
            </div>
          </div>
        ) : (
            <div class={rootClass} onTouchmove={handleTouchMove}>
              <div class="at-modal__overlay" onClick={handleClickOverlay} />
              <div class="at-modal__container">{$slots.default && $slots.default()}</div>
            </div>
          )}
      </div>
    )
  }
})
