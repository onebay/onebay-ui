import { defineComponent, ref, computed } from 'vue'
import classNames from 'classnames'
import statusImg from './img.json'

export interface ToastProps {
  text?: string
  icon?: string
  hasMask?: boolean
  image?: string
  isOpened?: boolean
  duration?: number
  status?: string
  className: any
  customStyle: any
}

export enum ToastStatus {
  default = '',
  error = 'error',
  loading = 'loading',
  success = 'success'
}

export default defineComponent({
  name: 'Toast',
  props: {
    text: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    hasMask: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      default: '',
    },
    isOpened: {
      type: Boolean,
      default: false,
    },
    duration: {
      type: Number,
      default: 3000,
    },
    status: {
      type: String,
      default: ToastStatus.default,
      validator: (val: string) => ['', 'error', 'loading', 'success'].includes(val),
    },
    onClick: {
      type: Function,
      default: null,
    },
    onClose: {
      type: Function,
      default: () => () => { },
    },
    className: {
      type: [Object, String],
      default: () => '',
    },
    customStyle: {
      type: [Object, String],
      default: '',
    },
  },
  setup(props: ToastProps) {
    const timer = ref(null)
    const visible = ref(props.isOpened)

    const rootCls = computed(() => {
      return classNames('at-toast', props.className)
    })

    const realImg = computed(() => {
      const { status, image } = props
      return image || statusImg[status] || null
    })

    const bodyClass = computed(() => {
      const { icon, status, image } = props
      return classNames('toast-body', {
        'at-toast__body--custom-image': image,
        'toast-body--text': !realImg && !icon,
        [`at-toast__body--${status}`]: !!status,
      })
    })

    const iconClass = computed(() => {
      const { icon } = props
      return classNames('at-icon', {
        [`at-icon-${icon}`]: icon,
      })
    })

    const isRenderIcon = computed(() => {
      const { icon, status, image } = props
      return !!(icon && !(image || statusImg[status]))
    })

    return {
      timer,
      visible,
      rootCls,
      bodyClass,
      realImg,
      iconClass,
      isRenderIcon
    }
  },
  watch: {
    isOpened: {
      immediate: true,
      handler() {
        this.handleChange()
      },
    },
    duration() {
      this.handleChange()
    },
  },
  methods: {
    clearTimmer() {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }
    },

    makeTimer(duration) {
      if (duration === 0) {
        return
      }
      this.timer = setTimeout(() => {
        this.close()
      }, +duration)
    },

    close() {
      const { visible } = this
      if (visible) {
        this.visible = false
        this.handleClose()
        this.clearTimmer()
      }
    },

    handleClose(event) {
      if (typeof this.onClose === 'function') {
        this.onClose(event)
      }
    },

    handleClick(event) {
      const { onClick, status } = this
      if (status === 'loading') {
        return
      }
      if (typeof onClick == 'function') {
        return onClick(event)
      }
      this.close()
    },

    handleChange() {
      const { isOpened, duration } = this.$props
      if (!isOpened) {
        this.close()
        return
      }

      if (!this.visible) {
        this.visible = true
      } else {
        this.clearTimmer()
      }
      this.makeTimer(duration || 0)
    },
  },
  render(): JSX.Element | null {
    const { handleClick, visible, rootCls, bodyClass, realImg, isRenderIcon, iconClass } = this
    const { text, customStyle, hasMask } = this.$props
    if (visible)
      return (
        <div class={rootCls}>
          {hasMask && <div class="at-toast__overlay"></div>}
          <div class={bodyClass} style={customStyle} onClick={handleClick}>
            <div class="toast-body-content">
              {
                realImg &&
                <div class="toast-body-content__img">
                  <img
                    class="toast-body-content__img-item"
                    src={realImg}
                  />
                </div>
              }
              {
                isRenderIcon &&
                <div class="toast-body-content__icon">
                  <div class={iconClass}></div>
                </div>
              }
              {
                text &&
                <div class="toast-body-content__info">
                  <div>{text}</div>
                </div>
              }
            </div>
          </div>
        </div>
      )
    return null
  }
})
