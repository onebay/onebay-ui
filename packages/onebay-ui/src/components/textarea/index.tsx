import classNames from 'classnames'
import { defineComponent, computed } from 'vue'

function getMaxLength(maxLength: number, textOverflowForbidden: boolean): number {
  if (!textOverflowForbidden) {
    return maxLength + 500
  }
  return maxLength
}

const Textarea = defineComponent({
  name: 'Textarea',
  props: {
    customStyle: {
      type: [Object, String],
      default: ''
    },
    className: {
      type: [Object, String],
      default: ''
    },
    value: {
      type: String,
      default: '',
      required: true
    },
    maxLength: {
      type: [Number, String],
      default: 200
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    focus: {
      type: Boolean,
      default: false
    },
    count: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: Boolean,
      default: false
    },
    height: {
      type: [Number, String],
      default: ''
    },
    textOverflowForbidden: {
      type: Boolean,
      default: true
    }
  },
  emits: ['change', 'focus', 'blur', 'confirm'],
  setup(props) {
    const maxLen = computed(() => {
      return parseInt(props.maxLength.toString())
    })
    const rootCls = computed(() => {
      const { value, className } = props
      return classNames(
        'ob-textarea',
        `ob-textarea--WEB`,
        {
          'ob-textarea--error': maxLen.value < value.length
        },
        className
      )
    })
    const textareaStyle = computed(() => {
      const { height } = props
      return height ? `height:${Number(height)}px` : ''
    })
    const actualMaxLength = computed(() => {
      const { maxLength, textOverflowForbidden } = props
      const maxLen = parseInt(maxLength.toString())
      return getMaxLength(maxLen, textOverflowForbidden)
    })
    return {
      maxLen,
      rootCls,
      textareaStyle,
      actualMaxLength
    }
  },
  methods: {
    handleInput(event: Event): void {
      this.$emit('change', (event.target as HTMLTextAreaElement).value)
    },

    handleFocus(event: Event): void {
      this.$emit('focus', event)
    },

    handleBlur(event: Event): void {
      this.$emit('blur', event)
    }
  },
  render(): JSX.Element {
    const {
      rootCls,
      textareaStyle,
      actualMaxLength,
      handleInput,
      handleFocus,
      handleBlur,
      maxLen
    } = this
    const { customStyle, value, placeholder, disabled, autoFocus, count } = this.$props
    return (
      <div class={rootCls} style={customStyle}>
        <textarea
          class="ob-textarea__textarea"
          style={textareaStyle}
          value={value}
          maxlength={actualMaxLength}
          placeholder={placeholder}
          disabled={disabled}
          autofocus={autoFocus}
          onInput={handleInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {count && (
          <div class="ob-textarea__counter">
            {value.length}/{maxLen}
          </div>
        )}
      </div>
    )
  }
})

export default Textarea
