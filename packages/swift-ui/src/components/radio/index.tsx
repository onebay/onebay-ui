import classNames from 'classnames'
import { defineComponent, computed } from 'vue'

interface OptionItem {
  disabled?: boolean
  label?: string | number
  value?: string | number
  desc?: string
}

const Radio = defineComponent({
  name: 'Radio',
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
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    },
    onClick: {
      type: Function,
      default: () => {
        /* */
      }
    }
  },
  emits: ['click'],
  setup(props) {
    const rootCls = computed(() => {
      return classNames('at-radio', props.className)
    })
    return {
      rootCls
    }
  },
  methods: {
    handleClick(option: OptionItem, event: Event) {
      if (option.disabled) return
      this.$emit('click', option.value, event)
    },
    getOptionCls(disabled: OptionItem['disabled']) {
      return classNames({
        'at-radio__option': true,
        'at-radio__option--disabled': disabled
      })
    },
    getIconCls(value: OptionItem['value']) {
      return classNames({
        'at-radio__icon': true,
        'at-radio__icon--checked': this.value === value
      })
    }
  },
  render() {
    const { rootCls, handleClick, getOptionCls, getIconCls } = this
    const { customStyle, options } = this.$props
    return (
      <div class={rootCls} style={customStyle}>
        {(options as OptionItem[]).map(
          (option: OptionItem): JSX.Element => (
            <div
              key={option.value}
              onClick={(e) => handleClick(option, e)}
              class={getOptionCls(option.disabled)}>
              <div class="at-radio__option-wrap">
                <div class="at-radio__option-container">
                  <div class="at-radio__title">{option.label}</div>
                  <div class={getIconCls(option.value)}>
                    <div class="at-icon at-icon-check text"></div>
                  </div>
                </div>
                {option.desc && <div class="at-radio__desc">{option.desc}</div>}
              </div>
            </div>
          )
        )}
      </div>
    )
  }
})

export default Radio
