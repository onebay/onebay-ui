import classNames from 'classnames'
import { defineComponent, PropType, ref } from 'vue'
import PickerGroup from './picker-group'
import {
  hoursRange,
  minutesRange,
  compareTime,
  verifyValue,
  verifyTime,
  verifyDate,
  getYearRange,
  getMonthRange,
  getDayRange,
  formatValue
} from './utils'
import { TOP, LINE_HEIGHT } from './constant'
import './index.scss'

export type Mode = 'selector' | 'multiSelector' | 'time' | 'date'
export type Fields = 'day' | 'month' | 'year'
export type PickerValue = number | number[] | string

export interface PickerDate {
  _value: Date
  _start: Date
  _end: Date
  _updateValue: [number, number, number]
}

const Picker = defineComponent({
  name: 'Picker',
  components: {
    PickerGroup
  },
  props: {
    mode: {
      type: String as PropType<Mode>,
      default: 'selector'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    range: {
      type: Array,
      default: () => []
    },
    value: {
      type: [Number, String, Array],
      default: ''
    },
    start: {
      type: String,
      default: ''
    },
    end: {
      type: String,
      default: ''
    },
    fields: {
      type: String as PropType<Fields>,
      default: 'day'
    },
    name: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: 'Cancel'
    },
    okText: {
      type: String,
      default: 'Ok'
    },
    rangeKey: {
      type: String,
      default: ''
    }
  },
  emits: ['change', 'columnchange', 'cancel'],
  setup() {
    const pickerValue = ref<PickerValue>([])
    const height = ref<number[]>([])
    const hidden = ref(true)
    const fadeOut = ref(false)
    const index = ref<unknown>('')
    const pickerDate = ref<PickerDate>({
      _value: new Date(),
      _start: new Date(),
      _end: new Date(),
      _updateValue: [0, 0, 0]
    })
    return {
      pickerValue,
      height,
      hidden,
      fadeOut,
      index,
      pickerDate
    }
  },
  watch: {
    mode() {
      this.handleProps()
    },
    value() {
      this.handleProps()
    },
    range() {
      this.handleProps()
    },
    start() {
      this.handleProps()
    },
    end() {
      this.handleProps()
    }
  },
  created() {
    this.handleProps()
  },
  methods: {
    handleProps() {
      const { mode, start, end } = this

      if (mode === 'selector') {
        const value = this.value as number
        this.index = [verifyValue(value, this.range) ? Math.floor(value) : 0]
      } else if (mode === 'multiSelector') {
        const value = this.value as number[]
        this.index = []
        this.range.forEach((range, index) => {
          const val = value?.[index]
          const item = verifyValue(val, range as unknown[]) ? Math.floor(val) : 0
          this.index.push(item)
        })
      } else if (mode === 'time') {
        let value = this.value as string
        // check value...
        /* istanbul ignore else */
        if (!verifyTime(value)) {
          console.warn('time picker value illegal')
          value = '0:0'
        }

        const time = value.split(':').map((n) => +n)
        this.index = time
      } else if (mode === 'date') {
        const value = this.value as string

        const _value = verifyDate(value) || new Date(new Date().setHours(0, 0, 0, 0))
        const _start = verifyDate(start) || new Date('1970/01/01')
        const _end = verifyDate(end) || new Date('2999/01/01')

        // Time interval validity
        if (_value >= _start && _value <= _end) {
          const currentYear = (_value as Date).getFullYear()
          const currentMonth = (_value as Date).getMonth() + 1
          const currentDay = (_value as Date).getDate()
          const yearRange = getYearRange(
            (_start as Date).getFullYear(),
            (_end as Date).getFullYear()
          )
          const monthRange = getMonthRange(_start as Date, _end as Date, currentYear)
          const dayRange = getDayRange(_start as Date, _end as Date, currentYear, currentMonth)

          this.index = [
            yearRange.indexOf(currentYear),
            monthRange.indexOf(currentMonth),
            dayRange.indexOf(currentDay)
          ]
          if (
            !this.pickerDate ||
            this.pickerDate._value.getTime() !== (_value as Date).getTime() ||
            this.pickerDate._start.getTime() !== (_start as Date).getTime() ||
            this.pickerDate._end.getTime() !== (_end as Date).getTime()
          ) {
            this.pickerDate = {
              _value,
              _start,
              _end,
              _updateValue: [currentYear, currentMonth, currentDay]
            }
          }
        } else {
          throw new Error('Date Interval Error')
        }
      }

      // Prop change, update height value
      this.height = this.getHeightByIndex()

      // Synchronized form value, used for form submit
      this.pickerValue = this.value
      if (mode === 'date') {
        const val = this.pickerValue as string
        if (this.fields === 'month') {
          this.pickerValue = val.split('-').slice(0, 2).join('-')
        } else if (this.fields === 'year') {
          this.pickerValue = val.split('-')[0]
        }
      }
    },
    showPicker() {
      if (this.disabled) return

      this.height = this.getHeightByIndex()
      this.hidden = false
    },
    getHeightByIndex() {
      const height = this.index.map((i) => {
        let factor = 0
        if (this.mode === 'time') {
          factor = LINE_HEIGHT * 4
        }
        return TOP - LINE_HEIGHT * i - factor
      })
      return height
    },

    hidePicker() {
      this.fadeOut = true
      setTimeout(() => {
        this.hidden = true
        this.fadeOut = false
      }, 350)
    },

    // click Ok button
    handleChange() {
      this.hidePicker()

      this.index = this.height.map((h) => (TOP - h) / LINE_HEIGHT)

      let value: PickerValue =
        this.index.length && this.mode !== 'selector' ? this.index : this.index[0]

      if (this.mode === 'time') {
        const range = [hoursRange.slice(), minutesRange.slice()]

        const timeArr = this.index.map((n, i) => range[i][n])

        this.index = timeArr.map((item) => parseInt(item))
        value = timeArr.join(':')
      }

      if (this.mode === 'date') {
        const { _start, _end, _updateValue } = this.pickerDate
        const currentYear = _updateValue[0]
        const currentMonth = _updateValue[1]
        const yearRange = getYearRange(_start.getFullYear(), _end.getFullYear())
        const monthRange = getMonthRange(_start, _end, currentYear)
        const dayRange = getDayRange(_start, _end, currentYear, currentMonth)

        const year = yearRange[this.index[0]]
        const month = monthRange[this.index[1]]
        const day = dayRange[this.index[2]]

        if (this.fields === 'year') {
          value = [year]
        } else if (this.fields === 'month') {
          value = [year, month]
        } else {
          value = [year, month, day]
        }
        value = value
          .map((item) => {
            return item < 10 ? `0${item}` : item
          })
          .join('-')
      }

      this.pickerValue = value
      this.$emit('change', value)
    },

    // click cancel button or mask
    handleCancel() {
      this.hidePicker()
      this.$emit('cancel')
    },

    updateHeight(height: number, columnId: string, needRevise = false) {
      const temp = [...this.height]
      temp[+columnId] = height
      this.height = temp

      // time picker should have valid value, revise value on touchend event
      if (needRevise) {
        let { start, end } = this.$props
        /* istanbul ignore else */
        if (!verifyTime(start)) start = '00:00'
        /* istanbul ignore else */
        if (!verifyTime(end)) end = '23:59'
        if (!compareTime(start, end)) return

        const range = [hoursRange.slice(), minutesRange.slice()]

        const timeList = this.height.map((h) => (TOP - h) / LINE_HEIGHT)
        const timeStr = timeList.map((n, i) => range[i][n]).join(':')

        if (!compareTime(start, timeStr)) {
          // fix to start
          const height = start.split(':').map((i) => TOP - LINE_HEIGHT * (+i + 4))
          requestAnimationFrame(() => (this.height = height))
        } else if (!compareTime(timeStr, end)) {
          // fix to end
          const height = end.split(':').map((i) => TOP - LINE_HEIGHT * (+i + 4))
          requestAnimationFrame(() => (this.height = height))
        }
      }
    },

    handleColumnChange(height: number, columnId: string) {
      this.$emit('columnchange', {
        column: Number(columnId),
        value: (TOP - height) / LINE_HEIGHT
      })
    },

    updateDay(value: number, fields: number) {
      const { _start, _end, _updateValue } = this.pickerDate

      _updateValue[fields] = value

      const currentYear = _updateValue[0]
      const currentMonth = _updateValue[1]
      const currentDay = _updateValue[2]

      // Rolling year
      if (fields === 0) {
        const monthRange = getMonthRange(_start, _end, currentYear)
        const max = monthRange[monthRange.length - 1]
        const min = monthRange[0]

        if (currentMonth > max) _updateValue[1] = max
        if (currentMonth < min) _updateValue[1] = min
        const index = monthRange.indexOf(_updateValue[1])
        const height = TOP - LINE_HEIGHT * index

        this.updateDay(_updateValue[1], 1)
        this.updateHeight(height, '1')
      } else if (fields === 1) {
        const dayRange = getDayRange(_start, _end, currentYear, currentMonth)
        const max = dayRange[dayRange.length - 1]
        const min = dayRange[0]

        if (currentDay > max) _updateValue[2] = max
        if (currentDay < min) _updateValue[2] = min
        const index = dayRange.indexOf(_updateValue[2])
        const height = TOP - LINE_HEIGHT * index

        this.updateDay(_updateValue[2], 2)
        this.updateHeight(height, '2')
      }
    },

    // Single column Picker
    getSelector() {
      return (
        <PickerGroup
          range={this.range}
          rangeKey={this.rangeKey}
          height={this.height[0]}
          updateHeight={this.updateHeight}
          columnId="0"
        />
      )
    },

    // Multiple column Picker
    getMultiSelector() {
      return this.range.map((range, index) => {
        return (
          <PickerGroup
            range={range}
            rangeKey={this.rangeKey}
            height={this.height[index]}
            updateHeight={this.updateHeight}
            onColumnChange={this.handleColumnChange}
            columnId={String(index)}
          />
        )
      })
    },

    // Time Picker
    getTimeSelector() {
      const hourRange = hoursRange.slice()
      const minRange = minutesRange.slice()
      return [
        <PickerGroup
          mode="time"
          range={hourRange}
          height={this.height[0]}
          updateHeight={this.updateHeight}
          columnId="0"
        />,
        <PickerGroup
          mode="time"
          range={minRange}
          height={this.height[1]}
          updateHeight={this.updateHeight}
          columnId="1"
        />
      ]
    },

    // Date Picker
    getDateSelector() {
      const { fields, height } = this
      const { _start, _end, _updateValue } = this.pickerDate
      const currentYear = _updateValue[0]
      const currentMonth = _updateValue[1]

      const yearRange = getYearRange(_start.getFullYear(), _end.getFullYear()).map(
        (item) => `${item}年`
      )
      const monthRange = getMonthRange(_start, _end, currentYear).map(
        (item) => `${item < 10 ? `0${item}` : item}月`
      )
      const dayRange = getDayRange(_start, _end, currentYear, currentMonth).map(
        (item) => `${item < 10 ? `0${item}` : item}日`
      )

      const renderView = [
        <PickerGroup
          mode="date"
          range={yearRange}
          height={height[0]}
          updateDay={this.updateDay}
          updateHeight={this.updateHeight}
          columnId="0"
        />
      ]
      if (fields === 'month' || fields === 'day') {
        renderView.push(
          <PickerGroup
            mode="date"
            range={monthRange}
            height={height[1]}
            updateDay={this.updateDay}
            updateHeight={this.updateHeight}
            columnId="1"
          />
        )
      }
      if (fields === 'day') {
        renderView.push(
          <PickerGroup
            mode="date"
            range={dayRange}
            height={height[2]}
            updateDay={this.updateDay}
            updateHeight={this.updateHeight}
            columnId="2"
          />
        )
      }

      return renderView
    }
  },
  render(): JSX.Element {
    const { name, mode, cancelText, okText } = this.$props
    const { fadeOut, hidden, $slots } = this

    let pickerGroup
    switch (mode) {
      case 'multiSelector':
        pickerGroup = this.getMultiSelector()
        break
      case 'time':
        pickerGroup = this.getTimeSelector()
        break
      case 'date':
        pickerGroup = this.getDateSelector()
        break
      default:
        pickerGroup = this.getSelector()
    }

    const clsMask = classNames('ob-mask', 'ob-animate-fade-in', {
      'ob-animate-fade-out': fadeOut
    })
    const clsSlider = classNames('ob-picker', 'ob-animate-slide-up', {
      'ob-animate-slide-down': fadeOut
    })
    const shouldDivHidden = hidden ? { display: 'none' } : {}
    return (
      <div>
        <div onClick={this.showPicker} class="picker-inner">
          {$slots.default && $slots.default()}
        </div>
        <div style={shouldDivHidden} class={clsMask} onClick={this.handleCancel} />
        <div style={shouldDivHidden} class={clsSlider}>
          <div class="ob-picker__hd">
            <div class="ob-picker__action" onClick={this.handleCancel}>
              {cancelText}
            </div>
            <div class="ob-picker__action" onClick={this.handleChange}>
              {okText}
            </div>
          </div>
          <div class="ob-picker__bd">{pickerGroup}</div>
          <input type="hidden" name={name} value={formatValue(this.pickerValue)} />
        </div>
      </div>
    )
  }
})

export default Picker
