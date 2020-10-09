import classNames from 'classnames'
import { defineComponent, computed } from 'vue'

const Rate = defineComponent({
  name: 'Rate',
  props: {
    customStyle: {
      type: [Object, String],
      default: ''
    },
    className: {
      type: [Object, String],
      default: ''
    },
    size: {
      type: [Number, String],
      default: 0
    },
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 5
    },
    margin: {
      type: Number,
      default: 5
    }
  },
  emits: ['change'],
  setup(props) {
    const rootCls = computed(() => classNames('at-rate', props.className))
    const iconStyle = computed(() => {
      return {
        marginRight: props.margin
      }
    })
    const starIconStyle = computed(() => {
      const { size } = props
      return {
        fontSize: size ? `${size}px` : ''
      }
    })
    const classNameArr = computed(() => {
      const { value, max } = props
      const arr: string[] = []
      const floorValue = Math.floor(value)
      const ceilValue = Math.ceil(value)
      for (let i = 0; i < max; i++) {
        if (floorValue > i) {
          arr.push('at-rate__icon at-rate__icon--on')
        } else if (ceilValue - 1 === i) {
          arr.push('at-rate__icon at-rate__icon--half')
        } else {
          arr.push('at-rate__icon at-rate__icon--off')
        }
      }
      return arr
    })
    return {
      rootCls,
      iconStyle,
      starIconStyle,
      classNameArr
    }
  },
  methods: {
    handleClick(event: Event, index: number) {
      this.$emit('change', event, index)
    }
  },
  render() {
    const { customStyle } = this.$props
    const { rootCls, handleClick, starIconStyle, classNameArr, iconStyle } = this
    return (
      <div class={rootCls} style={customStyle}>
        {classNameArr.map((cls: unknown, i: number) => (
          <div
            class={cls}
            key={`at-rate-star-${i}`}
            style={iconStyle}
            onClick={(e) => handleClick(e, i)}>
            <div class="at-icon at-icon-star-2" style={starIconStyle}></div>
            <div class="at-rate__left">
              <div class="at-icon at-icon-star-2" style={starIconStyle}></div>
            </div>
          </div>
        ))}
      </div>
    )
  }
})

export default Rate
