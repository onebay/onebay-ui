<template>
  <div class="doc-header">
    <div class="doc-header__title">
      {{ title }}
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    title: {
      type: String,
      default: '标题'
    }
  }
})
</script>
<style lang="scss">
.doc-header {
  display: flex;
  align-items: center;
  padding: 50px 30px;

  &__title {
    position: relative;
    height: 45px;
    color: #333;
    font-size: 20px;
    font-weight: bold;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      display: inline-block;
      width: 60px;
      height: 1px;
      border-radius: 1px;
      background-color: #6190e8;
    }
  }
}
</style>
