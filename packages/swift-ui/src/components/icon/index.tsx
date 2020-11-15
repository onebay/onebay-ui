import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Icon',
  props: {
    width: {
      type: Number,
      default: 24
    },
    height: {
      type: Number,
      default: 24
    },
    iconName: {
      type: String,
      default: ''
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  },
  setup(props, { slots }) {
    return () => {
      const { width, height, iconName, iconColor, ...respProps } = props
      return (
        <svg
          {...respProps}
          class="icon-loading"
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 1024 1024"
          aria-labelledby={iconName}
          role="presentation">
          <g fill={iconColor}>{slots.default?.()}</g>
        </svg>
      )
    }
  }
})
