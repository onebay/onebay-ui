import { computed, defineComponent, PropType } from 'vue'
import classNames from 'classnames'

export enum SIZE_CLASS {
  normal = 'normal',
  small = 'small'
}

export enum TYPE_CLASS {
  primary = 'primary'
}

const Tag = defineComponent({
  name: 'Tag',
  props: {
    size: {
      type: String as PropType<SIZE_CLASS>,
      default: 'normal',
      validator: (val: string) => Object.keys(SIZE_CLASS).includes(val)
    },
    type: {
      type: String as PropType<TYPE_CLASS>,
      default: '',
      validator: (val: string) => ['', 'primary'].includes(val)
    },
    name: {
      type: String,
      default: ''
    },
    circle: {
      type: Boolean,
      default: false
    },
    active: {
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
    const rootCls = computed(() => {
      const { size, type, circle, disabled, active } = props
      const rootClassName = ['ob-tag']
      const classObject = {
        [`ob-tag--${SIZE_CLASS[size]}`]: size,
        [`ob-tag--${TYPE_CLASS[type]}`]: type,
        'ob-tag--disabled': disabled,
        'ob-tag--active': active,
        'ob-tag--circle': circle
      }
      return classNames(rootClassName, classObject, props.className)
    })
    return {
      rootCls
    }
  },
  methods: {
    handleClick(event: Event): void {
      if (!this.disabled) {
        this.$emit(
          'click',
          {
            name: this.name,
            active: this.active
          },
          event
        )
      }
    }
  },
  render() {
    const { handleClick, rootCls, $slots } = this
    const { customStyle } = this.$props
    return (
      <div class={rootCls} style={customStyle} onClick={handleClick}>
        {$slots.default && $slots.default()}
      </div>
    )
  }
})

export default Tag
