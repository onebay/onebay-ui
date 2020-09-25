import { defineComponent, computed } from 'vue'
import classNames from 'classnames'
export default defineComponent({
  name: 'ActionSheetHeader',
  props: {
    className: {
      type: [Array, String],
      default: () => ''
    }
  },
  setup(props) {
    const rootClass = computed(() => {
      return classNames('at-action-sheet__header', props.className)
    })
    return {
      rootClass
    }
  },
  render(): JSX.Element {
    const { rootClass, $slots } = this
    return (
      <div class={rootClass}>
        {$slots.default && $slots.default()}
      </div>
    )
  }
})