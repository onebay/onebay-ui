import classNames from 'classnames'
import { ref, computed } from 'vue'

export default {
  name: 'AtAccordion',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    customStyle: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    note: {
      type: String,
      default: '',
    },
    icon: {
      type: Object,
      default: () => ({ value: '' }),
    },
    hasBorder: {
      type: Boolean,
      default: true,
    },
    isAnimation: {
      type: Boolean,
      default: true,
    },
    onClick: {
      type: Function,
      default: function () {
        return () => {}
      },
    },
  },
  setup (props: any) {
    const isCompleted = ref(true)
    let startOpen = ref(false)
    const wrapperHeight = ref(0)

    const contentStyle = computed(() => {
      const res = { height: `${wrapperHeight}px` }
      if (isCompleted) {
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
        'at-accordion__icon': true,
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
      this.startOpen = !!val && !!this.isAnimation
      this.toggleWithAnimation()
    },
  },
  methods: {
    classNames,
    /**
     *
     * @param {event} event
     */
    handleClick(event) {
      const { open } = this
      if (!this.isCompleted) return
      this.$emit('click', !open, event)
    },
    toggleWithAnimation() {
      const { open, isAnimation } = this
      if (!this.isCompleted || !isAnimation) return
      this.isCompleted = false
      const rect = this.$el.querySelectorAll('.at-accordion__body')
      let arr = rect || [{ height: '' }]
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
    },
  },
}
