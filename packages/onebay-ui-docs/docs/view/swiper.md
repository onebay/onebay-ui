# swiper 

<DemoView />
<BackToTop />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```tsx
import DocsHeader from '../../../components/DocHeader/DocsHeader'
import { defineComponent, reactive, onMounted } from 'vue'
import { Swiper } from 'onebay-ui'

export default defineComponent({
  name: 'SwiperPage',
  setup() {
    const state = reactive<{ dataItem: { name: number }[]; dataImgItem: { imgSrc: string }[] }>({
      dataItem: [],
      dataImgItem: []
    })
    const slideChangeEnd = (page: unknown) => {
      console.log(page)
    }
    const slideMove = (page: unknown) => {
      console.log(page)
    }
    const slideChangeStart = (page: unknown) => {
      console.log(page)
    }
    onMounted(() => {
      setTimeout(() => {

        state.dataImgItem = [
          {
            imgSrc:
              '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg'
          },
          {
            imgSrc:
              '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png'
          },
          {
            imgSrc:
              '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg'
          },
          {
            imgSrc:
              '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg'
          }
        ]
      }, 300)
    })
    return () => {
      const { dataImgItem } = state
      return (
        <div class="page">
          <DocsHeader title="Steps"></DocsHeader>

          <div class="doc-body">
            <div class="panel">
              <div class="panel__title">Seamless horizontal switching</div>
              <Swiper paginationVisible={true} direction="horizontal" swiperData={dataImgItem}>
                {
                  dataImgItem.map((item, index) => (
                    <div key={index} class="ob-swiper-slide">
                      <img src={item.imgSrc} style="max-width: 100%" />
                    </div>
                  ))
                }
              </Swiper>
            </div>
            <div class="panel">
              <div class="panel__title">horizontal switching</div>
              <Swiper
                paginationVisible={true}
                direction="horizontal"
                swiperData={dataImgItem}
                canDragging={false}
              >
                {
                  dataImgItem.map((item, index) => (
                    <div key={index} class="ob-swiper-slide">
                      <img src={item.imgSrc} style="max-width: 100%" />
                    </div>
                  ))
                }
              </Swiper>
            </div>
            <div class="panel">
              <div class="panel__title">horizontal cycle switching</div>
              <Swiper
                paginationVisible={true}
                direction="horizontal"
                swiperData={dataImgItem}
                loop={true}
                canDragging={false}
              >
                {
                  dataImgItem.map((item, index) => (
                    <div key={index} class="ob-swiper-slide">
                      <img src={item.imgSrc} style="max-width: 100%" />
                    </div>
                  ))
                }
              </Swiper>
            </div>
            <div class="panel">
              <div class="panel__title">Portrait auto play</div>
              <Swiper direction="vertical" autoPlay={3000} swiperData={dataImgItem}>
                {
                  dataImgItem.map((item, index) => (
                    <div key={index} class="ob-swiper-slide">
                      <img src={item.imgSrc} style="max-width: 100%" />
                    </div>
                  ))
                }
              </Swiper>
            </div>
            <div class="panel">
              <div class="panel__title">Swipe to lazy load pictures</div>
              <Swiper
                direction="horizontal"
                paginationClickable={true}
                swiperData={dataImgItem}
                lazyLoad={true}
                paginationVisible={true}
                onSlideChangeEnd={slideChangeEnd}
                onSlideMove={slideMove}
                onSlideChangeStart={slideChangeStart}
              >
                {
                  dataImgItem.map((item, index) => (
                    <div key={index} class="ob-swiper-slide">
                      <img src={item.imgSrc} style="max-width: 100%" class="ob-img-lazyload" />
                    </div>
                  ))
                }
              </Swiper>
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
    <DocsHeader title="Steps"></DocsHeader>

    <div class="doc-body">
      <div class="panel">
        <div class="panel__title">Seamless horizontal switching</div>
        <Swiper :paginationVisibile="true" direction="horizontal" :swiperData="dataImgItem">
          <div v-for="(item, index) in dataImgItem" :key="index" class="ob-swiper-slide">
            <img :src="item.imgSrc" style="max-width: 100%" />
          </div>
        </Swiper>
      </div>
      <div class="panel">
        <div class="panel__title">horizontal switching</div>
        <Swiper
          :paginationVisibile="true"
          direction="horizontal"
          :swiperData="dataImgItem"
          :canDragging="false"
          :paginationVisible="true"
        >
          <div v-for="(item, index) in dataImgItem" :key="index" class="ob-swiper-slide">
            <img :src="item.imgSrc" style="max-width: 100%" />
          </div>
        </Swiper>
      </div>
      <div class="panel">
        <div class="panel__title">horizontal cycle switching</div>
        <Swiper
          :paginationVisibile="true"
          direction="horizontal"
          :swiperData="dataImgItem"
          :loop="true"
          :canDragging="false"
          :paginationVisible="true"
        >
          <div v-for="(item, index) in dataImgItem" :key="index" class="ob-swiper-slide">
            <img :src="item.imgSrc" style="max-width: 100%" />
          </div>
        </Swiper>
      </div>
      <div class="panel">
        <div class="panel__title">Portrait auto play</div>
        <Swiper direction="vertical" :autoPlay="3000" :swiperData="dataImgItem">
          <div v-for="(item, index) in dataImgItem" :key="index" class="ob-swiper-slide">
            <img :src="item.imgSrc" style="max-width: 100%" />
          </div>
        </Swiper>
      </div>
      <div class="panel">
        <div class="panel__title">Swipe to lazy load pictures</div>
        <Swiper
          direction="horizontal"
          :paginationClickable="true"
          :swiperData="dataImgItem"
          :lazyLoad="true"
          :paginationVisible="true"
          @slideChangeEnd="slideChangeEnd"
          @slideMove="slideMove"
          @slideChangeStart="slideChangeStart"
        >
          <div v-for="(item, index) in dataImgItem" :key="index" class="ob-swiper-slide">
            <img :data-src="item.imgSrc" style="max-width: 100%" class="ob-img-lazyload" />
          </div>
        </Swiper>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { Swiper } from 'onebay-ui'
export default defineComponent({
  name: 'SwiperPage',
  components: {
    Swiper
  },
  data() {
    return {
      dataItem: [],
      dataImgItem: []
    }
  },
  mounted() {
    setTimeout(() => {
      this.dataItem = [
        {
          name: 1
        },
        {
          name: 2
        },
        {
          name: 3
        },
        {
          name: 4
        }
      ]

      this.dataImgItem = [
        {
          imgSrc:
            '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg'
        },
        {
          imgSrc:
            '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png'
        },
        {
          imgSrc:
            '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg'
        },
        {
          imgSrc:
            '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg'
        }
      ]
    }, 300)
  },
  methods: {
    slideChangeEnd(page) {
      console.log(page)
    },
    slideMove(page) {
      console.log(page)
    },
    slideChangeStart(page) {
      console.log(page)
    }
  }
})
</script>
<style lang="scss" scoped>
.page {
  .ob-swiper-slide {
    font-size: 24px;
    justify-content: center;
    align-items: center;
    display: flex;
  }
}
</style>

```

