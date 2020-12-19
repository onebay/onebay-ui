# timeline 

<DemoView />
<BackTop />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```tsx
import { defineComponent } from 'vue'
import { Timeline } from '/@/onebay-ui/src/index.ts'
import DocsHeader from '../../../components/DocHeader/DocsHeader'

export default defineComponent({
  name: 'TimelinePage',
  components: { Timeline },
  setup() {
    return () => {
      return (
        <div class="page">
          <DocsHeader title="Timeline"></DocsHeader>

          <div class="doc-body">
            {/* <!-- Basic usage --> */}
            <div class="panel">
              <div class="panel__title">Basic usage</div>
              <div class="panel__content">
                <div class="example-item">
                  <Timeline
                    items={[
                      { title: 'brush teeth' },
                      { title: 'Eat breakfast' },
                      { title: 'work' },
                      { title: 'Sleep' }
                    ]}
                  ></Timeline>
                </div>
              </div>
            </div>

            {/* <!-- Custom color --> */}
            <div class="panel">
              <div class="panel__title">Custom color</div>
              <div class="panel__content">
                <div class="example-item">
                  <Timeline
                    items={[
                      { title: 'brush teeth' },
                      { title: 'Eat breakfast', color: 'green' },
                      { title: 'work', color: 'red' },
                      { title: 'Sleep', color: 'yellow' }
                    ]}
                  ></Timeline>
                </div>
              </div>
            </div>

            {/* <!-- Custom icon --> */}
            <div class="panel">
              <div class="panel__title">Custom icon</div>
              <div class="panel__content">
                <div class="example-item">
                  <Timeline
                    items={[
                      { title: 'brush teeth', icon: 'check-circle' },
                      { title: 'Eat breakfast', icon: 'clock' },
                      { title: 'work', icon: 'clock' },
                      { title: 'Sleep', icon: 'clock' }
                    ]}
                  ></Timeline>
                </div>
              </div>
            </div>

            {/* <!-- Ghost node --> */}
            <div class="panel">
              <div class="panel__title">Ghost node</div>
              <div class="panel__content">
                <div class="example-item">
                  <Timeline
                    pending
                    items={[
                      { title: 'brush teeth' },
                      { title: 'Eat breakfast' },
                      { title: 'work' },
                      { title: 'Sleep' }
                    ]}
                  ></Timeline>
                </div>
              </div>
            </div>

            {/* <!-- Rich content --> */}
            <div class="panel">
              <div class="panel__title">Rich content</div>
              <div class="panel__content">
                <div class="example-item">
                  <Timeline
                    pending
                    items={[
                      {
                        title: 'brush teeth',
                        content: ['About 8:00'],
                        icon: 'check-circle'
                      },
                      {
                        title: 'Eat breakfast',
                        content: ['Milk + bread', 'Remember to take medicine after meals'],
                        icon: 'clock'
                      },
                      {
                        title: 'work',
                        content: ['Check Mail', 'Write PPT', 'Send PPT to the leader'],
                        icon: 'clock'
                      },
                      { title: 'Sleep', content: ['Before 23:00'], icon: 'clock' }
                    ]}
                  ></Timeline>
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
  <div class="page">
    <DocsHeader title="Timeline"></DocsHeader>

    <div class="doc-body">
      <!-- Basic usage -->
      <div class="panel">
        <div class="panel__title">Basic usage</div>
        <div class="panel__content">
          <div class="example-item">
            <Timeline
              :items="[
                { title: 'brush teeth' },
                { title: 'Eat breakfast' },
                { title: 'work' },
                { title: 'Sleep' }
              ]"
            ></Timeline>
          </div>
        </div>
      </div>

      <!-- Custom color -->
      <div class="panel">
        <div class="panel__title">Custom color</div>
        <div class="panel__content">
          <div class="example-item">
            <Timeline
              :items="[
                { title: 'brush teeth' },
                { title: 'Eat breakfast', color: 'green' },
                { title: 'work', color: 'red' },
                { title: 'Sleep', color: 'yellow' }
              ]"
            ></Timeline>
          </div>
        </div>
      </div>

      <!-- Custom icon -->
      <div class="panel">
        <div class="panel__title">Custom icon</div>
        <div class="panel__content">
          <div class="example-item">
            <Timeline
              :items="[
                { title: 'brush teeth', icon: 'check-circle' },
                { title: 'Eat breakfast', icon: 'clock' },
                { title: 'work', icon: 'clock' },
                { title: 'Sleep', icon: 'clock' }
              ]"
            ></Timeline>
          </div>
        </div>
      </div>

      <!-- Ghost node -->
      <div class="panel">
        <div class="panel__title">Ghost node</div>
        <div class="panel__content">
          <div class="example-item">
            <Timeline
              pending
              :items="[
                { title: 'brush teeth' },
                { title: 'Eat breakfast' },
                { title: 'work' },
                { title: 'Sleep' }
              ]"
            ></Timeline>
          </div>
        </div>
      </div>

      <!-- Rich content -->
      <div class="panel">
        <div class="panel__title">Rich content</div>
        <div class="panel__content">
          <div class="example-item">
            <Timeline
              pending
              :items="[
                {
                  title: 'brush teeth',
                  content: ['About 8:00'],
                  icon: 'check-circle'
                },
                {
                  title: 'Eat breakfast',
                  content: ['Milk + bread', 'Remember to take medicine after meals'],
                  icon: 'clock'
                },
                {
                  title: 'work',
                  content: ['Check Mail', 'Write PPT', 'Send PPT to the leader'],
                  icon: 'clock'
                },
                { title: 'Sleep', content: ['Before 23:00'], icon: 'clock' }
              ]"
            ></Timeline>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Timeline } from '/@/onebay-ui/src/index.ts'
export default defineComponent({
  name: 'TimelinePage',
  components: { Timeline }
})
</script>

```

</div> 