import { mergeStyle } from '../../utils'
import { computed, defineComponent, PropType } from 'vue'
import Badge from '../badge'
import classNames from 'classnames'

export interface TabListItem {
  title?: string
  iconType?: string
  dot?: string
  text?: string
  max?: number
  iconPrefixClass?: string
  selectedIconType?: string
  selectedImage?: string
  image?: string
}

export default defineComponent({
  name: 'TabBar',
  components: {
    Badge
  },
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
      type: Boolean,
      default: false
    },
    current: {
      type: Number,
      default: 0
    },
    iconSize: {
      type: [Number, String],
      default: ''
    },
    fontSize: {
      type: [Number, String],
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    selectedColor: {
      type: String,
      default: ''
    },
    tabList: {
      type: Array as PropType<TabListItem[]>,
      default: () => []
    },
    backgroundColor: {
      type: String,
      default: ''
    }
  },
  emits: ['click'],
  setup(props) {
    const rootCls = computed(() => {
      return classNames(
        {
          'at-tab-bar': true,
          'at-tab-bar--fixed': props.fixed
        },
        props.className
      )
    })
    const rootSty = computed(() => {
      const { backgroundColor } = props
      const rootStyle = {
        backgroundColor: backgroundColor || ''
      }
      return mergeStyle(rootStyle, props.customStyle)
    })
    const titleStyle = computed(() => {
      const { fontSize } = props
      return {
        fontSize: fontSize ? `${fontSize}px` : ''
      }
    })
    const imgStyle = computed(() => {
      const { iconSize } = props
      return {
        width: `${iconSize}px`,
        height: `${iconSize}px`
      }
    })
    const selectedStyle = computed(() => {
      return {
        color: props.selectedColor
      }
    })
    const defaultStyle = computed(() => {
      return {
        color: props.color
      }
    })
    return {
      rootCls,
      rootSty,
      titleStyle,
      imgStyle,
      selectedStyle,
      defaultStyle
    }
  },
  methods: {
    handleClick(index: number, event: Event) {
      this.$emit('click', index, event)
    }
  },
  render() {
    const {
      rootCls,
      rootSty,
      selectedStyle,
      defaultStyle,
      handleClick,
      imgStyle,
      titleStyle
    } = this
    const { tabList, current, iconSize, selectedColor, color } = this.$props
    return (
      <div class={rootCls} style={rootSty as string}>
        {tabList.map((item, i) => (
          <div
            key={item.title}
            class={classNames('at-tab-bar__item', {
              'at-tab-bar__item--active': current === i
            })}
            style={current === i ? selectedStyle : defaultStyle}
            onClick={(e) => handleClick(i, e)}>
            {item.iconType && (
              <Badge dot={!!item.dot} value={item.text} max-value={Number(item.max)}>
                <div class="at-tab-bar__icon">
                  <div
                    class={classNames(`${item.iconPrefixClass || 'at-icon'}`, {
                      [`${item.iconPrefixClass || 'at-icon'}-${item.selectedIconType}`]:
                        current === i && item.selectedIconType,
                      [`${item.iconPrefixClass || 'at-icon'}-${item.iconType}`]: !(
                        current === i && item.selectedIconType
                      )
                    })}
                    style={{
                      color: current === i ? selectedColor : color,
                      fontSize: iconSize ? `${iconSize}px` : ''
                    }}
                  />
                </div>
              </Badge>
            )}

            {item.image && (
              <Badge dot={!!item.dot} value={item.text} max-value={Number(item.max)}>
                <div class="at-tab-bar__icon">
                  <img
                    class={classNames('at-tab-bar__inner-img', {
                      'at-tab-bar__inner-img--inactive': current !== i
                    })}
                    src={item.selectedImage || item.image}
                    style={imgStyle}
                  />
                  <img
                    class={classNames('at-tab-bar__inner-img', {
                      'at-tab-bar__inner-img--inactive': current === i
                    })}
                    src={item.image}
                    style={imgStyle}
                  />
                </div>
              </Badge>
            )}

            <div>
              <Badge
                dot={item.iconType || item.image ? false : !!item.dot}
                value={item.iconType || item.image ? '' : item.text}
                max-value={item.iconType || item.image ? 0 : Number(item.max)}>
                <div class="at-tab-bar__title" style={titleStyle}>
                  {item.title}
                </div>
              </Badge>
            </div>
          </div>
        ))}
      </div>
    )
  }
})
