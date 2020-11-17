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
  setup(props, { slots }) {
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
    return () => {
      const { size, color, content } = props
      return (
        <div class={rootClass.value}>
          <div class="at-activity-indicator__body">
            <Loading size={size} color={color} />
          </div>
          <div class="at-activity-indicator__content">{slots.default?.() || content}</div>
        </div>
      )
    }
  }
})
