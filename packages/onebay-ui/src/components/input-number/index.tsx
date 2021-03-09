import classNames from 'classnames'
import { defineComponent, computed, PropType } from 'vue'
import { baseToString as _toString, isFunction } from '../../utils'

export interface InputError {
  type: 'OVER' | 'LOW' | 'DISABLED'
  errorValue: number
}

// Add two numbers and keep the shortest mantissa after the decimal point
function addNum(num1: number, num2: number): number {
  let sq1: number, sq2: number
  try {
    sq1 = _toString(num1).split('.')[1].length
  } catch (e) {
    sq1 = 0
  }
  try {
    sq2 = _toString(num2).split('.')[1].length
  } catch (e) {
    sq2 = 0
  }
  const m = Math.pow(10, Math.max(sq1, sq2))
  return (Math.round(num1 * m) + Math.round(num2 * m)) / m
}

// format number, make '01' => '1'
function parseValue(num: string): string {
  if (num === '') return '0'

  const numStr = _toString(num)
  if (numStr.indexOf('0') === 0 && numStr.indexOf('.') === -1) {
    return _toString(parseFloat(num))
  }
  return _toString(num)
}

const InputNumber = defineComponent({
  name: 'InputNumber',
  props: {
    style: {
      type: [Object, String],
      default: ''
    },
    className: {
      type: [Object, String],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    disabledInput: {
      type: Boolean,
      default: false
    },
    type: {
      type: String as PropType<'number' | 'digit'>,
      default: 'number'
    },
    size: {
      type: String as PropType<'normal' | 'large'>,
      default: 'normal'
    },
    value: {
      type: [Number, String],
      default: 1
    },
    width: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    onErrorInput: {
      type: Function,
      default: () => {
        /* */
      }
    },
    // eslint-disable-next-line vue/require-default-prop
    onChange: {
      type: Function
    }
  },
  emits: ['change', 'blur'],
  setup(props) {
    const handleError = (errorValue: InputError): void => {
      const { onErrorInput } = props
      /* istanbul ignore else */
      if (isFunction(onErrorInput)) {
        onErrorInput(errorValue)
      }
    }

    const handleValue = (value: string | number): string => {
      const { max, min } = props
      let resultValue = value === '' ? min : value
      if (resultValue > max) {
        resultValue = max
        handleError({
          type: 'OVER',
          errorValue: resultValue
        })
      }
      if (resultValue < min) {
        resultValue = min
        handleError({
          type: 'LOW',
          errorValue: resultValue
        })
      }
      if (resultValue && !Number(resultValue)) {
        resultValue = parseFloat(String(resultValue)) || min

        handleError({
          type: 'OVER',
          errorValue: resultValue
        })
      }

      resultValue = parseValue(String(resultValue))
      return resultValue
    }

    const inputValue = computed(() => {
      return Number(handleValue(props.value))
    })
    const inputStyle = computed(() => {
      const { width } = props
      return {
        width: width ? `${width}px` : ''
      }
    })

    const rootCls = computed(() => {
      const { size, className } = props
      return classNames(
        'ob-input-number',
        {
          'ob-input-number--lg': size === 'large'
        },
        className
      )
    })

    const minusBtnCls = computed(() => {
      const { min, disabled, value } = props
      const inputValue = Number(handleValue(value))
      return classNames('ob-input-number__btn', {
        'ob-input-number--disabled': inputValue <= min || disabled
      })
    })

    const plusBtnCls = computed(() => {
      const { max, disabled, value } = props
      const inputValue = Number(handleValue(value))
      return classNames('ob-input-number__btn', {
        'ob-input-number--disabled': inputValue >= max || disabled
      })
    })

    return {
      inputValue,
      inputStyle,
      rootCls,
      minusBtnCls,
      plusBtnCls,
      handleValue,
      handleError
    }
  },
  methods: {
    handleClick(clickType: 'minus' | 'plus'): void {
      const { disabled, value, min, max, step } = this.$props
      const lowThanMin = clickType === 'minus' && value <= min
      const overThanMax = clickType === 'plus' && value >= max
      /* istanbul ignore else */
      if (lowThanMin || overThanMax || disabled) {
        const deltaValue = clickType === 'minus' ? -step : step
        const errorValue = addNum(Number(value), deltaValue)
        if (disabled) {
          this.handleError({
            type: 'DISABLED',
            errorValue
          })
        } else {
          this.handleError({
            type: lowThanMin ? 'LOW' : 'OVER',
            errorValue
          })
        }
        return
      }
      const deltaValue = clickType === 'minus' ? -step : step
      let newValue = addNum(Number(value), deltaValue)
      newValue = Number(this.handleValue(newValue))
      this.$emit('change', newValue)
    },
    handleInput(e: Event): number | string | void {
      const { value } = e.target as HTMLInputElement
      const { disabled } = this.$props
      /* istanbul ignore else */
      if (!disabled) {
        const newValue = this.handleValue(value)
        this.$emit('change', Number(newValue))
        return newValue
      }
    },

    handleBlur(event: FocusEvent): void {
      this.$emit('blur', event)
    }
  },
  render() {
    const {
      rootCls,
      minusBtnCls,
      inputStyle,
      handleClick,
      inputValue,
      handleInput,
      handleBlur,
      plusBtnCls
    } = this
    const { style, type, disabledInput, disabled } = this.$props
    return (
      <div class={rootCls} style={style}>
        <div class={minusBtnCls} onClick={() => handleClick('minus')}>
          <div class="ob-icon ob-icon-subtract ob-input-number__btn-subtract"></div>
        </div>
        <input
          class="ob-input-number__input"
          style={inputStyle}
          type={type}
          value={String(inputValue)}
          disabled={disabledInput || disabled}
          onInput={handleInput}
          onBlur={handleBlur}
        />
        <div class={plusBtnCls} onClick={() => handleClick('plus')}>
          <div class="ob-icon ob-icon-add ob-input-number__btn-add"></div>
        </div>
      </div>
    )
  }
})

export default InputNumber
