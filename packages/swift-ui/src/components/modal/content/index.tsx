import classNames from 'classnames'
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'ModalContent',
  props: {
    className: {
      type: [Object, String],
      default: () => ''
    }
  },
  setup(props) {
    const rootClass = computed(() => {
      return classNames('at-modal__content', props.className)
    })
    return {
      rootClass
    }
  },
  render(): JSX.Element {
    const { $slots, rootClass } = this
    return (
      <div scroll-y class={rootClass}>
        {$slots.default && $slots.default()}
      </div>
    )
  }
})
