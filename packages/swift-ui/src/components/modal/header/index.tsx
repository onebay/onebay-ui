import classNames from 'classnames'
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'ModalHeader',
  props: {
    className: {
      type: [Object, String],
      default: ''
    }
  },
  setup(props) {
    const rootClass = computed(() => {
      return classNames('at-modal__header', props.className)
    })
    return {
      rootClass
    }
  },
  render() {
    const { $slots, rootClass } = this
    return <div class={rootClass}>{$slots.default && $slots.default()}</div>
  }
})
