import { defineComponent, ref, computed, watch } from 'vue'
import classNames from 'classnames'

const Switch = defineComponent({
  name: 'Switch',
  props: {
    customStyle: {
      type: [Object, String],
      default: ''
    },
    className: {
      type: [Object, String],
      default: ''
    },
    checked: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    }
  },
  emits: ['change'],
  setup(props, { emit }) {
    const isChecked = ref(props.checked)
    watch(
      () => props.checked,
      (val: boolean) => {
        isChecked.value = val
      }
    )
    const switchChange = (e: Event) => {
      e.stopPropagation()
      const value = (e.target as HTMLInputElement).checked
      isChecked.value = value
      emit('change', value)
    }
    const containerCls = computed(() => {
      const { disabled } = props
      return classNames('ob-switch__container', {
        'ob-switch--disabled': disabled
      })
    })
    const rootCls = computed(() => {
      const { border, className } = props
      return classNames(
        'ob-switch',
        {
          'ob-switch--without-border': !border
        },
        className
      )
    })
    return {
      isChecked,
      switchChange,
      containerCls,
      rootCls
    }
  },
  render() {
    const { color, name, title, disabled, customStyle } = this.$props
    const { switchChange, containerCls, rootCls, isChecked } = this
    const style =
      isChecked && color
        ? {
            borderColor: color,
            backgroundColor: color
          }
        : {}
    return (
      <div class={rootCls} style={customStyle}>
        <div class="ob-switch__title">{title}</div>
        <div class={containerCls}>
          <div class="ob-switch__mask"></div>
          <input
            type="checkbox"
            class="ob-switch ob-switch__switch"
            style={style}
            checked={isChecked}
            name={name}
            disabled={disabled}
            onChange={switchChange}
          />
        </div>
      </div>
    )
  }
})

export default Switch
