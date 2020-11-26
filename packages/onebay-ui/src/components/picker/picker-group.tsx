import { defineComponent, PropType, ref } from 'vue'
import { TOP, LINE_HEIGHT, MASK_HEIGHT } from './constant'

type UpdateHeight = (height: number, columnId: string, needRevise?: boolean) => void
type OnColumnChange = (height: number, columnId: string) => void
type UpdateDay = (value: number, fields: number) => void

const pickerGroupProps = {
  mode: {
    type: String,
    default: ''
  },
  range: {
    type: Array,
    default: []
  },
  rangeKey: {
    type: String,
    default: ''
  },
  height: {
    type: Number,
    default: 90
  },
  columnId: {
    type: String,
    default: ''
  },
  updateHeight: {
    type: Function as PropType<UpdateHeight>,
    default: () => {
      /* */
    }
  },
  onColumnChange: {
    type: Function as PropType<OnColumnChange>,
    default: () => {
      /* */
    }
  },
  updateDay: {
    type: Function as PropType<UpdateDay>,
    require: true
  }
}

const PickerGroup = defineComponent({
  name: 'PickerGroup',
  props: pickerGroupProps,
  setup() {
    const startY = ref(0)
    const preY = ref(0)
    const hadMove = ref(false)
    const touchEnd = ref(false)
    return {
      startY,
      preY,
      hadMove,
      touchEnd
    }
  },
  methods: {
    getPosition() {
      const transition = this.touchEnd ? 0.3 : 0
      const transformValue = `translate3d(0, ${this.$props.height}px, 0)`
      const transitionValue = `transform ${transition}s`
      return {
        transform: transformValue,
        '-webkit-transform': transformValue,
        transition: transitionValue,
        '-webkit-transition': transitionValue
      }
    },

    formulaUnlimitedScroll(range: number, absoluteHeight: number, direction: 'up' | 'down') {
      const { height, updateHeight, columnId } = this.$props
      const factor = direction === 'up' ? 1 : -1

      this.touchEnd = false

      // Click to exceed the range, when you click to the complement frame
      // first jump to the other end of the complement frame
      updateHeight(-range * factor * LINE_HEIGHT + height, columnId)

      // Then do the transition animation
      requestAnimationFrame(() => {
        this.touchEnd = true
        const index = Math.round(absoluteHeight / -LINE_HEIGHT) + range * factor
        const relativeHeight = TOP - LINE_HEIGHT * index
        updateHeight(relativeHeight, columnId, true)
      })
    },
    onTouchStart(e: TouchEvent) {
      // Record the location of the first click
      this.startY = e.changedTouches[0].clientY
      this.preY = e.changedTouches[0].clientY
      this.hadMove = false
    },
    onTouchMove(e: TouchEvent) {
      e.preventDefault()

      const y = e.changedTouches[0].clientY
      const deltaY = y - this.preY
      const { columnId, height, mode } = this.$props
      this.preY = y
      this.touchEnd = false

      if (Math.abs(y - this.startY) > 10) this.hadMove = true

      let newPos = height + deltaY
      // Infinite scrolling of processing time selector
      /* istanbul ignore else */
      if (mode === 'time') {
        /* istanbul ignore else */
        if (columnId === '0') {
          // The number 28 comes from 4 grids + 24 grids from 0 to 23, a total of 28 grids
          if (newPos > TOP - LINE_HEIGHT * 3) {
            newPos = TOP - LINE_HEIGHT * 27 + deltaY
          }
          if (newPos < TOP - LINE_HEIGHT * 28) {
            newPos = TOP - LINE_HEIGHT * 4 + deltaY
          }
        }
        /* istanbul ignore else */
        if (columnId === '1') {
          if (newPos > TOP - LINE_HEIGHT * 3) {
            newPos = TOP - LINE_HEIGHT * 63 + deltaY
          }
          if (newPos < TOP - LINE_HEIGHT * 64) {
            newPos = TOP - LINE_HEIGHT * 4 + deltaY
          }
        }
      }

      this.updateHeight(newPos, this.columnId)
    },
    onTouchEnd(e: TouchEvent) {
      const { mode, range, height, updateHeight, onColumnChange, columnId } = this.$props
      const max = 0
      const min = -LINE_HEIGHT * (range.length - 1)
      const endY = e.changedTouches[0].clientY

      this.touchEnd = true

      // The height of touchEnd may have a decimal point and need to be processed
      let absoluteHeight: number

      if (!this.hadMove) {
        const windowHeight = window.innerHeight
        // picker__mask The vertical height from the top of the screen
        const relativeY = windowHeight - MASK_HEIGHT / 2

        absoluteHeight = height - TOP - (endY - relativeY)
        // Infinite scrolling of processing time selector
        /* istanbul ignore else */
        if (mode === 'time') {
          /* istanbul ignore else */
          if (columnId === '0') {
            // Click overflow
            // `absoluteHeight` is calculated relative to the midpoint of the module
            // so it will be more than half a line, then this half line needs to be subtracted, which is 2.5 lines
            if (absoluteHeight > -LINE_HEIGHT * 2.5) {
              return this.formulaUnlimitedScroll(24, absoluteHeight, 'up')
            }
            // Click underflow
            /* istanbul ignore else */
            if (absoluteHeight < -LINE_HEIGHT * 28.5) {
              return this.formulaUnlimitedScroll(24, absoluteHeight, 'down')
            }
          }
          /* istanbul ignore else */
          if (columnId === '1') {
            // Click overflow
            if (absoluteHeight > -LINE_HEIGHT * 2.5) {
              return this.formulaUnlimitedScroll(60, absoluteHeight, 'up')
            }
            // Click underflow
            /* istanbul ignore else */
            if (absoluteHeight < -LINE_HEIGHT * 64.5) {
              return this.formulaUnlimitedScroll(60, absoluteHeight, 'down')
            }
          }
        }
      } else {
        /** scroll */
        absoluteHeight = height - TOP
      }

      // Border case handling
      if (absoluteHeight > max) absoluteHeight = 0
      if (absoluteHeight < min) absoluteHeight = min

      // First calculate the index according to the formula
      // and then use this index to calculate an integer height
      const index = Math.round(absoluteHeight / -LINE_HEIGHT)
      const relativeHeight = TOP - LINE_HEIGHT * index

      if (this.$props.mode === 'date') {
        /* istanbul ignore else */
        if (this.$props.columnId === '0') {
          this.$props.updateDay(+this.$props.range[index]?.replace(/[^0-9]/gi, ''), 0)
        }
        /* istanbul ignore else */
        if (this.$props.columnId === '1') {
          this.$props.updateDay(+this.$props.range[index]?.replace(/[^0-9]/gi, ''), 1)
        }
        /* istanbul ignore else */
        if (this.$props.columnId === '2') {
          this.$props.updateDay(+this.$props.range[index]?.replace(/[^0-9]/gi, ''), 2)
        }
      }

      updateHeight(relativeHeight, columnId, mode === 'time')
      onColumnChange && onColumnChange(relativeHeight, columnId)
    }
  },
  render() {
    const { range, rangeKey } = this.$props
    const { onTouchStart, onTouchMove, onTouchEnd, getPosition } = this
    const pickerItem = range.map((item) => {
      const content = rangeKey ? item[rangeKey] : item
      return <div class="ob-picker__item">{content}</div>
    })

    return (
      <div
        class="ob-picker__group"
        onTouchstart={onTouchStart}
        onTouchmove={onTouchMove}
        onTouchend={onTouchEnd}>
        <div class="ob-picker__mask" />
        <div class="ob-picker__indicator" />
        <div class="ob-picker__content" style={getPosition()}>
          {pickerItem}
        </div>
      </div>
    )
  }
})

export default PickerGroup