</div> 

## API

| Properties          | Descrition                                        | Type                         | Default    |
| ------------------- | ------------------------------------------------- | ---------------------------- | ---------- |
| className           | class name                                        | string                       | -          |
| style               | custom style                                      | CSSProperties                | -          |
| direction           | swiper direction                                  | `horizontal | vertical`      | horizontal |
| loop                | Whether to loop                                   | boolean                      | `false`    |
| paginationVisible   | whether is show pagination                        | boolean                      | `false`    |
| paginationClickable | Whether the pagination can be clicked             | boolean                      | `false`    |
| speed               | Scroll speed, default 500ms                       | number                       | 500        |
| canDragging         | Whether swiper can be dragged                     | boolean                      | `true`     |
| autoPlay            | Whether is auto play                              | number                       | 0          |
| initPage            | the init index                                    | number                       | 1          |
| lazyLoad            | whether is lazy loading                           | boolean                      | `false`    |
| lazyLoadUrl         | lazy load url, only work when `lazyLoad === true` | string                       | ''         |
| swiperData          | swiper data list                                  | []                           | []         |
| onSlideChangeStart  | Trigged when slide change start                   | (number, el)=>void           | -          |
| onSlideChangeMove   | Trigged when slide change move                    | (number, el)=>void           | -          |
| onSlideChangeEnd    | Trigged when slide change end                     | (number, el)=>void           | -          |
| onSlideRevertStart  | Trigged when slide revert start                   | (number, el)=>void           | -          |
| onSlideRevertEnd    | Trigged when slide revert end                     | (number, el)=>void           | -          |
| onChange            | Trigged when current page change                  | (currantPage, oldPage)=>void | -          |