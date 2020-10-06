import { defineComponent, computed, PropType } from 'vue'
import classNames from 'classnames'

export interface NavBarProps {
  fixed?: boolean
  border?: boolean
  color?: string
  title?: string
  customStyle?: string | unknown
  onClickLeftIcon?: () => void
  /* eslint-disable */
  className?: any
  leftContent?: any
  rightContent?: any
  /* eslint-disable */
}

export default defineComponent({
  name: 'NavBar',
  props: {
    customStyle: {
      type: [Object, String],
      default: ''
    },
    className: {
      type: [Array, String],
      default: ''
    },
    fixed: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    border: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    color: {
      type: String as PropType<string>,
      default: ''
    },
    title: {
      type: String as PropType<string>,
      default: ''
    },
    onClickLeftIcon: {
      type: Function as PropType<() => void>,
      default: function () {
        return () => { }
      }
    },
    leftContent: {
      type: [String, Object],
      default: ''
    },
    rightContent: {
      type: [String, Object],
      default: ''
    }
  },
  setup(props: NavBarProps) {
    const linkStyle = computed(() => {
      return { color: props.color }
    })
    const rootCls = computed(() => {
      const { fixed, border, className } = props
      return classNames(
        {
          'at-nav-bar': true,
          'at-nav-bar--fixed': fixed,
          'at-nav-bar--no-border': !border
        },
        className
      )
    })
    return {
      linkStyle,
      rootCls
    }
  },
  methods: {
    handleClickLeftView() {
      this.$props.onClickLeftIcon && this.onClickLeftIcon()
    }
  },
  render(): JSX.Element {
    const { $slots, linkStyle, rootCls, handleClickLeftView } = this

    const { customStyle, title, leftContent, rightContent } = this.$props
    return (
      <div class={rootCls} style={customStyle}>
        <div class="at-nav-bar__left-view" style={linkStyle} onClick={handleClickLeftView}>
          {leftContent || ($slots.left && $slots.left())}
        </div>
        <div class="at-nav-bar__title">{title || ($slots.default && $slots.default())}</div>
        <div class="at-nav-bar__right-view">{rightContent || ($slots.right && $slots.right())}</div>
      </div>
    )
  }
})
