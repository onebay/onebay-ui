<template>
  <div class="page row-page">
    <DocsHeader title="PullToRefresh" />
    <div class="doc-body" style="height: 100%">
      <div class="panel">
        <div class="panel__title">Basic usage</div>
        <div class="panel__content no-padding">
          <Button @click="changeDirection"> direction: {{ direction }} </Button>
          <PullToRefresh
            @refresh="onRefresh"
            style="height: 60vh; overflow: auto"
            :direction="direction"
          >
            <div v-for="n of 20" :key="n" style="text-align: center; padding: 20px">
              pull {{ direction }} {{ n }}
            </div>
          </PullToRefresh>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { defineComponent, ref } from 'vue'
import { PullToRefresh, Button } from '/@/swift-ui/src/index.ts'
export default defineComponent({
  name: 'PullToRefreshPage',
  components: {
    Button,
    PullToRefresh
  },
  setup(props) {
    const direction = ref('down')
    const changeDirection = () => {
      direction.value = direction.value === 'up' ? 'down' : 'up'
    }
    const onRefresh = () => {
      this.$toast({
        text: 'onRefresh'
      })
    }
    return {
      direction,
      changeDirection,
      onRefresh
    }
  }
})
</script>