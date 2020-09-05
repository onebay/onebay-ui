import { defineComponent, computed } from 'vue'
import classNames from 'classnames'

const SIZE_CLASS = {
  normal: 'normal',
  small: 'small',
}

const TYPE_CLASS = {
  primary: 'primary',
  secondary: 'secondary',
}

export default defineComponent({
  props: {
    size: {
      type: String,
      default: 'normal',
    },
    type: {
      type: String,
      default: undefined,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    full: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    customStyle: {
      type: [Object, String],
      default: () => {},
    },
    className: {
      type: [Object, String],
      default: () => {},
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },
  setup (props) {
    const { type, size, loading, circle, full, disabled } = props
    const loadingColor = computed(() => {
      return type === 'primary' ? '#fff' : ''
    })
    const loadingSize = computed(() => {
      return size === 'small' ? '15' : 0
    })
    const rootClassName = computed(() => {
      const rootClass = ['at-button']
      if (loading) {
        rootClass.push('at-button--icon')
      }
      return rootClass
    })
    const classObject = computed(() => {
      return {
        [`at-button--${SIZE_CLASS[size]}`]: SIZE_CLASS[size],
        'at-button--disabled': disabled,
        [`at-button--${type}`]: TYPE_CLASS[type],
        'at-button--circle': circle,
        'at-button--full': full,
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
    },
  },
})
