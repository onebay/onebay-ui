# textarea 

<DemoView />
<BackToTop />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```tsx
import { defineComponent, reactive } from 'vue'
import { Textarea } from 'onebay-ui'
import DocsHeader from '../../../components/DocHeader/DocsHeader'

export default defineComponent({
  name: 'TextareaPage',
  components: { Textarea },
  setup() {
    const state = reactive({
      value1: '',
      value2: '',
      value3: '',
      value4: ''
    })
    type State = keyof typeof state
    const handleChange = (stateName: State, value: string) => {
      state[stateName] = value
    }
    return () => {
      const { value1, value2, value3, value4 } = state
      return (
        <div class="page">
          {/* <!-- S Header --> */}
          <DocsHeader title="Textarea"></DocsHeader>
          {/* <!-- E Header --> */}

          {/* <!-- S Body --> */}
          <div class="doc-body">
            <div class="panel">
              <div class="panel__title">Basic usage</div>
              <div class="panel__content">
                <div class="example-item">
                  <Textarea
                    value={value1}
                    onChange={(v: string) => handleChange('value1', v)}
                    maxLength={200}
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
                    count={false}
                    value={value2}
                    onChange={(v: string) => handleChange('value2', v)}
                    maxLength="200"
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
                    textOverflowForbidden={false}
                    value={value3}
                    onChange={(v: string) => handleChange('value3', v)}
                    maxLength="200"
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
                    value={value4}
                    onChange={(v: string) => handleChange('value4', v)}
                    maxLength="200"
                    placeholder="Please enter your suggestion..."
                  />
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

```

</div> 

## API

| Properties            | Descrition                                                               | Type             | Default |
| --------------------- | ------------------------------------------------------------------------ | ---------------- | ------- |
| className             | class name                                                               | string           | -       |
| style           | custom style                                                             | CSSProperties    | -       |
| maxLength             | max length                                                               | number           | 200     |
| placeholder           | placeholder                                                              | string           | ''      |
| disabled              | whether is disabled                                                      | boolean          | `false` |
| focus                 | whether is focus                                                         | boolean          | `false` |
| textOverflowForbidden | Whether to prohibit text overflow                                        | boolean          | `true`  |
| height                | custom textarea height                                                   | number           | -       |
| count                 | Whether to calculate the textarea content length                         | boolean          | `true`  |
| value                 | Required, you need to update the value value through the onChange event | string           | ''      |
| onBlur                | The event triggered when the textarea loses focus                        | (e: Event)=>void | -       |
| onFocus               | The event triggered when the textarea get focus                          | (e: Event)=>void | -       |
| onChange              | trigger when the textarea change                                         | (value) => void  | -       |