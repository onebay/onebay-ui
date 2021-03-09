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
    style: {
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
    },
    onChange: {
      type: Function,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      default: () => {}
    }
  },
  emits: ['change'],
  setup(props: { className: string }) {
    const rootCls = computed(() => {
      const { className } = props
      return classNames('ob-checkbox', className)
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
      return classNames('ob-checkbox__option', {
        'ob-checkbox__option--disabled': disabled,
        'ob-checkbox__option--selected': this.selectedList.includes(value)
      })
    }
  },
  render() {
    const { style, options } = this.$props
    const { handleClick, rootCls } = this
    return (
      <div class={rootCls} style={style}>
        {options.map((option: CheckboxItem, index: number) => (
          <div
            class={this.getOptionCls(option)}
            key={`${option.value}`}
            onClick={() => handleClick(index)}>
            <div class="ob-checkbox__option-wrap">
              <div class="ob-checkbox__option-cnt">
                <div class="ob-checkbox__icon-cnt">
                  <span class="ob-icon ob-icon-check"></span>
                </div>
                <div class="ob-checkbox__title">{option.label}</div>
              </div>
              {option.desc && <div class="ob-checkbox__desc">{option.desc}</div>}
            </div>
          </div>
        ))}
      </div>
    )
  }
})

export default Checkbox
