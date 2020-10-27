import classNames from 'classnames'
import { PropType, defineComponent, computed, ref } from 'vue'
import { CSSProperties } from '../../../global'

type ExtendEvent = {
  target: {
    value: string
  }
}

const SearchBar = defineComponent({
  name: 'SearchBar',
  props: {
    customStyle: {
      type: [Object, String] as PropType<CSSProperties>,
      default: ''
    },
    className: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Search'
    },
    actionName: {
      type: String,
      default: 'Search'
    },
    maxLength: {
      type: Number,
      default: 140
    },
    fixed: {
      type: Boolean,
      default: false
    },
    focus: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showActionButton: {
      type: Boolean,
      default: false
    },
    inputType: {
      type: String,
      default: 'text'
    },
    onClear: {
      type: Function as PropType<() => void | null>,
      default: null
    },
    onActionClick: {
      type: Function,
      default: () => {
        /* */
      }
    }
  },
  emits: ['focus', 'blur', 'change'],
  setup(props) {
    const actionBtnRef = ref(null)
    const actionBtnInitMarginleft: string | null = null
    const isFocus = ref(!!props.focus)
    const rootCls = computed(() => {
      const { fixed, className } = props
      return classNames(
        'at-search-bar',
        {
          'at-search-bar--fixed': fixed
        },
        className
      )
    })
    const placeholderWrapStyle = computed(() => {
      const { value } = props
      const wrapStyle: CSSProperties = {}
      if (isFocus.value || (!isFocus.value && value)) {
        wrapStyle.flexGrow = 0
      } else if (!isFocus.value && !value) {
        wrapStyle.flexGrow = 1
      }
      return wrapStyle
    })
    const actionStyle = computed(() => {
      const { value, showActionButton } = props
      const actionStyle: CSSProperties = {}
      if (isFocus.value || (!isFocus.value && value)) {
        actionStyle.opacity = 1
        actionStyle.marginRight = `0`
      } else if (!isFocus.value && !value) {
        actionStyle.opacity = 0
        if (actionBtnRef.value) {
          actionStyle.marginRight = `-${
            actionBtnRef.value.offsetWidth +
            (actionBtnInitMarginleft != null ? parseInt(actionBtnInitMarginleft, 10) : 0)
          }px`
        }
      }
      if (showActionButton) {
        actionStyle.opacity = 1
        actionStyle.marginRight = `0`
      }
      return actionStyle
    })
    const clearIconStyle = computed(() => {
      const { value } = props
      const clearIconStyle: CSSProperties = { display: 'flex' }
      if (!value.length) {
        clearIconStyle.display = 'none'
      }
      return clearIconStyle
    })
    const placeholderStyle = computed(() => {
      const { value } = props
      const placeholderStyle: CSSProperties = { visibility: 'hidden' }
      if (!value.length) {
        placeholderStyle.visibility = 'visible'
      }
      return placeholderStyle
    })
    return {
      rootCls,
      placeholderWrapStyle,
      isFocus,
      actionStyle,
      clearIconStyle,
      placeholderStyle,
      actionBtnRef,
      actionBtnInitMarginleft
    }
  },
  mounted() {
    /* istanbul ignore else */
    if (this.$refs.actionBtnRef) {
      const initBtn = window.getComputedStyle(this.actionBtnRef)
      this.actionBtnInitMarginleft = initBtn.marginLeft
      this.actionBtnRef.value = this.$refs.actionBtnRef
    }
  },
  methods: {
    handleFocus(event: Event): void {
      this.isFocus = true
      this.$emit('focus', event)
    },
    handleBlur(event: Event): void {
      this.isFocus = false
      this.$emit('blur', event)
    },
    handleChange(e: Event & ExtendEvent): void {
      this.$emit('change', e.target.value, e)
    },
    handleClear(event: Event): void {
      const { onClear } = this.$props
      if (onClear) {
        onClear(event)
      } else {
        this.$emit('change', '', event)
      }
    },
    handleActionClick(event: Event): void {
      this.onActionClick && this.onActionClick(event)
    }
  },
  render(): JSX.Element {
    const {
      rootCls,
      placeholderWrapStyle,
      placeholderStyle,
      inputType,
      value,
      clearIconStyle,
      handleClear,
      actionStyle,
      handleActionClick,
      handleChange,
      handleFocus,
      handleBlur,
      isFocus
    } = this
    const { customStyle, placeholder, disabled, maxLength, actionName } = this.$props
    return (
      <div class={rootCls} style={customStyle} ref="root">
        <div class="at-search-bar__input-cnt">
          <div class="at-search-bar__placeholder-wrap" style={placeholderWrapStyle}>
            <div class="at-icon at-icon-search"></div>
            <div class="at-search-bar__placeholder" style={placeholderStyle}>
              {isFocus ? '' : placeholder}
            </div>
          </div>
          <input
            class="at-search-bar__input"
            type={inputType}
            value={value}
            disabled={disabled}
            maxlength={maxLength}
            onInput={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <div class="at-search-bar__clear" style={clearIconStyle} onClick={handleClear}>
            <div class="at-icon at-icon-close-circle"></div>
          </div>
        </div>
        <div
          class="at-search-bar__action"
          style={actionStyle}
          onClick={handleActionClick}
          ref="actionBtnRef">
          {actionName}
        </div>
      </div>
    )
  }
})

export default SearchBar
