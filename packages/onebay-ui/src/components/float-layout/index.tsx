import { defineComponent, computed, ref, watch } from 'vue'
import classNames from 'classnames'
import { handleTouchScroll } from '../../utils'

export default defineComponent({
  name: 'FloatLayout',
  props: {
    title: {
      type: String,
      default: ''
    },
    isOpened: {
      type: Boolean,
      default: false
    },
    scrollY: {
      type: Boolean,
      default: true
    },
    scrollX: {
      type: Boolean,
      default: false
    },
    scrollWithAnimation: {
      type: Boolean,
      default: false
    },
    scrollTop: {
      type: Number,
      default: 0
    },
    scrollLeft: {
      type: Number,
      default: 0
    },
    upperThreshold: {
      type: Number,
      default: 0
    },
    lowerThreshold: {
      type: Number,
      default: 0
    },
    className: {
      type: [String, Array],
      default: ''
    },
    // eslint-disable-next-line vue/require-default-prop
    onClose: { type: Function },
    // eslint-disable-next-line vue/require-default-prop
    onScrollToLower: { type: Function },
    // eslint-disable-next-line vue/require-default-prop
    onScrollToUpper: { type: Function },
    // eslint-disable-next-line vue/require-default-prop
    onScroll: { type: Function }
  },
  emits: ['close'],
  setup(props) {
    const show = ref(props.isOpened)
    const rootClass = computed(() => {
      return classNames(
        'ob-float-layout',
        {
          'ob-float-layout--active': show.value
        },
        props.className
      )
    })

    watch(
      () => props.isOpened,
      (val, oldVal) => {
        /* istanbul ignore else */
        if (val !== oldVal) {
          handleTouchScroll(val)
        }
        /* istanbul ignore else */
        if (val !== show.value) {
          show.value = val
        }
      }
    )

    return {
      rootClass,
      show
    }
  },
  methods: {
    close() {
      this.show = false
      this.$emit('close')
    },
    handleTouchMove(e: TouchEvent) {
      e.stopPropagation()
    }
  },
  render(): JSX.Element {
    const { title } = this.$props
    const { handleTouchMove, rootClass, close, $slots } = this
    return (
      <div class={rootClass} onTouchmove={handleTouchMove}>
        <div class="ob-float-layout__overlay" onClick={close} />
        <div class="ob-float-layout__container layout">
          {title && (
            <div class="layout-header">
              <div class="layout-header__title">{title}</div>
              <div class="layout-header__btn-close" onClick={close} />
            </div>
          )}
          <div class="layout-body">
            <div class="layout-body__content">{$slots.default && $slots.default()}</div>
          </div>
        </div>
      </div>
    )
  }
})
