import { defineComponent, computed, PropType, CSSProperties } from 'vue'
import classNames from 'classnames'
import Loading from '../loading/index'

export enum SIZE_CLASS {
  normal = 'normal',
  small = 'small'
}

export enum TYPE_CLASS {
  primary = 'primary',
  secondary = 'secondary'
}

export type ButtonType = 'primary' | 'secondary'

export default defineComponent({
  components: {
    Loading
  },
  props: {
    size: {
      type: String as PropType<string>,
      default: 'normal'
    },
    type: {
      type: String as PropType<ButtonType>,
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
    style: {
      type: String as PropType<CSSProperties>,
      default: ''
    },
    className: {
      type: [Object, String],
      default: ''
    },
    onClick: {
      type: Function as PropType<() => void>,
      default: () => {
        /* */
      }
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
      const rootClass = ['ob-button']
      if (props.loading) {
        rootClass.push('ob-button--icon')
      }
      return rootClass
    })
    const classObject = computed(() => {
      const { type, size, circle, full, disabled } = props
      return {
        [`ob-button--${SIZE_CLASS[size]}`]: SIZE_CLASS[size],
        'ob-button--disabled': disabled,
        [`ob-button--${type}`]: TYPE_CLASS[type],
        'ob-button--circle': circle,
        'ob-button--full': full
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
    handelOnClick(event: MouseEvent): void {
      if (!this.disabled) {
        this.$emit('click', event)
      }
    }
  },
  render(): JSX.Element {
    const { style, className, loading } = this.$props
    const { handelOnClick, classObject, rootClassName, loadingColor, loadingSize, $slots } = this
    return (
      <div
        class={classNames(rootClassName, classObject, className)}
        style={style}
        onClick={handelOnClick}>
        {loading && (
          <div class="ob-button__icon">
            <Loading color={loadingColor} size={loadingSize} />
          </div>
        )}
        <div class="ob-button__text">{$slots.default && $slots.default()}</div>
      </div>
    )
  }
})
