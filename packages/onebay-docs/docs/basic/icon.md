# icon 

<DemoView />
<BackToTop />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```tsx
import { defineComponent, reactive } from 'vue'
import icons from './data'
import DocsHeader from '../../../components/DocHeader/DocsHeader'
import './index.scss'

type IconsKey = keyof typeof icons

type State = {
  iconSize: number,
  iconColor: string,
  types: { type: IconsKey, name: string }[]
}

export default defineComponent({
  setup() {
    const handleClick = (event: Event) => {
      console.log(event)
    }
    const state = reactive<State>({
      iconSize: 30,
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
    })

    return () => {
      const { iconColor, iconSize, types } = state
      return (
        <div>
          <DocsHeader title="ICON" />
          <div class="doc-body">
            {
              types.map((item: { type: IconsKey, name: string }, index: number) => (
                <div key={`${index}`} class="panel">
                  <div class="panel__title" onClick={handleClick}>
                    {item.name}
                  </div>
                  <div class="panel__content">
                    <div class="icon-list">
                      {
                        icons[item.type].map((icon: string, childIndex: number) => (
                          <div
                            key={`${childIndex}`}
                            class="icon-list__item"
                          >
                            <div class="icon-list__icon">
                              <i
                                class={`ob-icon ob-icon-${icon}`}
                                style={{
                                  color: iconColor,
                                  fontSize: `${iconSize}px`
                                }}
                              ></i>
                            </div>
                            <div class="icon-list__name">
                              {{ icon }}
                            </div>
                          </div>
                        ))
                      }

                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      )
    }
  }
})
```

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