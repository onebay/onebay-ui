# activity-indicator 

<DemoView />
<BackToTop />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```tsx
import { defineComponent, ref } from 'vue'
import { ActivityIndicator, Switch, Toast } from 'onebay-ui'
import DocsHeader from '../../../components/DocHeader/DocsHeader'
import './index.scss'

export default defineComponent({
  name: 'ActivityIndicatorPage',
  components: {
    ActivityIndicator,
    Switch
  },
  setup() {
    const isOpened = ref(true)
    const handleChange = (value: boolean) => {
      isOpened.value = value
    }
    const showToast = (name: string) => {
      Toast({
        text: name
      })
    }
    return () => {
      return (
        <div class="page activity-indicator-page">
          <DocsHeader title="ActivityIndicator" />
          <div class="doc-body">
            <div class="panel">
              <div class="panel__title">Custom size</div>
              <div class="panel__content">
                <div class="example-item">
                  <div class="subitem"><ActivityIndicator size={20} /></div>
                  <div class="subitem"><ActivityIndicator size={24} /></div>
                  <div class="subitem"><ActivityIndicator size={32} /></div>
                </div>
              </div>
            </div>
            <div class="panel">
              <div class="panel__title">Custom color</div>
              <div class="panel__content">
                <div class="example-item">
                  <div class="subitem"><ActivityIndicator color="#13CE66" /></div>
                  <div class="subitem"><ActivityIndicator color="#FF4949" /></div>
                  <div class="subitem"><ActivityIndicator color="#C9C9C9" /></div>
                </div>
              </div>
            </div>
            <div class="panel">
              <div class="panel__title">Custom text</div>
              <div class="panel__content">
                <div class="example-item">
                  <ActivityIndicator>loading...</ActivityIndicator>
                </div>
              </div>
            </div>
            <div class="panel">
              <div class="panel__title">Switch status</div>
              <div class="panel__content">
                <Switch
                  border={false}
                  title={isOpened.value ? 'opening' : 'closed'}
                  checked={isOpened.value}
                  onChange={handleChange}
                />
                <div class="example-item">
                  <ActivityIndicator content="loading..." isOpened={isOpened.value} />
                </div>
              </div>
            </div>
            <div class="panel">
              <div class="panel__title">
                Vertical and horizontal center
              </div>
              <div class="panel__content">
                <div class="example-item example-item--center">
                  <ActivityIndicator mode="center" />
                </div>
                <div class="example-item example-item--center">
                  <ActivityIndicator mode="center" content="Loading..." />
                </div>
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
  <div class="page activity-indicator-page">
    <DocsHeader title="ActivityIndicator" />
    <div class="doc-body">
      <!-- Custom size -->
      <div class="panel">
        <div class="panel__title">Custom size</div>
        <div class="panel__content">
          <div class="example-item">
            <div class="subitem"><ActivityIndicator :size="20" /></div>
            <div class="subitem"><ActivityIndicator :size="24" /></div>
            <div class="subitem"><ActivityIndicator :size="32" /></div>
          </div>
        </div>
      </div>
      <!-- Custom color -->
      <div class="panel">
        <div class="panel__title">Custom color</div>
        <div class="panel__content">
          <div class="example-item">
            <div class="subitem"><ActivityIndicator color="#13CE66" /></div>
            <div class="subitem"><ActivityIndicator color="#FF4949" /></div>
            <div class="subitem"><ActivityIndicator color="#C9C9C9" /></div>
          </div>
        </div>
      </div>
      <!-- Custom text -->
      <div class="panel">
        <div class="panel__title">Custom text</div>
        <div class="panel__content">
          <div class="example-item">
            <ActivityIndicator>loading...</ActivityIndicator>
          </div>
        </div>
      </div>
      <!-- Switch status -->
      <div class="panel">
        <div class="panel__title">Switch status</div>
        <div class="panel__content">
          <Switch
            :border="false"
            :title="isOpened ? 'opening' : 'closed'"
            :checked="isOpened"
            @change="handleChange"
          />
          <div class="example-item">
            <ActivityIndicator content="loading..." :is-opened="isOpened" />
          </div>
        </div>
      </div>
      <!-- Vertical and horizontal center -->
      <div class="panel">
        <div class="panel__title">Vertical and horizontal center</div>
        <div class="panel__content">
          <div class="example-item example-item--center">
            <ActivityIndicator mode="center" />
          </div>
          <div class="example-item example-item--center">
            <ActivityIndicator mode="center" content="Loading..." />
          </div>
        </div>
      </div>
    </div>
    <!-- E Body -->
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { ActivityIndicator, Switch } from 'onebay-ui'
import './index.scss'
export default defineComponent({
  name: 'ActivityIndicatorPage',
  components: {
    ActivityIndicator,
    Switch
  },
  data() {
    return {
      isOpened: true
    }
  },
  methods: {
    handleChange(value) {
      this.isOpened = value
    }
  }
})
</script>

```

</div> 

## API

| Properties | Descrition               | Type              | Default   |
| ---------- | ------------------------ | ----------------- | --------- |
| mode       | the element type         | `center`,`normal` | `normal`  |
| size       | the loading element size | string            | `#6190E8` |
| content    | the element content text | string            | -         |
| isOpened   | whether is show          | boolean           | `true`      |
| color      | loading color            | string            | -         |
| className  | class name               | string            | -         |