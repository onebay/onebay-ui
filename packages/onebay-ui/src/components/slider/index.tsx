import { defineComponent, ref, watch, computed, PropType, CSSProperties } from 'vue'
import classnames from 'classnames'
export interface TouchPoint {
  clientX: number
  clientY: number
  force: number
  identifier: number
  pageX: number
  pageY: number
  radiusX: number
  radiusY: number
  rotationAngle: number
  screenX: number
  screenY: number
}

export default defineComponent({
  name: 'Slider',
  props: {
    style: {
      type: [Object, String] as PropType<CSSProperties>,
      default: ''
    },
    className: {
      type: String,
      default: ''
    },
    value: {
      type: Number,
      default: 0
    },
    showValue: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    handlerColor: {
      type: String,
      default: ''
    },
    trackColor: {
      type: String,
      default: ''
    },
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    }
  },
  emits: ['change'],
  setup(props) {
    let touchPoint: TouchPoint
    let innerRef: Element
    let innerWidth: number
    let innerValue = 0
    const percent = ref(props.value)
    const handlerStyle = ref({})
    const trackStyle = ref({})
    const balance = computed(() => {
      return props.max - props.min
    })
    watch(
      () => props.value,
      (val) => {
        const { min, max } = props
        if (val !== innerValue) {
          if (val < min) val = min
          if (val > max) val = max
          innerValue = val
        }
      },
      { immediate: true }
    )
    const innerStyle = computed(() => {
      const { trackColor } = props
      if (trackColor) {
        return { backgroundColor: trackColor }
      }
      return {}
    })
    return {
      innerValue,
      handlerStyle,
      trackStyle,
      touchPoint,
      innerRef,
      innerWidth,
      percent,
      balance,
      innerStyle
    }
  },
  watch: {
    percent(val) {
      this.$emit('change', val)
    }
  },
  mounted() {
    this.innerWidth = this.innerRef.clientWidth
    const { value, min } = this.$props
    const { balance } = this
    const percent = ((value - min) / balance) * 100
    this.handlerStyle = {
      left: `${percent}%`
    }
    this.trackStyle = {
      width: `${percent}%`
    }
  },
  methods: {
    handleTouchStart(event: TouchEvent) {
      event.preventDefault()
      if (this.$props.disabled) return
      this.touchPoint = event.changedTouches[0]
    },
    handleTouchMove(event: TouchEvent) {
      if (this.$props.disabled) return
      this.handleTouchChange(event)
    },
    handleTouchEnd(event: TouchEvent) {
      if (this.$props.disabled) return
      this.handleTouchChange(event)
      this.innerValue = this.percent
    },
    formatNextWidth(nextWidth: number) {
      const { innerWidth } = this
      if (nextWidth < 0) nextWidth = 0
      if (nextWidth > innerWidth) nextWidth = innerWidth
      return nextWidth
    },
    handleTouchChange(event: TouchEvent) {
      event.preventDefault()
      const { innerValue, innerWidth, balance } = this
      const distance = event.changedTouches[0].clientX - this.touchPoint.clientX
      if (distance === 0) {
        return
      }
      const curWidth = (innerWidth * (innerValue - this.$props.min)) / balance
      const nextWidth = this.formatNextWidth(curWidth + distance)
      const percent = Math.floor((nextWidth / innerWidth) * 100)
      this.handlerStyle = {
        left: `${percent}%`
      }
      this.trackStyle = {
        width: `${percent}%`
      }
      this.percent = Math.floor((percent * balance) / 100 + this.$props.min)
      return nextWidth
    }
  },
  render() {
    const { showValue, activeColor, handlerColor, disabled, style, className } = this.$props
    let { trackStyle, handlerStyle } = this
    const { innerStyle, percent, handleTouchStart, handleTouchMove, handleTouchEnd } = this

    if (activeColor) {
      trackStyle = { ...trackStyle, backgroundColor: activeColor }
    }
    if (handlerColor) {
      handlerStyle = { ...handlerStyle, backgroundColor: handlerColor }
    }
    return (
      <div class={classnames(`ob-slider-box`, className)} style={style}>
        <div class={['ob-slider', disabled ? 'slider-disabled' : '']}>
          <div
            class="ob-slider__inner"
            ref={(el) => (this.innerRef = el as Element)}
            style={innerStyle}>
            <div style={trackStyle} class="ob-slider__track"></div>
            <div
              style={handlerStyle}
              class="ob-slider__handler"
              onTouchstart={handleTouchStart}
              onTouchmove={handleTouchMove}
              onTouchend={handleTouchEnd}></div>
          </div>
        </div>
        {showValue && (
          <div id="sliderValue" class="ob-slider-box__value">
            {percent}
          </div>
        )}
      </div>
    )
  }
})
