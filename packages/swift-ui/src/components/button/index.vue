<template>
  <div
    :class="classNames(rootClassName, classObject, className)"
    :style="customStyle"
    @click="handelOnClick"
  >
    <div v-if="loading" class="at-button__icon">
      <Loading :color="loadingColor" :size="loadingSize" />
    </div>
    <div class="at-button__text">
      <slot />
    </div>
  </div>
</template>

<script>
import Button from './index'
export default Button
</script>
