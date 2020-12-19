import classNames from 'classnames'
import { defineComponent, computed, PropType } from 'vue'

interface TimelineItem {
  icon?: string
  color?: string
  title: string
  content?: string[]
}

export default defineComponent({
  name: 'Timeline',
  props: {
    pending: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array as PropType<TimelineItem[]>,
      default: () => []
    },
    customStyle: {
      type: [Object, String],
      default: ''
    },
    className: {
      type: String,
      default: () => ''
    }
  },
  setup(props) {
    const rootClassName = computed(() => {
      const { pending } = props
      const rootClsName = ['ob-timeline']
      if (pending) rootClsName.push('ob-timeline--pending')
      return rootClsName
    })
    const itemRootClassName = (item) => {
      const itemRootClsName = ['ob-timeline-item']
      if (item.color) itemRootClsName.push(`ob-timeline-item--${item.color}`)
      return classNames(itemRootClsName)
    }
    const dotClass = (item) => {
      const dotClass = []
      if (item.icon) {
        dotClass.push('ob-timeline-item__icon')
      } else {
        dotClass.push('ob-timeline-item__dot')
      }
      return classNames(dotClass)
    }

    const fileIconClass = (item) => {
      const { icon } = item
      const iconClass = classNames({
        'ob-icon': true,
        [`ob-icon-${icon}`]: icon
      })
      return iconClass
    }

    return () => {
      const { customStyle, items, className, pending } = props
      console.log('items :>> ', items)
      return (
        <div
          class={classNames(rootClassName.value, { 'ob-timeline--pending': pending }, className)}
          style={customStyle}>
          {items.map((item, index) => (
            <div key={`${index}`} class={itemRootClassName(item)}>
              <div class="ob-timeline-item__tail" />
              <div class={dotClass(item)}>{item.icon && <div class={fileIconClass(item)} />}</div>
              <div class="ob-timeline-item__content">
                <div class="ob-timeline-item__content-item">{item.title}</div>
                {item.content?.map((sub, subIndex) => (
                  <div
                    key={`${subIndex}`}
                    class="ob-timeline-item__content-item ob-timeline-item__content--sub">
                    {sub}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )
    }
  }
})
