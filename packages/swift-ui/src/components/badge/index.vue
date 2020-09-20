<template>
  <div :class="rootClass" :style="customStyle">
    <slot />
    <div v-if="dot" class="at-badge__dot" />
    <div v-if="!dot && val">
      <div class="at-badge__num">{{ val }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import classNames from 'classnames'

/**
 * formatValue
 * @param {string | number | undefined} value
 * @param {number} maxValue
 * @return string | number
 */
const formatValue = (value, maxValue) => {
  if (value === '' || value === null || value === undefined) return ''
  const numValue = +value
  if (Number.isNaN(numValue)) {
    return value
  }
  return numValue > maxValue ? `${maxValue}+` : numValue
}

export default defineComponent({
  name: 'Badge',
  props: {
    dot: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      default: ''
    },
    maxValue: {
      type: Number,
      default: 99
    },
    customStyle: {
      type: [String, Object],
      default: ''
    },
    className: {
      type: [String, Object],
      default: ''
    }
  },
  setup(props) {
    const val = computed(() => {
      const { value, maxValue } = props
      return formatValue(value, maxValue)
    })
    const rootClass = computed(() => {
      return classNames('at-badge', props.className)
    })
    return {
      val,
      rootClass
    }
  },
  methods: {
    classNames
  }
})
</script>
