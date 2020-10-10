import classNames from 'classnames'
import { mergeStyle } from '../../utils'
import { defineComponent, computed, PropType } from 'vue'

type Item = string | number

export default defineComponent({
  name: 'SegmentedControl',
  props: {
    customStyle: {
      type: [Object, String],
      default: ''
    },
    className: {
      type: [Array, String],
      default: ''
    },
    current: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: ''
    },
    fontSize: {
      type: [Number, String],
      default: 20
    },
    disabled: {
      type: Boolean,
      default: false
    },
    selectedColor: {
      type: String,
      default: ''
    },
    values: {
      type: Array as PropType<Item[]>,
      default: () => []
    }
  },
  emits: ['click'],
  setup(props) {
    const rootCls = computed(() => {
      const { disabled, className } = props
      return classNames(
        'at-segmented-control',
        {
          'at-segmented-control--disabled': disabled
        },
        className
      )
    })
    const rootBorderStyle = computed(() => {
      return {
        borderColor: props.selectedColor
      }
    })
    const rootStyle = computed(() => {
      return mergeStyle(rootBorderStyle.value, props.customStyle)
    })
    const itemStyle = computed(() => {
      const { selectedColor, color, fontSize } = props
      return {
        color: selectedColor,
        fontSize: fontSize,
        borderColor: selectedColor,
        backgroundColor: color
      }
    })
    const selectedItemStyle = computed(() => {
      const { selectedColor, color, fontSize } = props
      return {
        color,
        fontSize: fontSize,
        borderColor: selectedColor,
        backgroundColor: selectedColor
      }
    })
    return {
      rootCls,
      rootStyle,
      itemStyle,
      selectedItemStyle
    }
  },
  methods: {
    classNames,
    handleClick(index: number, event: Event) {
      if (this.disabled) return
      this.$emit('click', index, event)
    }
  },
  render(): JSX.Element {
    const { handleClick, rootCls, rootStyle, selectedItemStyle, itemStyle } = this
    const { current, values } = this.$props
    return (
      <div class={rootCls} style={rootStyle as string}>
        {values.map((value: Item, i) => (
          <div
            key={value}
            class={classNames('at-segmented-control__item', {
              'at-segmented-control__item--active': current === i
            })}
            style={current === i ? selectedItemStyle : itemStyle}
            onClick={(e) => handleClick(i, e)}>
            {value}
          </div>
        ))}
      </div>
    )
  }
})
