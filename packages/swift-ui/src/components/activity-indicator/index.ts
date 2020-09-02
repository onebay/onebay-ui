import { defineComponent, computed } from 'vue'
import classNames from 'classnames'
import Loading from '../loading/index.vue'
export default defineComponent({
  components: {
    Loading
  },
  props: {
    size: {
      type: Number,
      default: 0,
    },
    mode: {
      type: String,
      default: 'normal',
    },
    color: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    className: {
      type: [Array, String],
      default: () => '',
    },
    isOpened: {
      type: Boolean,
      default: true,
    },
  },
  setup (props) {
    const rootClass = computed(() => {
      const { mode, isOpened, className } = props
      return classNames(
        'at-activity-indicator',
        {
          'at-activity-indicator--center': mode === 'center',
          'at-activity-indicator--isopened': isOpened,
        },
        className
      )
    })
    return {
      rootClass
    }
  },
})
