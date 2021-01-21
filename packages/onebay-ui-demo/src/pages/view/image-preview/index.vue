<template>
  <div class="page">
    <!-- S Header -->
    <DocsHeader title="ImagePreview"></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <div class="doc-body">
      <!-- Basic usage -->
      <div class="panel">
        <div class="panel__title">Basic usage</div>
        <Button @click="toggleShow">toggle show</Button>
      </div>
      <div class="panel">
        <div class="panel__title">startPosition = 2</div>
        <Button @click="changeStartPosition">toggle show</Button>
      </div>
      <div class="panel">
        <div class="panel__title">paginationVisible = false</div>
        <Button @click="changePaginationVisible">toggle show</Button>
      </div>
    </div>
    <!-- E Body -->
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { Button, Swiper, ImagePreview } from 'onebay-ui'

const imgs = [
  '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg',
  '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png',
  '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg',
  '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg'
]

export default defineComponent({
  name: 'ImagePreviewPage',
  components: {
    Button,
    Swiper
  },
  data() {
    return {
      imgs,
      show: false,
      paginationVisible: true,
      startPosition: 1
    }
  },
  methods: {
    toggleShow() {
      ImagePreview({
        images: imgs
      })
    },
    changeStartPosition() {
      ImagePreview({
        images: imgs,
        startPosition: 2,
        paginationVisible: this.paginationVisible
      })
    },
    changePaginationVisible() {
      ImagePreview({
        images: imgs,
        paginationVisible: false
      })
    }
  }
})
</script>
