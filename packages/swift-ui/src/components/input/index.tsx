import classNames from 'classnames'
import { defineComponent, computed, PropType, ref } from 'vue'

interface ActualProps {
  type: string
  maxLength: number
  disabled: boolean
  password: boolean
}

function getInputProps(props): ActualProps {
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
    type: [Object, String],
    default: function () {
      return {}
    }
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
  onChange: {
    type: Function,
    default: function () {
      /* */
    }
  },
  onFocus: {
    type: Function,
    default: function () {
      /* */
    }
  },
  onBlur: {
    type: Function,
    default: function () {
      /* */
    }
  },
  onConfirm: {
    type: Function,
    default: function () {
      /* */
    }
  },
  onErrorClick: {
    type: Function,
    default: function () {
      /* */
    }
  },
  onClick: {
    type: Function,
    default: function () {
      /* */
    }
  }
}

export interface InputProps {
  border?: boolean
  error?: boolean
  /* eslint-disable */
  className?: any
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
        'at-input',
        {
          'at-input--without-border': !props.border
        },
        props.className
      )
    })

    const containerCls = computed(() => {
      return classNames('at-input__container', {
        'at-input--error': props.error,
        'at-input--disabled': inputProps.value.disabled
      })
    })

    const overlayCls = computed(() => {
      return classNames('at-input__overlay', {
        'at-input__overlay--hidden': !inputProps.value.disabled
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
      this.$emit('change', event.target?.value, event)
    },
    handleInput(event: Event): void {
      console.log('handleInput')
      this.$emit('input', event)
    },
    handleFocus(event: Event): void {
      this.$emit('focus', event)
    },
    handleBlur(event: Event): void {
      this.$emit('blur', event)
      if (event.type === 'blur' && !this.inputClearing) {
        this.onChange(event.target.value)
      }
      this.inputClearing = false
    },
    handleClick(event: MouseEvent): void {
      if (!this.editable && typeof this.onClick === 'function') {
        this.$emit('click', event)
      }
    },
    handleClearValue(event: MouseEvent): void {
      this.inputClearing = true
      this.onChange('', event)
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
              class={['at-input__title', required ? 'at-input__title--required' : '']}
              for={name}>
              {title}
            </label>
          )}
          <input
            class="at-input__input"
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
            <div class="at-input__icon" onClick={handleClearValue}>
              <div class="at-icon at-icon-close-circle at-input__icon-close"></div>
            </div>
          )}
          {error && (
            <div class="at-input__icon" onClick={handleErrorClick}>
              <div class="at-icon at-icon-alert-circle at-input__icon-alert"></div>
            </div>
          )}
          <div class="at-input__children">{$slots.default && $slots.default()}</div>
        </div>
      </div>
    )
  }
})

export default Input
