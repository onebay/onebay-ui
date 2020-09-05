<template>
  <div
    :class="classNames(rootClassName, classObject, className)"
    :style="customStyle"
    @click="handelOnClick"
  >
    <button
      v-if="!disabled"
      class="at-button__wxbutton"
      :lang="lang"
      :formType="
        formType === 'submit' || formType === 'reset' ? formType : undefined
      "
    />
    <div v-if="loading" class="at-button__icon">
      <Loading :color="loadingColor" :size="loadingSize" />
    </div>
    <div class="at-button__text">
      <slot />
    </div>
  </div>
</template>

<script>
import Loading from '../loading/index.vue'
import Button from './index'
export default {
  name: 'Button',
  components: {
    Loading,
  },
  mixins: [Button],
}
</script>
