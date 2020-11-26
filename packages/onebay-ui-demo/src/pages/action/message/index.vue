<template>
  <div class="page toast-page">
    <!-- S Header -->
    <DocsHeader title="Message" />
    <!-- E Header -->

    <!-- S Body -->
    <div class="doc-body">
      <div class="panel">
        <div class="panel__title">Basic usage</div>
        <div class="panel__content">
          <div class="example-item">
            <Button @click="handleClick('')"> normal message </Button>
          </div>
          <div class="example-item">
            <Button @click="handleClick('success')"> success message </Button>
          </div>
          <div class="example-item">
            <Button @click="handleClick('error')"> error message </Button>
          </div>
          <div class="example-item">
            <Button @click="handleClick('warning')"> warning message </Button>
          </div>
          <div class="example-item">
            <Button @click="handleClick('info')"> prompt message </Button>
          </div>
        </div>
      </div>
    </div>
    <!-- E Body -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from '/@/onebay-ui/src/index.ts'
export default defineComponent({
  name: 'MessagePage',
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
