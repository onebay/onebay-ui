import classNames from 'classnames'
import { defineComponent, computed, ref, reactive } from 'vue'

import { getEventDetail, mergeStyle } from '../../utils'

const Range = defineComponent({
  name: 'Range',
  props: {
    customStyle: {
      type: [Object, String],
      default: ''
    },
    className: {
      type: [Object, String],
      default: ''
    },
    sliderStyle: {
      type: [String, Object],
      default: ''
    },
    railStyle: {
      type: String,
      default: ''
    },
    trackStyle: {
      type: String,
      default: ''
    },
    value: {
      type: Array,
      default: () => [0, 0]
    },
    blockSize: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onAfterChange: {
      type: Function,
      default: () => {
        /* */
      }
    }
  },
  emits: ['change'],
  setup(props) {
    const width = ref(0)
    const left = ref(0)
    const deltaValue = ref(props.max - props.min)
    const currentSlider = ref<'aX' | 'bX' | ''>('')
    const state = reactive({
      aX: 0,
      bX: 0
    })
    const rootCls = computed(() => {
      return classNames(
        'ob-range',
        {
          'ob-range--disabled': props.disabled
        },
        props.className
      )
    })
    const sliderCommonStyle = computed(() => {
      const { blockSize } = props
      return {
        width: blockSize ? `${blockSize}PX` : '',
        height: blockSize ? `${blockSize}PX` : '',
        marginLeft: blockSize ? `${-blockSize / 2}PX` : ''
      }
    })
    const sliderAStyle = computed(() => {
      return {
        ...sliderCommonStyle.value,
        left: `${state.aX}%`
      }
    })

    const sliderBStyle = computed(() => {
      return {
        ...sliderCommonStyle.value,
        left: `${state.bX}%`
      }
    })
    const containerStyle = computed(() => {
      const { blockSize } = props
      return {
        height: blockSize ? `${blockSize}PX` : ''
      }
    })
    const atTrackStyle = computed(() => {
      const { aX, bX } = state
      const smallerX = Math.min(aX, bX)
      const deltaX = Math.abs(aX - bX)
      return {
        left: `${smallerX}%`,
        width: `${deltaX}%`
      }
    })

    return {
      width,
      left,
      deltaValue,
      currentSlider,
      state,
      rootCls,
      sliderCommonStyle,
      sliderAStyle,
      sliderBStyle,
      containerStyle,
      atTrackStyle
    }
  },
  mounted() {
    const { value } = this
    this.updatePos()
    this.setValue(value)
  },

  methods: {
    handleClick(event: Event): void {
      /* istanbul ignore else */
      if (this.currentSlider && !this.disabled) {
        let sliderValue = 0
        const detail = getEventDetail(event)
        sliderValue = detail.x - this.left
        this.setSliderValue(this.currentSlider, sliderValue, 'onChange')
      }
    },

    handleTouchMove(sliderName: 'aX' | 'bX', event: TouchEvent): void {
      if (this.disabled) return
      event.stopPropagation()

      const clientX = event.touches[0].clientX
      this.setSliderValue(sliderName, clientX - this.left, 'onChange')
    },

    handleTouchEnd(sliderName: 'aX' | 'bX'): void {
      if (this.disabled) return
      this.currentSlider = sliderName
      this.triggerEvent('onAfterChange')
    },

    setSliderValue(sliderName: 'aX' | 'bX', targetValue: number, funcName: string): void {
      const distance = Math.min(Math.max(targetValue, 0), this.width)
      const sliderValue = Math.floor((distance / this.width) * 100)
      this.state[sliderName] = sliderValue
      /* istanbul ignore else */
      if (funcName) {
        this.triggerEvent(funcName)
      }
    },

    setValue(value: number[]): void {
      const aX = Math.round(((value[0] - this.min) / this.deltaValue) * 100) // fix issue #670
      const bX = Math.round(((value[1] - this.min) / this.deltaValue) * 100) // fix issue #670
      this.state.aX = aX
      this.state.bX = bX
    },

    triggerEvent(funcName: string): void {
      const { aX, bX } = this.state
      const a = Math.round((aX / 100) * this.deltaValue) + this.min
      const b = Math.round((bX / 100) * this.deltaValue) + this.min
      const result = [a, b].sort((x, y) => x - y)

      if (funcName === 'onChange') {
        this.$emit('change', result)
      } else {
        this.onAfterChange && this.onAfterChange(result)
      }
    },

    updatePos(): void {
      const rect = this.$el.querySelector('.ob-range__container')
      this.width = Math.round(+(rect as HTMLElement).offsetWidth)
      this.left = Math.round(+(rect as HTMLElement).offsetLeft)
    }
  },
  render() {
    const {
      rootCls,
      handleClick,
      handleTouchMove,
      handleTouchEnd,
      containerStyle,
      railStyle,
      atTrackStyle,
      sliderAStyle,
      sliderBStyle
    } = this
    const { customStyle, trackStyle, sliderStyle } = this.$props
    return (
      <div class={rootCls} style={customStyle} onClick={handleClick}>
        <div class="ob-range__container" style={containerStyle}>
          <div class="ob-range__rail" style={railStyle}></div>
          <div class="ob-range__track" style={mergeStyle(atTrackStyle, trackStyle)}></div>
          <div
            class="ob-range__slider"
            style={mergeStyle(sliderAStyle, sliderStyle)}
            onTouchmove={(e) => handleTouchMove('aX', e)}
            onTouchend={(e) => handleTouchEnd('aX', e)}></div>
          <div
            class="ob-range__slider"
            style={mergeStyle(sliderBStyle, sliderStyle)}
            onTouchmove={(e) => handleTouchMove('bX', e)}
            onTouchend={(e) => handleTouchEnd('bX', e)}></div>
        </div>
      </div>
    )
  }
})

export default Range
