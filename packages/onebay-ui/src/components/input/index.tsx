import classNames from 'classnames'
import { defineComponent, computed, PropType, ref } from 'vue'

interface ActualProps {
  type: string
  maxLength: number
  disabled?: boolean
  password: boolean
  editable?: boolean
}

function getInputProps(props: ActualProps): ActualProps {
  const actualProps = {
    type: props.type,
    maxLength: props.maxLength,
    disabled: props.disabled,
    password: false
  }

  switch (actualProps.type) {
    case 'phone':
      actualProps.type = 'number'
      actualProps.maxLength = 11
      break
    case 'password':
      actualProps.type = 'text'
      actualProps.password = true
      break
    default:
      break
  }
  if (!props.disabled && !props.editable) {
    actualProps.disabled = true
  }
  return actualProps
}

const compProps = {
  customStyle: {
    type: [Object, String],
    default: function () {
      return {}
    }
  },
  className: {
    type: String,
    default: ''
  },
  value: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  name: {
    type: String as PropType<string>,
    default: ''
  },
  placeholder: {
    type: String as PropType<string>,
    default: ''
  },
  placeholderStyle: {
    type: String as PropType<string>,
    default: ''
  },
  placeholderClass: {
    type: String as PropType<string>,
    default: ''
  },
  title: {
    type: String as PropType<string>,
    default: ''
  },
  cursor: {
    type: [String, Number] as PropType<string | number>,
    default: 0
  },
  maxLength: {
    type: Number as PropType<number>,
    default: 140
  },
  type: {
    type: String as PropType<string>,
    default: 'text'
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  border: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  editable: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  error: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  clear: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  autoFocus: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  focus: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  required: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  onErrorClick: {
    type: Function,
    default: () => {
      /* */
    }
  },
  // eslint-disable-next-line vue/require-default-prop
  onChange: {
    type: Function
  }
}

export interface InputProps {
  border?: boolean
  error?: boolean
  /* eslint-disable */
  className: string
  /* eslint-disable */
}

const Input = defineComponent({
  name: 'Input',
  props: Object.assign({}, compProps),
  emits: ['click', 'change', 'input', 'focus', 'blur'],
  setup<T extends InputProps>(props: T) {
    const inputProps = computed(() => {
      return getInputProps(props)
    })

    const rootCls = computed(() => {
      return classNames(
        'ob-input',
        {
          'ob-input--without-border': !props.border
        },
        props.className
      )
    })

    const containerCls = computed(() => {
      return classNames('ob-input__container', {
        'ob-input--error': props.error,
        'ob-input--disabled': inputProps.value.disabled
      })
    })

    const overlayCls = computed(() => {
      return classNames('ob-input__overlay', {
        'ob-input__overlay--hidden': !inputProps.value.disabled
      })
    })
    const inputClearing = ref(false)
    return {
      inputProps,
      rootCls,
      containerCls,
      overlayCls,
      inputClearing
    }
  },
  methods: {
    handleChange(event: Event): void {
      this.$emit('change', (event.target as HTMLInputElement).value, event)
    },
    handleInput(event: Event): void {
      this.$emit('input', event)
    },
    handleFocus(event: Event): void {
      this.$emit('focus', event)
    },
    handleBlur(event: MouseEvent): void {
      this.$emit('blur', event)
      if (event.type === 'blur' && !this.inputClearing) {
        this.$emit('change', (event.target as HTMLInputElement).value)
      }
      this.inputClearing = false
    },
    handleClick(event: MouseEvent): void {
      if (!this.editable) {
        this.$emit('click', event)
      }
    },
    handleClearValue(event: MouseEvent): void {
      this.inputClearing = true
      this.$emit('change', '', event)
    },
    handleErrorClick(event: MouseEvent): void {
      if (typeof this.onErrorClick === 'function') {
        this.onErrorClick(event)
      }
    }
  },
  render(): JSX.Element {
    const { required, name, title, placeholder, value, clear, error, customStyle } = this.$props
    const {
      handleClick,
      handleBlur,
      handleFocus,
      handleChange,
      handleInput,
      inputProps,
      handleClearValue,
      handleErrorClick,
      $slots,
      containerCls,
      overlayCls,
      rootCls
    } = this
    return (
      <div class={rootCls} style={customStyle}>
        <div class={containerCls}>
          <div class={overlayCls} onClick={handleClick}></div>
          {title && (
            <label
              class={['ob-input__title', required ? 'ob-input__title--required' : '']}
              for={name}>
              {title}
            </label>
          )}
          <input
            class="ob-input__input"
            id="name"
            name="name"
            type={inputProps.type}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            onInput={handleInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {clear && value && (
            <div class="ob-input__icon" onClick={handleClearValue}>
              <div class="ob-icon ob-icon-close-circle ob-input__icon-close"></div>
            </div>
          )}
          {error && (
            <div class="ob-input__icon" onClick={handleErrorClick}>
              <div class="ob-icon ob-icon-alert-circle ob-input__icon-alert"></div>
            </div>
          )}
          <div class="ob-input__children">{$slots.default && $slots.default()}</div>
        </div>
      </div>
    )
  }
})

export default Input
