# search-bar 

<DemoView />
<BackToTop />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```tsx
import { defineComponent, reactive } from 'vue'
import { SearchBar, Toast } from 'onebay-ui'
import DocsHeader from '../../../components/DocHeader/DocsHeader'

export default defineComponent({
  name: 'SearchBarPage',
  setup() {
    const state = reactive({
      value1: '',
      value2: '',
      value3: '',
      value4: ''
    })
    type State = keyof typeof state
    const onChange = (stateName: State, value: string) => {
      state[stateName] = value
    }
    const onActionClick = () => {
      Toast({
        text: 'start search',
        status: 'success'
      })
    }
    return () => {
      const { value1, value2, value3, value4 } = state
      return (
        <div class="page">
          {/* <!-- S Header --> */}
          <DocsHeader title="SearchBar"></DocsHeader>
          {/* <!-- E Header --> */}
          {/* <!-- S Body --> */}
          <div class="doc-body">
            {/* <!-- Basic usage --> */}
            <div class="panel">
              <div class="panel__title">Basic usage</div>
              <div class="panel__content no-padding">
                <div class="component-item">
                  <SearchBar
                    value={value1}
                    onChange={(val: string) => onChange('value1', val)}
                    onActionClick={onActionClick}
                  />
                </div>
              </div>
            </div>

            {/* <!-- Custom button text and click event --> */}
            <div class="panel">
              <div class="panel__title">Custom button text and click event</div>
              <div class="panel__content no-padding">
                <div class="component-item">
                  <SearchBar
                    actionName="Check"
                    value={value2}
                    onChange={(val: string) => onChange('value2', val)}
                    onActionClick={onActionClick}
                  />
                </div>
              </div>
            </div>

            {/* <!-- Always show button --> */}
            <div class="panel">
              <div class="panel__title">Always show button</div>
              <div class="panel__content no-padding">
                <div class="component-item">
                  <SearchBar
                    placeholder="Please enter the ISBN number"
                    showActionButton
                    value={value3}
                    onChange={(val: string) => onChange('value3', val)}
                    onActionClick={onActionClick}
                  />
                </div>
              </div>
            </div>

            {/* <!-- Custom input box type --> */}
            <div class="panel">
              <div class="panel__title">Custom input box type</div>
              <div class="panel__content no-padding">
                <div class="component-item">
                  <SearchBar
                    placeholder="input number"
                    inputType="number"
                    value={value4}
                    onChange={(val: string) => onChange('value4', val)}
                    onActionClick={onActionClick}
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
    <DocsHeader title="SearchBar"></DocsHeader>
    <!-- E Header -->
    <!-- S Body -->
    <div class="doc-body">
      <!-- Basic usage -->
      <div class="panel">
        <div class="panel__title">Basic usage</div>
        <div class="panel__content no-padding">
          <div class="component-item">
            <SearchBar
              :value="value1"
              :onChange="onChange.bind(this, 'value1')"
              :onActionClick="onActionClick"
            />
          </div>
        </div>
      </div>

      <!-- Custom button text and click event -->
      <div class="panel">
        <div class="panel__title">Custom button text and click event</div>
        <div class="panel__content no-padding">
          <div class="component-item">
            <SearchBar
              actionName="Check"
              :value="value2"
              :onChange="onChange.bind(this, 'value2')"
              :onActionClick="onActionClick"
            />
          </div>
        </div>
      </div>

      <!-- Always show button -->
      <div class="panel">
        <div class="panel__title">Always show button</div>
        <div class="panel__content no-padding">
          <div class="component-item">
            <SearchBar
              placeholder="Please enter the ISBN number"
              showActionButton
              :value="value3"
              :onChange="onChange.bind(this, 'value3')"
              :onActionClick="onActionClick"
            />
          </div>
        </div>
      </div>

      <!-- Custom input box type -->
      <div class="panel">
        <div class="panel__title">Custom input box type</div>
        <div class="panel__content no-padding">
          <div class="component-item">
            <SearchBar
              placeholder="input number"
              inputType="number"
              :value="value4"
              :onChange="onChange.bind(this, 'value4')"
              :onActionClick="onActionClick"
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
import { SearchBar, Toast } from 'onebay-ui'
export default defineComponent({
  name: 'SearchBarPage',
  components: {
    SearchBar
  },
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: ''
    }
  },
  methods: {
    onChange(stateName, value) {
      this[stateName] = value
    },
    onActionClick() {
      Toast({
        text: 'start search',
        status: 'success'
      })
    }
  }
})
</script>

```

</div> 

## API

| Properties       | Descrition                                                                                                                                           | Type                   | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ------- |
| value            | Required, the current value of the input box, you needs to update the value value through the onChange event                                         | number                 | 0       |
| className        | class name                                                                                                                                           | string                 | -       |
| style      | custom style                                                                                                                                         | CSSProperties          | -       |
| placeholder      | placeholder text                                                                                                                                     | string                 | Search  |
| actionName       | Right button text                                                                                                                                    | string                 | Search  |
| maxLength        | max length                                                                                                                                           | number                 | 140     |
| fixed            | Whether to fix the top                                                                                                                               | boolean                | `false` |
| focus            | whether is focus                                                                                                                                     | boolean                | `false` |
| disabled         | whether is disabled                                                                                                                                  | boolean                | `false` |
| showActionButton | whether to always show the right button                                                                                                              | boolean                | `false` |
| inputType        | input type                                                                                                                                           | string                 | `text`  |
| onActionClick    | Click the button on the right to trigger the event                                                                                                   | (event) => void        | -       |
| onChange         | Required, the event triggered when the value of the input box changes. Developers need to update the value change through the onChange event.        | (value, event) => void | -       |
| onClear          | The event is triggered when the clear button is clicked, if it is not provide, the onChange function is called by default by passing an empty string | () => void             | -       |
| onFocus          | Triggered when the input is focused                                                                                                                  | (event) => void        | -       |
| onBlur           | Event triggered when the input loses focus                                                                                                           | (event) => void        | -       |