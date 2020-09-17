<template>
  <div :class="rootClass" @click="handleClick">
    <slot />
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import classNames from 'classnames'

export default defineComponent({
  name: 'ActionSheetItem',
  props: {
    className: {
      type: [Array, String],
      default: () => '',
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },
  setup (props) {
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
    },
  },
})
</script>
