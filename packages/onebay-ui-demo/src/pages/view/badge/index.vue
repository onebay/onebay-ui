<template>
  <div class="page">
    <!-- S Header -->
    <DocsHeader title="Badge"></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <div class="doc-body">
      <!-- digital -->
      <div class="panel">
        <div class="panel__title">digital</div>
        <div class="panel__content">
          <div class="example-item">
            <div class="subitem">
              <Badge value="10" :maxValue="99">
                <Button size="small" circle> Button </Button>
              </Badge>
            </div>
            <div class="subitem">
              <Badge value="100" :maxValue="99">
                <Button size="small">Button</Button>
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <!-- small red dot -->
      <div class="panel">
        <div class="panel__title">small red dot</div>
        <div class="panel__content">
          <div class="example-item">
            <div class="subitem">
              <Badge dot>
                <Button size="small" circle> Button </Button>
              </Badge>
            </div>
            <div class="subitem">
              <Badge dot>
                <Button size="small">Button</Button>
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <!-- text -->
      <div class="panel">
        <div class="panel__title">text</div>
        <div class="panel__content">
          <div class="example-item">
            <div class="subitem">
              <Badge value="NEW">
                <Button size="small" circle> Button </Button>
              </Badge>
            </div>
            <div class="subitem">
              <Badge value="NEW">
                <Button size="small">Button</Button>
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <!-- Ellipsis -->
      <div class="panel">
        <div class="panel__title">Ellipsis</div>
        <div class="panel__content">
          <div class="example-item">
            <div class="subitem">
              <Badge :value="dot">
                <Button size="small" circle> Button </Button>
              </Badge>
            </div>
            <div class="subitem">
              <Badge :value="dot">
                <Button size="small">Button</Button>
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
