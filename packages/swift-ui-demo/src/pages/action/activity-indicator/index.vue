<template>
  <div>
    <ActivityIndicator :size="20">20px</ActivityIndicator>
    <ActivityIndicator :size="24">24px</ActivityIndicator>
    <ActivityIndicator :size="32">32px</ActivityIndicator>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { ActivityIndicator } from '/@/swift-ui/src/index.ts'
export default defineComponent({
  name: 'ActivityIndicatorPage',
  components: {
    ActivityIndicator
  }
})
</script>
