import { defineComponent, computed } from 'vue'
import classNames from 'classnames'

/**
 * formatValue
 * @param {string | number | undefined} value
 * @param {number} maxValue
 * @return string | number
 */
const formatValue = (value, maxValue) => {
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
      default: false,
    },
    value: {
      type: [String, Number],
      default: '',
    },
    maxValue: {
      type: Number,
      default: 99,
    },
    customStyle: {
      type: [String, Object],
      default: () => {},
    },
    className: {
      type: [String, Array],
      default: '',
    },
  },
  setup (props) {
    const { value, maxValue, className } = props
    const val = computed(() => {
      return formatValue(value, maxValue)
    })
    const rootClass = computed(() => {
      return classNames('at-badge', className)
    })
    return {
      val,
      rootClass
    }
  },
  methods: {
    classNames,
  },
})
