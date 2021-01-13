# badge 

<DemoView />
<BackToTop />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```vue
<template>
  <div class="page">
    <!-- S Header -->
    <DocsHeader title="Badge 徽标"></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <div class="doc-body">
      <!-- 数字 -->
      <div class="panel">
        <div class="panel__title">数字</div>
        <div class="panel__content">
          <div class="example-item">
            <div class="subitem">
              <Badge value="10" :maxValue="99">
                <Button size="small" circle> 按钮 </Button>
              </Badge>
            </div>
            <div class="subitem">
              <Badge value="100" :maxValue="99">
                <Button size="small">按钮</Button>
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <!-- 小红点 -->
      <div class="panel">
        <div class="panel__title">小红点</div>
        <div class="panel__content">
          <div class="example-item">
            <div class="subitem">
              <Badge dot>
                <Button size="small" circle> 按钮 </Button>
              </Badge>
            </div>
            <div class="subitem">
              <Badge dot>
                <Button size="small">按钮</Button>
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <!-- 文本 -->
      <div class="panel">
        <div class="panel__title">文本</div>
        <div class="panel__content">
          <div class="example-item">
            <div class="subitem">
              <Badge value="NEW">
                <Button size="small" circle> 按钮 </Button>
              </Badge>
            </div>
            <div class="subitem">
              <Badge value="NEW">
                <Button size="small">按钮</Button>
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <!-- 省略号 -->
      <div class="panel">
        <div class="panel__title">省略号</div>
        <div class="panel__content">
          <div class="example-item">
            <div class="subitem">
              <Badge :value="dot">
                <Button size="small" circle> 按钮 </Button>
              </Badge>
            </div>
            <div class="subitem">
              <Badge :value="dot">
                <Button size="small">按钮</Button>
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Badge, Button } from 'onebay-ui'

export default defineComponent({
  name: 'BadgePage',
  components: {
    Badge,
    Button
  },
  data() {
    return {
      dot: '...'
    }
  }
})
</script>
<style lang="scss">
@import url('./index.scss');
</style>

```

</div> 