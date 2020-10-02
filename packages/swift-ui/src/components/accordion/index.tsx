import classNames from 'classnames'
import { ref, computed, defineComponent } from 'vue'

type Icon = {
  prefixClass?: string
  value?: string
}
export interface AccordionProps {
  open?: boolean
  title?: string
  className?: string
  icon?: Icon
  note?: string
  hasBorder?: boolean
  isAnimation?: boolean
}

export default defineComponent({
  name: 'Accordion',
  props: {
    open: {
      type: Boolean,
      default: false
    },
    customStyle: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    note: {
      type: String,
      default: ''
    },
    icon: {
      type: Object,
      default: () => ({ value: '' })
    },
    hasBorder: {
      type: Boolean,
      default: true
    },
    isAnimation: {
      type: Boolean,
      default: true
    }
  },
  emits: ['click'],
  setup(props: AccordionProps) {
    const isCompleted = ref(true)
    const startOpen = ref(false)
    const wrapperHeight = ref(0)

    const contentStyle = computed(() => {
      const res = { height: `${wrapperHeight.value}px` }
      if (isCompleted.value) {
        res.height = ''
      }
      return res
    })

    const iconCls = computed(() => {
      const { icon } = props
      const prefixClass = (icon && icon.prefixClass) || 'at-icon'
      const iconCls = classNames({
        [prefixClass]: true,
        [`${prefixClass}-${icon && icon.value}`]: icon && icon.value,
        'at-accordion__icon': true
      })
      return iconCls
    })

    return {
      isCompleted,
      startOpen,
      wrapperHeight,
      contentStyle,
      iconCls
    }
  },
  watch: {
    open(val) {
      console.log('open :>> ', val)
      this.startOpen = !!val && !!this.isAnimation
      this.toggleWithAnimation()
    }
  },
  mounted() {
    this._el = this.$el
  },
  updated() {
    this._el = this.$el
  },
  methods: {
    classNames,
    handleClick(event): void {
      const { open } = this
      if (!this.isCompleted) return
      this.$emit('click', !open, event)
    },
    toggleWithAnimation(): void {
      const { open, isAnimation } = this
      if (!this.isCompleted || !isAnimation) return
      this.isCompleted = false
      const rect = this._el.querySelectorAll('.at-accordion__body')
      const arr = rect || [{ height: '' }]
      const height = parseInt(arr[0].style.height.toString())
      const startHeight = open ? 0 : height
      const endHeight = open ? height : 0
      this.startOpen = false
      this.wrapperHeight = startHeight
      setTimeout(() => {
        this.wrapperHeight = endHeight
      }, 100)
      setTimeout(() => {
        this.isCompleted = true
      }, 700)
    }
  },
  render(): JSX.Element {
    const { className, customStyle, hasBorder, icon, title, note, open } = this.$props
    const { iconCls, contentStyle, isCompleted, startOpen, $slots } = this
    return (
      <div class={classNames('at-accordion', className)} style={customStyle}>
        <div
          class={classNames('at-accordion__header', {
            'at-accordion__header--noborder': !hasBorder
          })}
          onClick={this.handleClick}>
          {icon && icon.value && (
            <div
              class={iconCls}
              style={{
                color: (icon && icon.color) || '',
                fontSize: (icon && `${icon.size}px`) || ''
              }}></div>
          )}
          <div class="at-accordion__info">
            <div class="at-accordion__info__title">{title}</div>
            <div class="at-accordion__info__note">{note}</div>
          </div>
          <div
            class={classNames('at-accordion__arrow', {
              'at-accordion__arrow--folded': !!open
            })}>
            <div class="at-icon at-icon-chevron-down" />
          </div>
        </div>
        <div
          style={contentStyle}
          class={classNames('at-accordion__content', {
            'at-accordion__content--inactive': (!open && isCompleted) || startOpen
          })}>
          <div class="at-accordion__body">{$slots.default && $slots.default()}</div>
        </div>
      </div>
    )
  }
})
