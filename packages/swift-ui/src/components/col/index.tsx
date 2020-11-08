import {
  computed,
  defineComponent,
  getCurrentInstance,
  inject,
  VNode,
  PropType,
  ComputedRef
} from 'vue'
import classNames from 'classnames'
import { isTest } from '../../utils'

const testing = isTest()

export default defineComponent({
  name: 'Col',
  props: {
    className: {
      type: String,
      default: ''
    },
    span: {
      type: Number,
      default: 1
    },
    offset: {
      type: Number,
      default: 0
    },
    tag: {
      type: String as PropType<keyof HTMLElementTagNameMap>,
      default: 'div'
    }
  },
  setup() {
    const spaces = inject<ComputedRef>('spaces')
    const instance = getCurrentInstance()

    const list = [].slice.call(instance.parent.subTree.children)

    const index = list.findIndex((child: VNode) => {
      if (testing) {
        return child.children[0]?.component?.uid === instance.uid
      }
      return child.component?.uid === instance.uid
    })
    const style = computed(() => {
      if (spaces && index >= 0) {
        const { left, right } = spaces.value[index] || {}
        return {
          paddingLeft: left ? `${left}px` : null,
          paddingRight: right ? `${right}px` : null
        }
      }
      return {}
    })
    return {
      style
    }
  },
  render(): JSX.Element {
    const { $slots, style } = this
    const { span, className, offset, tag } = this.$props
    const offsetCls = { [`cr-col-offset--${offset}`]: offset > 0 }
    return (
      <tag class={classNames('cr-col', `cr-col--${span}`, className, offsetCls)} style={style}>
        {$slots.default?.()}
      </tag>
    )
  }
})
