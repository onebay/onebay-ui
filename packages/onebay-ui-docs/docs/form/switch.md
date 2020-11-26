# switch 

<DemoView />
<BackTop />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```vue
<template>
  <div class="page">
    <!-- S Header -->
    <DocsHeader title="Switch"></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <div class="doc-body">
      <!-- Basic usage -->
      <div class="panel">
        <div class="panel__title">Basic usage</div>
        <div class="panel__content no-padding">
          <div class="example-item">
            <Form>
              <Switch
                :title="switchValue1 ? 'Opening' : 'Closed'"
                :checked="switchValue1"
                :onChange="(v) => handleChange('switchValue1', v)"
              />
              <Switch
                :title="switchValue2 ? 'Opening' : 'Closed'"
                :checked="switchValue2"
                :onChange="(v) => handleChange('switchValue2', v)"
              />
              <Switch title="No border" :border="false" />
              <Switch title="Custom color" checked color="#f45" />
            </Form>
          </div>
        </div>
      </div>

      <!-- Disabled state -->
      <div class="panel">
        <div class="panel__title">Disabled state</div>
        <div class="panel__content no-padding">
          <div class="example-item">
            <Form>
              <Switch title="Not clickable" checked disabled />
              <Switch title="Not clickable" :border="false" disabled />
            </Form>
          </div>
        </div>
      </div>
    </div>
    <!-- E Body -->
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Form, Switch } from '/@/onebay-ui/src/index.ts'
export default defineComponent({
  name: 'SwitchPage',
  components: {
    Form,
    Switch
  },
  data() {
    return {
      switchValue1: true,
      switchValue2: false
    }
  },
  methods: {
    handleChange(name, value) {
      this[name] = value
    }
  }
})
</script>

```

</div> 