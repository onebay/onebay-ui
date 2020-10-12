import classNames from 'classnames'
import { defineComponent, PropType } from 'vue'

type Icon = { value?: string }

export interface StepItem {
  status?: string
  icon?: Icon
  title?: string
  desc?: string
}

export default defineComponent({
  name: 'Steps',
  props: {
    customStyle: {
      type: [Object, String],
      default: () => ''
    },
    className: {
      type: [Object, String],
      default: () => ''
    },
    current: {
      type: Number,
      default: 0
    },
    items: {
      type: Array as PropType<StepItem[]>,
      default: () => []
    }
  },
  emits: ['change'],
  methods: {
    handleClick(index: number) {
      this.$emit('change', index)
    }
  },
  render(): JSX.Element {
    const { className, customStyle, items, current } = this.$props
    const { handleClick } = this
    return (
      <div class={classNames('at-steps', className)} style={customStyle}>
        {items.map((item: StepItem, index) => (
          <div
            key={index}
            class={classNames({
              'at-steps__item': true,
              'at-steps__item--active': index === current,
              'at-steps__item--inactive': index !== current
            })}
            onClick={() => handleClick(index)}>
            <div class="at-steps__circular-wrap">
              {index !== 0 && <div class="at-steps__left-line"></div>}
              {item.status ? (
                <div
                  class={classNames({
                    'at-icon': true,
                    'at-icon-check-circle': item.status === 'success',
                    'at-icon-close-circle': item.status === 'error',
                    'at-steps__single-icon': true,
                    'at-steps__single-icon--success': item.status === 'success',
                    'at-steps__single-icon--error': item.status === 'error'
                  })}></div>
              ) : (
                <div class="at-steps__circular">
                  {item.icon ? (
                    <div
                      class={classNames('at-icon', {
                        [`at-icon-${item.icon.value}`]: item.icon.value,
                        'at-steps__circle-icon': true
                      })}></div>
                  ) : (
                    <div class="at-steps__num">{index + 1}</div>
                  )}
                </div>
              )}
              {index !== items.length - 1 && <div class="at-steps__right-line"></div>}
            </div>
            <div class="at-steps__title">{item.title}</div>
            <div class="at-steps__desc">{item.desc}</div>
          </div>
        ))}
      </div>
    )
  }
})
