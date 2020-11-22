# image-picker 

<DemoView />

``` javascript
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    return () => {
      return <h1>hello world</h1>
    }
  }
})
```

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```vue
<template>
  <div class="page">
    <!-- S Header -->
    <DocsHeader title="ImagePicker"></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <div class="doc-body">
      <!-- Basic usage -->
      <div class="panel">
        <div class="panel__title">Basic usage</div>
        <div class="panel__content no-padding">
          <div class="example-item">
            <ImagePicker :files="files1" :onChange="onChange.bind(this, 'files1')" />
          </div>
        </div>
      </div>

      <!-- Select multiple pictures -->
      <div class="panel">
        <div class="panel__title">Select multiple pictures</div>
        <div class="panel__content no-padding">
          <div class="example-item">
            <ImagePicker
              multiple
              :files="files2"
              :onChange="onChange.bind(this, 'files2')"
              :onFail="onFail"
              :onImageClick="onImageClick"
            />
          </div>
        </div>
      </div>

      <!-- Customize the number of rows -->
      <div class="panel">
        <div class="panel__title">Customize the number of rows</div>
        <div class="panel__content no-padding">
          <div class="example-item">
            <ImagePicker
              multiple
              :length="3"
              :files="files3"
              :onChange="onChange.bind(this, 'files3')"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { ImagePicker } from '/@/swift-ui/src/index.ts'

const dogaImages = [
  {
    url: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg'
  },
  {
    url: 'https://storage.360buyimg.com/mtd/home/221543234387016.jpg'
  },
  {
    url: 'https://storage.360buyimg.com/mtd/home/331543234387025.jpg'
  }
]

export default defineComponent({
  name: 'ImagePickerPage',
  components: {
    ImagePicker
  },
  data() {
    return {
      files1: Array.from(dogaImages),
      files2: Array.from(dogaImages),
      files3: Array.from(dogaImages),
      files4: dogaImages.concat([
        {
          url:
            'https://storage.360buyimg.com/mtd/home/36549825_887087111478302_5745542532574478336_n1543234831971.jpg'
        }
      ])
    }
  },
  methods: {
    onChange(stateName, files) {
      this[stateName] = files
    },

    onFail(mes) {
      this.$toast({
        text: `onFail: ${mes}`
      })
    },

    onImageClick(index, file) {
      this.$toast({
        text: `onImageClick: ${index}${file}`
      })
    }
  }
})
</script>

```

</div> 