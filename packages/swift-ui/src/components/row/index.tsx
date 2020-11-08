import { defineComponent, computed, provide, PropType } from 'vue'
import classNames from 'classnames'

export interface ResultItem {
  left?: number
  right?: number
}

export default defineComponent({
  name: 'Row',
  props: {
    className: {
      type: String,
      default: ''
    },
    gutter: {
      type: Number,
      default: 0
    },
    tag: {
      type: String as PropType<keyof HTMLElementTagNameMap>,
      default: 'div'
    }
  },
  emits: ['click'],
  setup(props, { slots, emit }) {
    const children = slots.default?.() || []

    const spaces = computed(() => {
      const result: ResultItem[] = []
      const { gutter } = props
      if (!gutter) {
        return result
      }
      const averagePadding = (gutter * (children.length - 1)) / children.length
      children.forEach((item, index: number) => {
        if (index === 0) {
          result.push({ right: averagePadding })
        } else {
          const left = gutter - result[index - 1].right
          const right = averagePadding - left
          result.push({ left, right })
        }
      })
      return result
    })
    const onClick = (event: MouseEvent) => {
      emit('click', event)
    }
    provide('spaces', spaces)
    return { onClick }
  },
  render(): JSX.Element {
    const { $props, $slots, onClick } = this
    const { tag, className } = $props
    return (
      <tag class={classNames('cr-row', className)} onClick={onClick}>
        {$slots.default?.()}
      </tag>
    )
  }
})
