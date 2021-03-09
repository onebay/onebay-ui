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
    style: {
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
    // eslint-disable-next-line vue/require-default-prop
    onClick: { type: Function }
  },
  emits: ['click'],
  setup(props) {
    const rootCls = computed(() => {
      return classNames('ob-radio', props.className)
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
        'ob-radio__option': true,
        'ob-radio__option--disabled': disabled
      })
    },
    getIconCls(value: OptionItem['value']) {
      return classNames({
        'ob-radio__icon': true,
        'ob-radio__icon--checked': this.value === value
      })
    }
  },
  render() {
    const { rootCls, handleClick, getOptionCls, getIconCls } = this
    const { style, options } = this.$props
    return (
      <div class={rootCls} style={style}>
        {(options as OptionItem[]).map(
          (option: OptionItem): JSX.Element => (
            <div
              key={option.value}
              onClick={(e) => handleClick(option, e)}
              class={getOptionCls(option.disabled)}>
              <div class="ob-radio__option-wrap">
                <div class="ob-radio__option-container">
                  <div class="ob-radio__title">{option.label}</div>
                  <div class={getIconCls(option.value)}>
                    <div class="ob-icon ob-icon-check text"></div>
                  </div>
                </div>
                {option.desc && <div class="ob-radio__desc">{option.desc}</div>}
              </div>
            </div>
          )
        )}
      </div>
    )
  }
})

export default Radio
