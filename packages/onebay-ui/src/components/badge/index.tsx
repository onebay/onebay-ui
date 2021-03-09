import { defineComponent, computed, PropType, CSSProperties } from 'vue'
import classNames from 'classnames'

const formatValue = (value: string | number | undefined, maxValue: number): string | number => {
  if (value === '' || value === null || value === undefined) return ''
  const numValue = +value
  if (Number.isNaN(numValue)) {
    return value
  }
  return numValue > maxValue ? `${maxValue}+` : numValue
}

export default defineComponent({
  name: 'Badge',
  props: {
    dot: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      default: ''
    },
    maxValue: {
      type: Number,
      default: 99
    },
    style: {
      type: String as PropType<CSSProperties>,
      default: ''
    },
    className: {
      type: [String, Object],
      default: ''
    }
  },
  setup(props) {
    const val = computed(() => {
      const { value, maxValue } = props
      return formatValue(value, maxValue)
    })
    const rootClass = computed(() => {
      return classNames('ob-badge', props.className)
    })
    return {
      val,
      rootClass
    }
  },
  render(): JSX.Element {
    const { dot, style } = this.$props
    const { val, rootClass, $slots } = this
    return (
      <div class={rootClass} style={style}>
        {$slots.default && $slots.default()}
        {dot && <div class="ob-badge__dot" />}
        {!dot && val && (
          <div>
            <div class="ob-badge__num">{val}</div>
          </div>
        )}
      </div>
    )
  }
})
