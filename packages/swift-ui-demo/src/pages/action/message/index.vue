<template>
  <div class="page toast-page">
    <!-- S Header -->
    <DocsHeader title="Message 消息通知" />
    <!-- E Header -->

    <!-- S Body -->
    <div class="doc-body">
      <div class="panel">
        <div class="panel__title">基本案例</div>
        <div class="panel__content">
          <div class="example-item">
            <Button @click="handleClick('')"> 普通消息 </Button>
          </div>
          <div class="example-item">
            <Button @click="handleClick('success')"> 成功消息 </Button>
          </div>
          <div class="example-item">
            <Button @click="handleClick('error')"> 错误消息 </Button>
          </div>
          <div class="example-item">
            <Button @click="handleClick('warning')"> 警告消息 </Button>
          </div>
          <div class="example-item">
            <Button @click="handleClick('info')"> 提示消息 </Button>
          </div>
        </div>
      </div>
    </div>
    <!-- E Body -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from '/@/swift-ui/src/index.ts'
export default defineComponent({
  name: 'ToastPage',
  components: {
    Button
  },
  methods: {
    handleClick(type) {
      this.$message({
        message: '消息通知',
        type
      })
    }
  }
})
</script>
<style lang="scss">
@import './index.scss';
</style>
