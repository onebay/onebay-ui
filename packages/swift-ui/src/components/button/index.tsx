import { defineComponent, computed } from 'vue'
import classNames from 'classnames'
import Loading from '../loading/index'
const SIZE_CLASS = {
  normal: 'normal',
  small: 'small'
}

const TYPE_CLASS = {
  primary: 'primary',
  secondary: 'secondary'
}

export default defineComponent({
  components: {
    Loading
  },
  props: {
    size: {
      type: String,
      default: 'normal'
    },
    type: {
      type: String,
      default: undefined
    },
    circle: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    customStyle: {
      type: [Object, String],
      default: ''
    },
    className: {
      type: [Object, String],
      default: ''
    }
  },
  emits: ['click'],
  setup(props) {
    const loadingColor = computed(() => {
      return props.type === 'primary' ? '#fff' : ''
    })
    const loadingSize = computed(() => {
      return props.size === 'small' ? '15' : 0
    })
    const rootClassName = computed(() => {
      const rootClass = ['at-button']
      if (props.loading) {
        rootClass.push('at-button--icon')
      }
      return rootClass
    })
    const classObject = computed(() => {
      const { type, size, circle, full, disabled } = props
      return {
        [`at-button--${SIZE_CLASS[size]}`]: SIZE_CLASS[size],
        'at-button--disabled': disabled,
        [`at-button--${type}`]: TYPE_CLASS[type],
        'at-button--circle': circle,
        'at-button--full': full
      }
    })
    return {
      loadingColor,
      loadingSize,
      rootClassName,
      classObject
    }
  },
  methods: {
    classNames,
    handelOnClick(event): void {
      if (!this.disabled) {
        this.$emit('click', event)
      }
    }
  },
  render(): JSX.Element {
    const { customStyle, className, loading } = this.$props
    const { handelOnClick, classObject, rootClassName, loadingColor, loadingSize, $slots } = this
    return (
      <div
        class={classNames(rootClassName, classObject, className)}
        style={customStyle}
        onClick={handelOnClick}>
        {loading && (
          <div class="at-button__icon">
            <Loading color={loadingColor} size={loadingSize} />
          </div>
        )}
        <div class="at-button__text">{$slots.default && $slots.default()}</div>
      </div>
    )
  }
})
