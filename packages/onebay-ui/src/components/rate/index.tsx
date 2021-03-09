import classNames from 'classnames'
import { defineComponent, computed } from 'vue'

const Rate = defineComponent({
  name: 'Rate',
  props: {
    style: {
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
    },
    // eslint-disable-next-line vue/require-default-prop
    onChange: { type: Function }
  },
  emits: ['change'],
  setup(props) {
    const rootCls = computed(() => classNames('ob-rate', props.className))
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
          arr.push('ob-rate__icon ob-rate__icon--on')
        } else if (ceilValue - 1 === i) {
          arr.push('ob-rate__icon ob-rate__icon--half')
        } else {
          arr.push('ob-rate__icon ob-rate__icon--off')
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
    handleClick(index: number, event: Event) {
      this.$emit('change', index, event)
    }
  },
  render() {
    const { style } = this.$props
    const { rootCls, handleClick, starIconStyle, classNameArr, iconStyle } = this
    return (
      <div class={rootCls} style={style}>
        {classNameArr.map((cls: unknown, i: number) => (
          <div
            class={cls}
            key={`ob-rate-star-${i}`}
            style={iconStyle}
            onClick={(e) => handleClick(i + 1, e)}>
            <div class="ob-icon ob-icon-star-2" style={starIconStyle}></div>
            <div class="ob-rate__left">
              <div class="ob-icon ob-icon-star-2" style={starIconStyle}></div>
            </div>
          </div>
        ))}
      </div>
    )
  }
})

export default Rate
