import { defineComponent, computed } from 'vue'
import classNames from 'classnames'

export default defineComponent({
  name: 'List',
  props: {
    hasBorder: {
      type: Boolean,
      default: true
    },
    className: {
      type: [Array, String],
      default: ''
    }
  },
  setup(props) {
    const rootClass = computed(() => {
      return classNames(
        'at-list',
        {
          'at-list--no-border': !props.hasBorder
        },
        props.className
      )
    })
    return {
      rootClass
    }
  },
  render(): JSX.Element {
    const { rootClass, $slots } = this
    return <div class={rootClass}>{$slots.default && $slots.default()}</div>
  }
})
