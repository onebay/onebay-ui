import { defineComponent, computed } from 'vue'
import classNames from 'classnames'
import useScrollTop from '../../hooks/useScrollTop'

const prefixCls = 'cr-back-top'

export default defineComponent({
  name: 'BackTop',
  props: {
    className: {
      type: String,
      default: ''
    },
    distance: {
      type: Number,
      default: 100
    }
  },
  emits: ['click'],
  setup(props, { slots, emit }) {
    const scrollTop = useScrollTop()
    const show = computed(() => scrollTop.value > props.distance)

    const backTop = (e: MouseEvent) => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      emit('click', e)
    }

    return () => {
      const wrapperCls = classNames(prefixCls, props.className, {
        [`${prefixCls}__hide`]: !show.value
      })
      return (
        <div {...props} class={wrapperCls} onClick={backTop}>
          {slots.default?.() || 'top'}
        </div>
      )
    }
  }
})
