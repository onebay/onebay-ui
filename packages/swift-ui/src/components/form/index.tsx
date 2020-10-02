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
    customStyle: {
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
    },
    onSubmit: {
      type: Function,
      default: function () {
        /*  */
      }
    },
    onReset: {
      type: Function,
      default: function () {
        /*  */
      }
    }
  },
  setup(props: FormProps) {
    const rootCls = computed(() => {
      return classNames('at-form', props.className)
    })
    return {
      rootCls
    }
  },
  methods: {
    handleSubmit() {
      this.onSubmit && this.onSubmit(arguments)
    },

    handleReset() {
      this.onReset && this.onReset(arguments)
    }
  },
  render(): JSX.Element {
    const { customStyle } = this.$props
    const { handleSubmit, handleReset, $slots, rootCls } = this
    return (
      <form class={rootCls} style={customStyle} onSubmit={handleSubmit} onReset={handleReset}>
        {$slots.default && $slots.default()}
      </form>
    )
  }
})
