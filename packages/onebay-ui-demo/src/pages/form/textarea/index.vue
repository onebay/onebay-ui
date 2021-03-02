<template>
  <div class="page">
    <!-- S Header -->
    <DocsHeader title="Textarea"></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <div class="doc-body">
      <div class="panel">
        <div class="panel__title">Basic usage</div>
        <div class="panel__content">
          <div class="example-item">
            <Textarea
              :value="value1"
              :onChange="handleChange.bind(this, 'value1')"
              :maxLength="200"
              placeholder="Please enter your suggestion..."
            />
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="panel__title">No word count</div>
        <div class="panel__content">
          <div class="example-item">
            <Textarea
              :count="false"
              :value="value2"
              :onChange="handleChange.bind(this, 'value2')"
              :maxLength="200"
              placeholder="Please enter your suggestion..."
            />
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="panel__title">Text can still be entered beyond</div>
        <div class="panel__content">
          <div class="example-item">
            <Textarea
              :textOverflowForbidden="false"
              :value="value3"
              :onChange="handleChange.bind(this, 'value3')"
              :maxLength="200"
              placeholder="Please enter your suggestion..."
            />
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="panel__title">Custom height</div>
        <div class="panel__content">
          <div class="example-item">
            <Textarea
              height="300"
              :value="value4"
              :onChange="handleChange.bind(this, 'value4')"
              :maxLength="200"
              placeholder="Please enter your suggestion..."
            />
          </div>
        </div>
      </div>
    </div>
    <!-- E Body -->
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Textarea } from 'onebay-ui'
export default defineComponent({
  name: 'TextareaPage',
  components: { Textarea },
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: ''
    }
  },
  methods: {
    handleChange(stateName, value) {
      this[stateName] = value
    }
  }
})
</script>
