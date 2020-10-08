import classNames from 'classnames'
import { defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'Progress',
  props: {
    color: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      default: '',
      validator: (val: string) => ['progress', 'error', 'success', ''].includes(val)
    },
    percent: {
      type: Number,
      default: 0
    },
    strokeWidth: {
      type: Number,
      default: 10
    },
    isHidePercent: {
      type: Boolean,
      default: false
    },
    className: {
      type: [Array, String],
      default: () => ''
    }
  },
  setup(props) {
    const progressStyle = computed(() => {
      return {
        width: props.percent ? `${+props.percent}%` : '0%',
        height: props.strokeWidth && `${+props.strokeWidth}px`,
        backgroundColor: props.color
      }
    })
    const rootClass = computed(() => {
      const { status, className } = props
      return classNames(
        'at-progress',
        {
          [`at-progress--${status}`]: !!status
        },
        className
      )
    })
    const iconClass = computed(() => {
      const { status } = props
      return classNames('at-icon', {
        'at-icon-close-circle': status === 'error',
        'at-icon-check-circle': status === 'success'
      })
    })
    return {
      progressStyle,
      rootClass,
      iconClass
    }
  },
  render(): JSX.Element {
    const { progressStyle, rootClass, iconClass } = this
    const { percent, isHidePercent, status } = this.$props
    return (
      <div class={rootClass}>
        <div class="at-progress__outer">
          <div class="at-progress__outer-inner">
            <div class="at-progress__outer-inner-background" style={progressStyle} />
          </div>
        </div>
        {isHidePercent && (
          <div class="at-progress__content">
            {!status || status === 'progress' ? (
              <div>{`${percent}%`}</div>
            ) : (
              <div>
                <div class={iconClass} />
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
})
