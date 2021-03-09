import { computed, defineComponent, PropType, CSSProperties } from 'vue'
import classNames from 'classnames'

export type TagSize = 'normal' | 'small'
export type TagType = 'primary'

const Tag = defineComponent({
  name: 'Tag',
  props: {
    size: {
      type: String as PropType<TagSize>,
      default: 'normal',
      validator: (val: string) => ['normal', 'small'].includes(val)
    },
    type: {
      type: String as PropType<TagType>,
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
    style: {
      type: String as PropType<CSSProperties>,
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
        [`ob-tag--${size}`]: size,
        [`ob-tag--${type}`]: type,
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
    const { style } = this.$props
    return (
      <div class={rootCls} style={style} onClick={handleClick}>
        {$slots.default && $slots.default()}
      </div>
    )
  }
})

export default Tag
