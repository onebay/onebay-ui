import { defineComponent, computed, ref, watch } from 'vue'
import classNames from 'classnames'
import { handleTouchScroll } from '../../utils'

export default defineComponent({
  name: 'FloatLayout',
  props: {
    title: {
      type: String,
      default: '',
    },
    isOpened: {
      type: Boolean,
      default: false,
    },
    scrollY: {
      type: Boolean,
      default: true,
    },
    scrollX: {
      type: Boolean,
      default: false,
    },
    scrollWithAnimation: {
      type: Boolean,
      default: false,
    },
    onClose: {
      type: Function,
      default: () => () => { },
    },
    onScroll: {
      type: Function,
      default: () => () => { },
    },
    onScrollToLower: {
      type: Function,
      default: () => () => { },
    },
    onScrollToUpper: {
      type: Function,
      default: () => () => { },
    },
    scrollTop: {
      type: Number,
      default: 0,
    },
    scrollLeft: {
      type: Number,
      default: 0,
    },
    upperThreshold: {
      type: Number,
      default: 0,
    },
    lowerThreshold: {
      type: Number,
      default: 0,
    },
    className: {
      type: [String, Array],
      default: '',
    },
  },
  setup(props) {
    const show = ref(props.isOpened)
    const rootClass = computed(() => {
      return classNames(
        'at-float-layout',
        {
          'at-float-layout--active': show.value,
        },
        props.className
      )
    })

    watch(() => props.isOpened, (val, oldVal) => {
      if (val !== oldVal) {
        handleTouchScroll(val)
      }
      if (val !== show.value) {
        show.value = val
      }
    })

    return {
      rootClass,
      show
    }
  },
  methods: {
    handleClose() {
      if (typeof this.onClose === 'function') {
        this.onClose()
      }
    },
    close() {
      this.show = false
      this.handleClose()
    },
    /**
     *
     * @param {event} e
     */
    handleTouchMove(e) {
      e.stopPropagation()
    },
  },
  render(): JSX.Element {
    const { title } = this.$props
    const { handleTouchMove, rootClass, close, $slots } = this
    return (
      <div class={rootClass} onTouchmove={handleTouchMove}>
        <div class="at-float-layout__overlay" onClick={close} />
        <div class="at-float-layout__container layout">
          {
            title &&
            <div class="layout-header">
              <div class="layout-header__title">
                {title}
              </div>
              <div class="layout-header__btn-close" onClick={close} />
            </div>
          }
          <div class="layout-body">
            <div
              class="layout-body__content"
            >
              {$slots.default && $slots.default()}
            </div>
          </div>
        </div>
      </ div>
    )
  }
})
