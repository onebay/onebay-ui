import { defineComponent, computed } from 'vue'
import classNames from 'classnames'

export default defineComponent({
  name: 'ActionSheetItem',
  props: {
    className: {
      type: [Array, String],
      default: () => ''
    }
  },
  emits: ['click'],
  setup(props) {
    const rootClass = computed(() => {
      return classNames('at-action-sheet__item', props.className)
    })
    return {
      rootClass
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  },
  render(): JSX.Element {
    const { handleClick, $slots, rootClass } = this
    return (
      <div class={rootClass} onClick={handleClick}>
        {$slots.default && $slots.default()}
      </div>
    )
  }
})
