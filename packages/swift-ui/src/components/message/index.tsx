import { defineComponent, ref } from 'vue'
import classNames from 'classnames'

export default defineComponent({
  name: 'Message',
  props: {
    customStyle: {
      type: [Object, String],
      default: ''
    },
    className: {
      type: [Array, String],
      default: ''
    },
    isOpened: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info'
    },
    duration: {
      type: Number,
      default: 3000
    },
    onClose: {
      type: Function,
      default: () => {
        /* */
      }
    },
    onClick: {
      type: Function,
      default: () => {
        /* */
      }
    }
  },
  emits: ['close', 'click'],
  setup(props) {
    const timer = ref(0)
    const visible = ref(props.isOpened)
    return {
      timer,
      visible
    }
  },
  watch: {
    isOpened: {
      immediate: true,
      handler() {
        this.handleChange()
      }
    },
    duration() {
      this.handleChange()
    }
  },
  methods: {
    clearTimmer() {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = 0
      }
    },

    makeTimer(duration: number) {
      if (duration === 0) {
        return
      }
      this.timer = window.setTimeout(() => {
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

    handleClose() {
      this.$emit('close')
    },

    handleClick(event: MouseEvent) {
      this.$emit('click', event)
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
    }
  },
  render(): JSX.Element {
    const { className, customStyle, isOpened, message, type } = this.$props
    const { handleClick } = this
    return (
      <div
        class={classNames(
          {
            'at-message': true,
            'at-message--show': isOpened,
            'at-message--hidden': !isOpened
          },
          `at-message--${type}`,
          className
        )}
        style={customStyle}
        onClick={handleClick}>
        {message}
      </div>
    )
  }
})
