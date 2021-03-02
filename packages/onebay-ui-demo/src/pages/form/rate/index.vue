<template>
  <div class="page">
    <!-- S Header -->
    <DocsHeader title="Rate"></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <div class="doc-body">
      <!-- Basic usage -->
      <div class="panel">
        <div class="panel__title">Basic usage</div>
        <div class="panel__content">
          <div class="example-item">
            <Rate :value="rateValue1" :onChange="handleRateChange.bind(this, 'rateValue1')" />
          </div>
        </div>
      </div>

      <!-- Custom size -->
      <div class="panel">
        <div class="panel__title">Custom size</div>
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

      <!-- Custom rate -->
      <div class="panel">
        <div class="panel__title">Custom rate</div>
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

      <!-- Custom margin -->
      <div class="panel">
        <div class="panel__title">Custom margin</div>
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

      <!-- Readonly -->
      <div class="panel">
        <div class="panel__title">Readonly</div>
        <div class="panel__content">
          <div class="example-item">
            <div>rate: 3.5</div>
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
import { Rate } from 'onebay-ui'
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
