import { defineComponent, computed } from 'vue'
import classNames from 'classnames'

export default defineComponent({
  name: 'ModalAction',
  props: {
    isSimple: {
      type: Boolean,
      default: false
    },
    className: {
      type: [Object, String],
      default: ''
    }
  },
  setup(props) {
    const rootClass = computed(() => {
      return classNames(
        'ob-modal__footer',
        {
          'ob-modal__footer--simple': props.isSimple
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
    return (
      <div class={rootClass}>
        <div class="ob-modal__action">{$slots.default && $slots.default()}</div>
      </div>
    )
  }
})
