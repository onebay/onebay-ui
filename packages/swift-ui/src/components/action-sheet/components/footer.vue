<template>
  <div :class="rootClass" @click="handleClick">
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
    onClick: {
      type: Function,
      default: () => () => {},
    },
  },
  setup (props) {
    const rootClass = computed(() => {
      return classNames('at-action-sheet__footer', props.className)
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
}
</script>
