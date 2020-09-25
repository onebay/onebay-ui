import classNames from 'classnames'
import { computed, defineComponent } from 'vue'
import { mergeStyle } from '../../../utils'
export interface IconInfo {
  prefixClass?: string
  value?: string
  className?: string | string[]
}
export interface ListItemProps {
  note?: string
  thumb?: string
  disabled?: boolean
  hasBorder?: boolean
  className?: string | string[]
  iconInfo?: IconInfo
  arrow?: string
  extraText?: string
  extraThumb?: string
  title?: string
  click?: () => void
}
export default defineComponent({
  name: 'ListItem',
  props: {
    className: {
      type: [Array, String],
      default: ''
    },
    note: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    thumb: {
      type: String,
      default: ''
    },
    hasBorder: {
      type: Boolean,
      default: true
    },
    extraText: {
      type: String,
      default: ''
    },
    extraThumb: {
      type: String,
      default: ''
    },
    iconInfo: {
      type: Object,
      default: function (): IconInfo {
        return { value: '' }
      }
    },
    arrow: {
      type: String,
      default: '',
      validator: (val: string): boolean => ['up', 'down', 'right', ''].includes(val)
    },
    click: {
      type: Function
    }
  },
  emits: ['click', 'click1'],
  setup(props, { emit }) {
    const rootClass = computed(() => {
      const { note, thumb, disabled, hasBorder, className } = props as ListItemProps
      return classNames(
        'at-list__item',
        {
          'at-list__item--thumb': thumb,
          'at-list__item--multiple': note,
          'at-list__item--disabled': disabled,
          'at-list__item--no-border': !hasBorder
        },
        className
      )
    })
    const iconClass = computed(() => {
      const { iconInfo } = props as ListItemProps
      return classNames(
        iconInfo.prefixClass || 'at-icon',
        {
          [`${iconInfo.prefixClass || 'at-icon'}-${iconInfo.value}`]: iconInfo.value
        },
        iconInfo.className
      )
    })
    const onClick = (e) => {
      emit('click', e)
      console.log('emit', e);
    }
    return {
      rootClass,
      iconClass,
      onClick
    }
  },
  methods: {
    handleClick(event: Event): void {
      this.$emit('click', event)
      const { onClick } = this.$props
      console.log(' this.$props :>> ',  this.$props);
      onClick && onClick()
    },
    getIconStyle(): unknown {
      const { iconInfo } = this
      return mergeStyle(
        {
          color: iconInfo.color || '',
          fontSize: `${iconInfo.size || 24}px`
        },
        iconInfo.customStyle
      )
    }
  },
  render(): JSX.Element {
    const { thumb, iconInfo, extraThumb, extraText, arrow, note, title } = this.$props
    const { handleClick, iconClass, rootClass, getIconStyle, onClick } = this
    return (
      <div class={rootClass} onClick={onClick}>
        <div class="at-list__item-container">
          {thumb && <div class="at-list__item-thumb item-thumb">
            <img class="item-thumb__info" src={thumb} />
          </div>}
          {iconInfo.value && <div class="at-list__item-icon item-icon">
            <div class={iconClass} style={getIconStyle()}></div>
          </div>}
          <div class="at-list__item-content item-content">
            <div class="item-content__info">
              <div class="item-content__info-title">{String(title)}</div>
              {note && <div class="item-content__info-note">{note}</div>}
            </div>
          </div>
          <div class="at-list__item-extra item-extra">
            {extraText && <div class="item-extra__info">{String(extraText)}</div>}
            {extraThumb && !String(extraText) && <div class="item-extra__image">
              <img class="item-extra__image-info" src={extraThumb} />
            </div>}
            {arrow && <div class="item-extra__icon">
              <div class={`at-icon item-extra__icon-arrow at-icon-chevron-${arrow}`} />
            </div>}
          </div>
        </div>
      </div>
    )
  }
})