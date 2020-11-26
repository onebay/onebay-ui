# rate 

<DemoView />
<BackTop />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```vue
<template>
  <div class="page">
    <!-- S Header -->
    <DocsHeader title="Rate 评分"></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <div class="doc-body">
      <!-- 基础用法 -->
      <div class="panel">
        <div class="panel__title">基础用法</div>
        <div class="panel__content">
          <div class="example-item">
            <Rate :value="rateValue1" :onChange="handleRateChange.bind(this, 'rateValue1')" />
          </div>
        </div>
      </div>

      <!-- 自定义尺寸 -->
      <div class="panel">
        <div class="panel__title">自定义尺寸</div>
        <div class="panel__content">
          <div class="example-item">
            <Rate
              :size="16"
              :value="rateValue2"
              :onChange="handleRateChange.bind(this, 'rateValue2')"
            />
          </div>
        </div>
      </div>

      <!-- 自定义评分数 -->
      <div class="panel">
        <div class="panel__title">自定义评分数</div>
        <div class="panel__content">
          <div class="example-item">
            <Rate
              :max="10"
              :value="rateValue3"
              :onChange="handleRateChange.bind(this, 'rateValue3')"
            />
          </div>
        </div>
      </div>

      <!-- 自定义星星间隔 -->
      <div class="panel">
        <div class="panel__title">自定义星星间隔</div>
        <div class="panel__content">
          <div class="example-item">
            <Rate
              :margin="15"
              :value="rateValue4"
              :onChange="handleRateChange.bind(this, 'rateValue4')"
            />
          </div>
        </div>
      </div>

      <!-- 只读 -->
      <div class="panel">
        <div class="panel__title">只读</div>
        <div class="panel__content">
          <div class="example-item">
            <div>评分: 3.5</div>
            <div>
              <Rate :value="3.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- E Body -->
  </div>
</template>

<script>
import './index.scss'
import { defineComponent } from 'vue'
import { Rate } from '/@/onebay-ui/src/index.ts'
export default defineComponent({
  name: 'RatePage',
  components: { Rate },
  data() {
    return {
      rateValue1: 3,
      rateValue2: 3,
      rateValue3: 3,
      rateValue4: 3
    }
  },
  methods: {
    handleRateChange(stateName, value) {
      this[stateName] = value
    }
  }
})
</script>

```

</div> 