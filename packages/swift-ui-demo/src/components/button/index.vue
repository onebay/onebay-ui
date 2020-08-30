<template>
  <button :class="rootCls">
      <i v-if="showLoading" class="weui-loading"></i>
      <slot></slot>
    </button>
</template>

<script lang="ts">
import index from './index'
export default index
</script>