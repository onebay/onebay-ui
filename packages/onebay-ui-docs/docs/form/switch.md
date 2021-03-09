# switch 

<DemoView />
<BackToTop />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```tsx
import { defineComponent, reactive } from 'vue'
import { Form, Switch } from 'onebay-ui'
import DocsHeader from '../../../components/DocHeader/DocsHeader'

export default defineComponent({
  name: 'SwitchPage',
  components: {
    Form,
    Switch
  },
  setup() {
    const state = reactive({
      switchValue1: true,
      switchValue2: false
    })
    type State = keyof typeof state
    const handleChange = (name: State, value: boolean) => {
      state[name] = value
    }
    return () => {
      const { switchValue1, switchValue2 } = state
      return (
        <div class="page">
          {/* <!-- S Header --> */}
          <DocsHeader title="Switch"></DocsHeader>
          {/* <!-- E Header --> */}

          {/* <!-- S Body --> */}
          <div class="doc-body">
            {/* <!-- Basic usage --> */}
            <div class="panel">
              <div class="panel__title">Basic usage</div>
              <div class="panel__content no-padding">
                <div class="example-item">
                  <Form>
                    <Switch
                      title={switchValue1 ? 'Opening' : 'Closed'}
                      checked={switchValue1}
                      onChange={(v: boolean) => handleChange('switchValue1', v)}
                    />
                    <Switch
                      title={switchValue2 ? 'Opening' : 'Closed'}
                      checked={switchValue2}
                      onChange={(v: boolean) => handleChange('switchValue2', v)}
                    />
                    <Switch title="No border" border={false} />
                    <Switch title="Custom color" checked color="#f45" />
                  </Form>
                </div>
              </div>
            </div>

            {/* <!-- Disabled state --> */}
            <div class="panel">
              <div class="panel__title">Disabled state</div>
              <div class="panel__content no-padding">
                <div class="example-item">
                  <Form>
                    <Switch title="Not clickable" checked disabled />
                    <Switch title="Not clickable" border={false} disabled />
                  </Form>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- E Body --> */}
        </div>
      )
    }
  }
})
```

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
import { Form, Switch } from 'onebay-ui'
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

## API

| Properties  | Descrition                          | Type            | Default |
| ----------- | ----------------------------------- | --------------- | ------- |
| onChange    | trigger when the switch change      | (value) => void | -       |
| className   | class name                          | string          | -       |
| style | custom style                        | CSSProperties   | -       |
| checked     | whether is checked                  | boolean         | `false` |
| disabled    | whether is checked                  | boolean         | `false` |
| color       | switch background color             | string          | ''      |
| name        | the switch inner input element name | string          | ''      |
| border      | Whether to display the border       | boolean         | `true`  |
| title       | switch title                        | string          | ''      |