# icon 

<DemoView />
<BackTop />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```vue
<template>
  <div>
    <DocsHeader title="ICON" />
    <div class="doc-body">
      <div v-for="(item, index) in types" :key="index" class="panel">
        <div class="panel__title" @click="handleClick">
          {{ item.name }}
        </div>
        <div class="panel__content">
          <div class="icon-list">
            <div
              v-for="(icon, childIndex) in icons[item.type]"
              :key="childIndex"
              class="icon-list__item"
            >
              <div class="icon-list__icon">
                <i
                  :class="`ob-icon ob-icon-${icon}`"
                  :style="{
                    color: iconColor,
                    fontSize: `${iconSize}px`
                  }"
                ></i>
              </div>
              <div class="icon-list__name">
                {{ icon }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import './index.scss'
import icons from './data'
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      iconSize: 30,
      icons: icons,
      iconColor: '#999',
      types: [
        {
          type: 'main',
          name: 'Main'
        },
        {
          type: 'file',
          name: 'File'
        },
        {
          type: 'text',
          name: 'Text'
        },
        {
          type: 'arrow',
          name: 'Arrow'
        },
        {
          type: 'media',
          name: 'Media'
        },
        {
          type: 'photo',
          name: 'Photo'
        },
        {
          type: 'logo',
          name: 'Logo'
        }
      ]
    }
  },
  methods: {
    handleClick(event) {
      console.log(event)
    }
  }
})
</script>

```

</div> 