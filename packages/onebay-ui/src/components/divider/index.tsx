import { defineComponent, computed, PropType, CSSProperties } from 'vue'
import classNames from 'classnames'
import { mergeStyle } from '../../utils'

export default defineComponent({
  name: 'Divider',
  props: {
    content: {
      type: String,
      default: ''
    },
    height: {
      type: [Number, String],
      default: 0
    },
    fontColor: {
      type: String,
      default: ''
    },
    style: {
      type: String as PropType<CSSProperties>,
      default: ''
    },
    fontSize: {
      type: [Number, String],
      default: 0
    },
    lineColor: {
      type: String,
      default: ''
    },
    className: {
      type: [Object, String],
      default: ''
    }
  },
  setup(props) {
    const rootStyle = computed(() => {
      return {
        height: props.height ? `${Number(props.height)}` : ''
      }
    })
    const fontStyle = computed(() => {
      return {
        color: props.fontColor,
        'font-size': props.fontSize ? `${Number(props.fontSize)}` : ''
      }
    })
    const lineStyle = computed(() => {
      return {
        backgroundColor: props.lineColor
      }
    })
    return {
      rootStyle,
      fontStyle,
      lineStyle
    }
  },
  render(): JSX.Element {
    const { className, style, content } = this.$props
    const { rootStyle, $slots, fontStyle, lineStyle } = this
    return (
      <div class={classNames('ob-divider', className)} style={mergeStyle(rootStyle, style)}>
        <div class="ob-divider__content" style={fontStyle}>
          {$slots.default ? $slots.default() : content}
        </div>
        <div class="ob-divider__line" style={lineStyle} />
      </div>
    )
  }
})
