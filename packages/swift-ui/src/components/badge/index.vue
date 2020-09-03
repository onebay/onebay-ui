<template>
  <div :class="rootClass" :style="customStyle">
    <slot />
    <div v-if="dot" class="at-badge__dot" />
    <div v-if="!dot && val">
      <div class="at-badge__num">
        {{ val }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Badge from './index'
export default Badge
</script>
