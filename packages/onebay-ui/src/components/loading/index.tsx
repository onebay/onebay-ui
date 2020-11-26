import { defineComponent, computed } from 'vue'

export interface LoadingProps {
  color: string | number
  size: string | number
}

export default defineComponent({
  name: 'Loading',
  props: {
    size: {
      type: [String, Number],
      default: 0
    },
    color: {
      type: [String, Number],
      default: ''
    }
  },
  setup(props: LoadingProps) {
    const sizeStyle = computed(() => {
      const { size } = props
      const loadingSize = typeof size === 'string' ? size : String(size)
      const res = {
        width: size ? `${parseInt(loadingSize)}px` : '',
        height: size ? `${parseInt(loadingSize)}px` : ''
      }
      return res
    })
    const ringStyle = computed(() => {
      const { color } = props
      const colorStyle = {
        border: color ? `1px solid ${color}` : '',
        'border-color': color ? `${color} transparent transparent transparent` : ''
      }
      return Object.assign({}, colorStyle, sizeStyle.value)
    })
    const transformStyle = (style = {}) => {
      return Object.keys(style)
        .map((item) => `${item}: ${style[item]}`)
        .join(';')
    }

    return {
      sizeStyle,
      ringStyle,
      transformStyle
    }
  },
  render() {
    const { sizeStyle, ringStyle, transformStyle } = this
    return (
      <div class="ob-loading" style={transformStyle(sizeStyle)}>
        <div class="ob-loading__ring" style={ringStyle}></div>
        <div class="ob-loading__ring" style={transformStyle(ringStyle)}></div>
        <div class="ob-loading__ring" style={ringStyle} data-id={ringStyle}></div>
      </div>
    )
  }
})
