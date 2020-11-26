import classNames from 'classnames'
import { defineComponent, ref, computed, reactive } from 'vue'
import { isTest } from '../../utils'

export default defineComponent({
  name: 'Noticebar',
  props: {
    close: {
      type: Boolean,
      default: false
    },
    single: {
      type: Boolean,
      default: false
    },
    marquee: {
      type: Boolean,
      default: false
    },
    speed: {
      type: Number,
      default: 100
    },
    moreText: {
      type: String,
      default: 'see details'
    },
    showMore: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    customStyle: {
      type: [Object, String],
      default: ''
    },
    onGotoMore: {
      type: Function,
      default: () => {
        /* */
      }
    }
  },
  emits: ['close'],
  setup(props) {
    const animElemId = isTest()
      ? 'onebay-2020'
      : `onebay_${Math.ceil(Math.random() * 10e5).toString(36)}`
    const state = reactive({
      show: true,
      animElemId,
      animationData: [{}],
      dura: 15
    })
    const timeout = ref(0)
    const classObject = computed(() => {
      return {
        'ob-noticebar--marquee': props.marquee,
        'ob-noticebar--single': !props.marquee && props.single
      }
    })
    const iconClass = computed(() => {
      const iconClass = ['ob-icon']
      if (props.icon) iconClass.push(`ob-icon-${props.icon}`)
      return iconClass
    })
    const innerClassName = computed(() => {
      const innerClassName = ['ob-noticebar__content-inner']
      if (props.marquee) {
        innerClassName.push(animElemId)
      }
      return innerClassName
    })
    const style = computed(() => {
      const result: { 'animation-duration'?: string } = {}
      if (props.marquee) {
        result['animation-duration'] = `${state.dura}s`
      }
      return result
    })
    return {
      classObject,
      iconClass,
      innerClassName,
      style,
      timeout,
      state
    }
  },
  mounted() {
    if (!this.marquee) return
    this.initAnimation()
  },
  methods: {
    classNames,
    handleClose(event: Event) {
      this.state.show = false
      this.$emit('close', event)
    },
    handleGotoMore(event: unknown) {
      this.onGotoMore && this.onGotoMore(event)
    },
    initAnimation() {
      this.timeout = window.setTimeout(() => {
        this.timeout = 0
        const elem = this.$el.querySelector(`.${this.state.animElemId}`)
        /* istanbul ignore else */
        if (elem) {
          const width = elem.getBoundingClientRect().width
          const dura = width / +this.$props.speed
          this.state.dura = dura
        }
      }, 100)
    }
  },
  render(): JSX.Element {
    const { show } = this.state
    const {
      classObject,
      handleClose,
      iconClass,
      innerClassName,
      style,
      handleGotoMore,
      $slots
    } = this
    const { icon, showMore, moreText, close, customStyle, className } = this.$props
    if (!show) {
      return <></>
    }
    return (
      <div class={classNames('ob-noticebar', classObject, className)} style={customStyle}>
        {close && (
          <div class="ob-noticebar__close" onClick={handleClose}>
            <div class="ob-icon ob-icon-close" />
          </div>
        )}
        <div class="ob-noticebar__content">
          {icon && (
            <div class="ob-noticebar__content-icon">
              <div class={classNames(iconClass)} />
            </div>
          )}
          <div class="ob-noticebar__content-text">
            <div class={classNames(innerClassName)} style={style as string}>
              {$slots.default && $slots.default()}
            </div>
          </div>
          {showMore && (
            <div class="ob-noticebar__more" onClick={handleGotoMore}>
              <div class="text">{moreText}</div>
            </div>
          )}
          <div class="ob-noticebar__more-icon">
            <div class="ob-icon ob-icon-chevron-right" />
          </div>
        </div>
      </div>
    )
  }
})
