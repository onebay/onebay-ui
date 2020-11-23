# accordion 

<DemoView />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```vue
<template>
  <div class="page">
    <DocsHeader title="Accordion 手风琴" />
    <div class="doc-body">
      <div class="panel">
        <div class="panel__title">基础用法</div>
        <div class="panel__content no-padding">
          <div class="example-item">
            <Accordion @click="onClick('value1')" title="标题一" :open="value1">
              <List :hasBorder="false">
                <ListItem
                  title="标题文字"
                  thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
                />
                <ListItem
                  title="标题文字"
                  note="描述信息"
                  thumb="http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
                />
              </List>
            </Accordion>
            <Accordion :open="value2" title="默认开启" @click="onClick('value2')">
              <List :hasBorder="false">
                <ListItem
                  title="标题文字"
                  thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
                />
                <ListItem
                  title="标题文字"
                  note="描述信息"
                  thumb="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
                />
                <ListItem
                  title="标题文字"
                  note="描述信息"
                  thumb="http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
                />
              </List>
            </Accordion>
          </div>
        </div>
      </div>

      <!-- 配置图标 -->
      <div class="panel">
        <div class="panel__title">配置图标</div>
        <div class="panel__content no-padding">
          <div class="example-item">
            <Accordion
              title="标题三"
              :open="value3"
              :icon="{ value: 'tags', color: '#77a1fd' }"
              @click="onClick('value3')"
            >
              <List :hasBorder="false">
                <ListItem
                  title="标题文字"
                  thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
                />
                <ListItem
                  title="标题文字"
                  note="描述信息"
                  thumb="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
                />
              </List>
            </Accordion>
          </div>
        </div>
      </div>

      <!-- 包含描述信息 -->
      <div class="panel">
        <div class="panel__title">包含描述信息</div>
        <div class="panel__content no-padding">
          <div class="example-item">
            <Accordion
              title="标题三"
              note="描述信息"
              :open="value4"
              :icon="{ value: 'tags', color: '#77a1fd' }"
              @click="onClick('value4')"
            >
              <List :hasBorder="false">
                <ListItem
                  title="标题文字"
                  thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
                />
                <ListItem
                  title="标题文字"
                  note="描述信息"
                  thumb="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
                />
                <ListItem
                  title="标题文字"
                  note="描述信息"
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
import { Accordion, List, ListItem } from '/@/swift-ui/src/index.ts'
export default defineComponent({
  name: 'AccordionPage',
  components: {
    Accordion,
    List,
    ListItem
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