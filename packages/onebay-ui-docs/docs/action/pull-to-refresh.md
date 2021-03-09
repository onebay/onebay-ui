# pull-to-refresh 

<DemoView />
<BackToTop />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```tsx
import DocsHeader from '../../../components/DocHeader/DocsHeader'
import { defineComponent, ref } from 'vue'
import { PullToRefresh, Button, Noticebar, Toast } from 'onebay-ui'

export default defineComponent({
  name: 'PullToRefreshPage',
  components: {
    Button,
    PullToRefresh
  },
  setup(props) {
    const direction = ref<'up' | 'down'>('down')
    const changeDirection = () => {
      direction.value = direction.value === 'up' ? 'down' : 'up'
    }
    const onRefresh = () => {
      Toast({
        text: 'onRefresh'
      })
    }
    return () => {
      return (
        <div class="page row-page">
          <Noticebar marquee>
            This component only supports Touch events, please use mobile mode/device to open this page.
          </Noticebar>
          <DocsHeader title="PullToRefresh" />
          <div class="doc-body" style="height: 100%">
            <div class="panel">
              <div class="panel__title">Basic usage</div>
              <div class="panel__content no-padding">
                <Button onClick={changeDirection}> direction: {direction.value} </Button>
                <PullToRefresh
                  onRefresh={onRefresh}
                  style="height: 60vh; overflow: auto"
                  direction={direction.value}
                >
                  {
                    Array(20).fill(0).map((_, index) => {
                      return (
                        <div key={index} style="text-align: center; padding: 20px">
                          pull { direction.value} { index}
                        </div>
                      )
                    })
                  }
                </PullToRefresh>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
})

```

```vue
<template>
  <div class="page row-page">
    <Noticebar marquee>
      This component only supports Touch events, please use mobile mode/device to open this page.
    </Noticebar>
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
import { PullToRefresh, Button, Noticebar, Toast } from 'onebay-ui'
export default defineComponent({
  name: 'PullToRefreshPage',
  components: {
    Button,
    PullToRefresh,
    Noticebar
  },
  setup(props) {
    const direction = ref('down')
    const changeDirection = () => {
      direction.value = direction.value === 'up' ? 'down' : 'up'
    }
    const onRefresh = () => {
      Toast({
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
```

</div> 

## API 

| Properties        | Descrition                                              | Type         | Default      |
| ----------------- | ------------------------------------------------------- | ------------ | ------------ |
| indicator         | custom indicator                                        | string       | ''           |
| indicatorText     | indicator text                                          | string       | `loading...` |
| direction         | pull direction                                          | `up`, `down` | `down`       |
| distanceToRefresh | distance to refresh                                     | number       | 25           |
| refreshing        | Whether the view should be indicating an active refresh | boolean      | false        |
| onRefresh         | required, Called when the view starts refreshing.       | () => void   | -            |
| className         | class name                                              | string       | ''           |