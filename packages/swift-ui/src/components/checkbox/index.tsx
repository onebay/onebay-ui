import classNames from 'classnames'
import { defineComponent, computed } from 'vue'

export interface CheckboxItem {
  value: unknown
  label: string
  desc?: string
}

const Checkbox = defineComponent({
  name: 'Checkbox',
  props: {
    customStyle: {
      type: [Object, String],
      default: function () {
        return {}
      }
    },
    className: {
      type: [Object, String],
      default: ''
    },
    options: {
      type: Array,
      default: function () {
        return []
      }
    },
    selectedList: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  emits: ['change'],
  setup(props: { className: string }) {
    const rootCls = computed(() => {
      const { className } = props
      return classNames('at-checkbox', className)
    })
    return {
      rootCls
    }
  },
  methods: {
    handleClick(idx: number): void {
      const { selectedList, options } = this
      const option = options[idx]
      const { disabled, value } = option
      if (disabled) return
      const selectedSet = new Set(selectedList)

      if (!selectedSet.has(value)) {
        selectedSet.add(value)
      } else {
        selectedSet.delete(value)
      }
      this.$emit('change', Array.from(selectedSet))
    },
    getOptionCls(option) {
      const { disabled, value } = option
      return classNames('at-checkbox__option', {
        'at-checkbox__option--disabled': disabled,
        'at-checkbox__option--selected': this.selectedList.includes(value)
      })
    }
  },
  render() {
    const { rootCls, customStyle, options } = this.$props
    return (
      <div class={rootCls} style={customStyle}>
        {
          options.map((option: CheckboxItem) => (
            <div
              class={this.getOptionCls(option)}
              key={option.value}
            >
              <div class="at-checkbox__option-wrap">
                <div class="at-checkbox__option-cnt">
                  <div class="at-checkbox__icon-cnt">
                    <span class="at-icon at-icon-check"></span>
                  </div>
                  <div class="at-checkbox__title">{option.label}</div>
                </div>
                {option.desc && <div class="at-checkbox__desc">{option.desc}</div>}
              </div>
            </div>
          ))
        }

      </div>
    )
  }
})

export default Checkbox