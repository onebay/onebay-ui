import { defineComponent, computed } from 'vue'
import classNames from 'classnames'
import Loading from '../loading/index'
export default defineComponent({
  components: {
    Loading
  },
  props: {
    size: {
      type: Number,
      default: 0
    },
    mode: {
      type: String,
      default: 'normal'
    },
    color: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    className: {
      type: [Array, String],
      default: () => ''
    },
    isOpened: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const rootClass = computed(() => {
      const { mode, isOpened, className } = props
      return classNames(
        'at-activity-indicator',
        {
          'at-activity-indicator--center': mode === 'center',
          'at-activity-indicator--isopened': isOpened
        },
        className
      )
    })
    return {
      rootClass
    }
  },
  render() {
    const { rootClass, size, color } = this.$props
    const { $slots } = this
    return (
      <div class={rootClass}>
        <div class="at-activity-indicator__body">
          <Loading size={size} color={color} />
        </div>
        <div class="at-activity-indicator__content">{$slots.default && $slots.default()}</div>
      </div>
    )
  }
})
