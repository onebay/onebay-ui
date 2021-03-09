# accordion 

<DemoView />
<BackToTop />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```tsx
import { defineComponent, reactive } from 'vue'
import { Accordion, List } from 'onebay-ui'
import DocsHeader from '../../../components/DocHeader/DocsHeader'
const { ListItem } = List
export default defineComponent({
  name: 'AccordionPage',
  setup() {
    const state = reactive({
      value1: false,
      value2: true,
      value3: false,
      value4: false
    })
    type State = keyof typeof state
    const onClick = (stateName: State) => {
      state[stateName] = !state[stateName]
    }
    return () => {
      const { value1, value2, value3, value4 } = state
      return (
        <div class="page">
          <DocsHeader title="Accordion" />
          <div class="doc-body">
            <div class="panel">
              <div class="panel__title">Basic usage</div>
              <div class="panel__content no-padding">
                <div class="example-item">
                  <Accordion onClick={() => onClick('value1')} title="title1" open={value1}>
                    <List hasBorder={false}>
                      <ListItem
                        title="title text"
                        thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
                      />
                      <ListItem
                        title="title text"
                        note="description info"
                        thumb="http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
                      />
                    </List>
                  </Accordion>
                  <Accordion open={value2} title="default open" onClick={() => onClick('value2')}>
                    <List hasBorder={false}>
                      <ListItem
                        title="title text"
                        thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
                      />
                      <ListItem
                        title="title text"
                        note="description info"
                        thumb="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
                      />
                      <ListItem
                        title="title text"
                        note="description info"
                        thumb="http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
                      />
                    </List>
                  </Accordion>
                </div>
              </div>
            </div>

            {/* <!-- setting icon --> */}
            <div class="panel">
              <div class="panel__title">setting icon</div>
              <div class="panel__content no-padding">
                <div class="example-item">
                  <Accordion
                    title="title3"
                    open={value3}
                    icon={{ value: 'tags', color: '#77a1fd' }}
                    onClick={() => onClick('value3')}
                  >
                    <List hasBorder={false}>
                      <ListItem
                        title="title text"
                        thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
                      />
                      <ListItem
                        title="title text"
                        note="description info"
                        thumb="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
                      />
                    </List>
                  </Accordion>
                </div>
              </div>
            </div>

            {/* <!-- description info --> */}
            <div class="panel">
              <div class="panel__title">description info</div>
              <div class="panel__content no-padding">
                <div class="example-item">
                  <Accordion
                    title="title4"
                    note="description info"
                    open={value4}
                    icon={{ value: 'tags', color: '#77a1fd' }}
                    onClick={() => onClick('value4')}
                  >
                    <List hasBorder={false}>
                      <ListItem
                        title="title text"
                        thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
                      />
                      <ListItem
                        title="title text"
                        note="description info"
                        thumb="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
                      />
                      <ListItem
                        title="title text"
                        note="description info"
                        thumb="http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
                      />
                    </List>
                  </Accordion>
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
    <DocsHeader title="Accordion" />
    <div class="doc-body">
      <div class="panel">
        <div class="panel__title">Basic usage</div>
        <div class="panel__content no-padding">
          <div class="example-item">
            <Accordion @click="onClick('value1')" title="title1" :open="value1">
              <List :hasBorder="false">
                <ListItem
                  title="title text"
                  thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
                />
                <ListItem
                  title="title text"
                  note="description info"
                  thumb="http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
                />
              </List>
            </Accordion>
            <Accordion :open="value2" title="default open" @click="onClick('value2')">
              <List :hasBorder="false">
                <ListItem
                  title="title text"
                  thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
                />
                <ListItem
                  title="title text"
                  note="description info"
                  thumb="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
                />
                <ListItem
                  title="title text"
                  note="description info"
                  thumb="http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
                />
              </List>
            </Accordion>
          </div>
        </div>
      </div>

      <!-- setting icon -->
      <div class="panel">
        <div class="panel__title">setting icon</div>
        <div class="panel__content no-padding">
          <div class="example-item">
            <Accordion
              title="title3"
              :open="value3"
              :icon="{ value: 'tags', color: '#77a1fd' }"
              @click="onClick('value3')"
            >
              <List :hasBorder="false">
                <ListItem
                  title="title text"
                  thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
                />
                <ListItem
                  title="title text"
                  note="description info"
                  thumb="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
                />
              </List>
            </Accordion>
          </div>
        </div>
      </div>

      <!-- description info -->
      <div class="panel">
        <div class="panel__title">description info</div>
        <div class="panel__content no-padding">
          <div class="example-item">
            <Accordion
              title="title4"
              note="description info"
              :open="value4"
              :icon="{ value: 'tags', color: '#77a1fd' }"
              @click="onClick('value4')"
            >
              <List :hasBorder="false">
                <ListItem
                  title="title text"
                  thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
                />
                <ListItem
                  title="title text"
                  note="description info"
                  thumb="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
                />
                <ListItem
                  title="title text"
                  note="description info"
                  thumb="http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
                />
              </List>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Accordion, List } from 'onebay-ui'
export default defineComponent({
  name: 'AccordionPage',
  components: {
    Accordion,
    List,
    ListItem: List.ListItem
  },
  data() {
    return {
      value1: false,
      value2: true,
      value3: false,
      value4: false
    }
  },
  methods: {
    onClick(stateName) {
      this[stateName] = !this[stateName]
    }
  }
})
</script>

```

</div> 

## API

| Properties  | Descrition                        | Type                             | Default       |
| ----------- | --------------------------------- | -------------------------------- | ------------- |
| className   | class name                        | string                           | -             |
| style | custom style                      | CSSProperties                    | -             |
| open        | whether is open                   | boolean                          | `false`       |
| title       | title                             | string                           | -             |
| note        | note                              | string                           | -             |
| icon        | icon                              | { value: string, color: string } | { value: '' } |
| hasBorder   | Whether there is a head underline | boolean                          | `true`        |
| isAnimation | Whether open animation            | boolean                          | `true`        |
| onClick     | event callback on click the head  | (open, event)=>void              | -             |