<template>
  <div :class="rootClass">
    <div class="at-activity-indicator__body">
      <Loading :size="size" :color="color" />
    </div>
    <div class="at-activity-indicator__content">
      <slot />
    </div>
  </div>
</template>

<script>
import ActivityIndicator from './index'
export default ActivityIndicator
</script>
