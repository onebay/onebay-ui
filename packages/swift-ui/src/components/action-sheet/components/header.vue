<template>
  <div :class="rootClass">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import classNames from 'classnames'
export default {
  name: 'ActionSheetHeader',
  props: {
    className: {
      type: [Array, String],
      default: () => '',
    },
  },
  setup (props) {
    const rootClass = computed(() => {
      return classNames('at-action-sheet__header', props.className)
    })
     return {
      rootClass
    }
  }
}
</script>
