import classNames from 'classnames'
import { defineComponent, computed } from 'vue'

interface FormProps {
  /* eslint-disable */
  className: any
  /* eslint-disable */
}

export default defineComponent({
  name: 'Form',
  props: {
    style: {
      type: [Object, String],
      default: function () {
        return {}
      }
    },
    className: {
      type: [Object, String],
      default: function () {
        return {}
      }
    },
    reportSubmit: {
      type: Boolean,
      default: false
    }
  },
  emits: ['submit', 'reset'],
  setup(props: FormProps) {
    const rootCls = computed(() => {
      return classNames('ob-form', props.className)
    })
    return {
      rootCls
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('submit')
    },

    handleReset() {
      this.$emit('reset')
    }
  },
  render(): JSX.Element {
    const { style } = this.$props
    const { handleSubmit, handleReset, $slots, rootCls } = this
    return (
      <form class={rootCls} style={style} onSubmit={handleSubmit} onReset={handleReset}>
        {$slots.default && $slots.default()}
      </form>
    )
  }
})
