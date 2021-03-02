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
    },
    onChange: {
      type: Function,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      default: () => {}
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
      <div class={classNames('ob-steps', className)} style={customStyle}>
        {items.map((item: StepItem, index) => (
          <div
            key={index}
            class={classNames({
              'ob-steps__item': true,
              'ob-steps__item--active': index === current,
              'ob-steps__item--inactive': index !== current
            })}
            onClick={() => handleClick(index)}>
            <div class="ob-steps__circular-wrap">
              {index !== 0 && <div class="ob-steps__left-line"></div>}
              {item.status ? (
                <div
                  class={classNames({
                    'ob-icon': true,
                    'ob-icon-check-circle': item.status === 'success',
                    'ob-icon-close-circle': item.status === 'error',
                    'ob-steps__single-icon': true,
                    'ob-steps__single-icon--success': item.status === 'success',
                    'ob-steps__single-icon--error': item.status === 'error'
                  })}></div>
              ) : (
                <div class="ob-steps__circular">
                  {item.icon ? (
                    <div
                      class={classNames('ob-icon', {
                        [`ob-icon-${item.icon.value}`]: item.icon.value,
                        'ob-steps__circle-icon': true
                      })}></div>
                  ) : (
                    <div class="ob-steps__num">{index + 1}</div>
                  )}
                </div>
              )}
              {index !== items.length - 1 && <div class="ob-steps__right-line"></div>}
            </div>
            <div class="ob-steps__title">{item.title}</div>
            <div class="ob-steps__desc">{item.desc}</div>
          </div>
        ))}
      </div>
    )
  }
})
