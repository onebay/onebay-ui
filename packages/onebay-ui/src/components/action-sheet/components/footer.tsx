import { defineComponent, computed } from 'vue'
import classNames from 'classnames'

export default defineComponent({
  name: 'ActionSheetFooter',
  props: {
    className: {
      type: [Array, String],
      default: ''
    },
    onClick: {
      type: Function,
      default: () => {
        /* */
      }
    }
  },
  emits: ['click'],
  setup(props) {
    const rootClass = computed(() => {
      return classNames('ob-action-sheet__footer', props.className)
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
    const { rootClass, $slots } = this
    return (
      <div class={rootClass} onClick={this.handleClick}>
        {$slots.default && $slots.default()}
      </div>
    )
  }
})
