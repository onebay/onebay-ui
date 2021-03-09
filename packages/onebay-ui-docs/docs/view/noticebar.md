# noticebar 

<DemoView />
<BackToTop />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```tsx
import DocsHeader from '../../../components/DocHeader/DocsHeader'
import { defineComponent } from 'vue'
import { Noticebar, Modal } from 'onebay-ui'
import './index.scss'
export default defineComponent({
  name: 'NoticebarPage',
  components: {
    Noticebar
  },
  setup() {
    const onGotoMore = () => {
      Modal({
        title: 'Click more!',
        cancelText: 'Cancel'
      })
    }
    return () => {
      return (
        <div class="page">
          {/* <!-- S Header --> */}
          <DocsHeader title="NoticeBar"></DocsHeader>
          {/* <!-- E Header --> */}

          {/* <!-- S Body --> */}
          <div class="doc-body">
            {/* <!-- text --> */}
            <div class="panel">
              <div class="panel__title">text</div>
              <div class="panel__content">
                <div class="bar-item">
                  <Noticebar single>
                    [single line] This is NoticeBar,This is NoticeBar,This is NoticeBar
                </Noticebar>
                </div>
                <div class="bar-item">
                  <Noticebar>
                    [multiple line] This is NoticeBar,This is NoticeBar,This is NoticeBar,This is
                    NoticeBar,This is NoticeBar
                </Noticebar>
                </div>
              </div>
            </div>

            {/* <!-- marquee --> */}
            <div class="panel">
              <div class="panel__title">marquee</div>
              <div class="panel__content">
                <div class="bar-item">
                  <Noticebar marquee>
                    [text]This is NoticeBar,This is NoticeBar,This is NoticeBar[end]
                </Noticebar>
                </div>
                <div class="bar-item">
                  <Noticebar marquee icon="volume-plus">
                    [icon]This is NoticeBar,This is NoticeBar,This is NoticeBarThis is NoticeBar,This is
                    NoticeBar,This is NoticeBar[end]
                </Noticebar>
                </div>
                <div class="bar-item">
                  <Noticebar marquee>
                    [long text]This is NoticeBar,This is NoticeBar,This is NoticeBarThis is NoticeBar,This
                    is NoticeBar,This is NoticeBarThis is NoticeBar,This is NoticeBar,This is
                    NoticeBarThis is NoticeBar,This is NoticeBar,This is NoticeBarThis is NoticeBar,This
                    is NoticeBar,This is NoticeBar[end]
                </Noticebar>
                </div>
              </div>
            </div>

            {/* <!-- icon --> */}
            <div class="panel">
              <div class="panel__title">icon</div>
              <div class="panel__content">
                <div class="bar-item">
                  <Noticebar icon="volume-plus" single>
                    [single line] This is NoticeBar,This is NoticeBar,This is NoticeBar
                </Noticebar>
                </div>
                <div class="bar-item">
                  <Noticebar icon="volume-plus">
                    [multiple line] This is NoticeBar,This is NoticeBar,This is NoticeBar,This is
                    NoticeBar,This is NoticeBar
                </Noticebar>
                </div>
              </div>
            </div>

            {/* <!-- more --> */}
            <div class="panel">
              <div class="panel__title">more</div>
              <div class="panel__content">
                <div class="bar-item">
                  <Noticebar showMore single onGotoMore={onGotoMore}>
                    [single line] This is NoticeBar,This is NoticeBar,This is NoticeBar
                </Noticebar>
                </div>
                <div class="bar-item">
                  <Noticebar showMore icon="volume-plus" single onGotoMore={onGotoMore}>
                    [single line] This is NoticeBar,This is NoticeBar,This is NoticeBar
                </Noticebar>
                </div>
                <div class="bar-item">
                  <Noticebar showMore moreText="more content" onGotoMore={onGotoMore}>
                    [multiple line] This is NoticeBar,This is NoticeBar,This is NoticeBar,This is
                    NoticeBar,This is NoticeBar
                </Noticebar>
                </div>
                <div class="bar-item">
                  <Noticebar showMore moreText="more content" icon="volume-plus" onGotoMore={onGotoMore}>
                    [multiple line] This is NoticeBar,This is NoticeBar,This is NoticeBar,This is
                    NoticeBar,This is NoticeBar
                </Noticebar>
                </div>
              </div>
            </div>

            {/* <!-- close button --> */}
            <div class="panel">
              <div class="panel__title">close button</div>
              <div class="panel__content">
                <div class="bar-item">
                  <Noticebar close single>
                    [single line] This is NoticeBar,This is NoticeBar,This is NoticeBar
                </Noticebar>
                </div>
                <div class="bar-item">
                  <Noticebar close icon="volume-plus" single>
                    [single line] This is NoticeBar,This is NoticeBar,This is NoticeBar
                </Noticebar>
                </div>
                <div class="bar-item">
                  <Noticebar close onGotoMore={onGotoMore} single showMore>
                    [single line] This is NoticeBar,This is NoticeBar,This is NoticeBar
                </Noticebar>
                </div>
                <div class="bar-item">
                  <Noticebar close icon="volume-plus" showMore onGotoMore={onGotoMore} single>
                    [single line] This is NoticeBar,This is NoticeBar,This is NoticeBar
                </Noticebar>
                </div>
                <div class="bar-item">
                  <Noticebar close>
                    [multiple line] This is NoticeBar,This is NoticeBar,This is NoticeBar,This is
                    NoticeBar,This is NoticeBar
                </Noticebar>
                </div>
                <div class="bar-item">
                  <Noticebar close>
                    [multiple line] This is NoticeBar,This is NoticeBar,This is NoticeBar,This is
                    NoticeBar,This is NoticeBar
                </Noticebar>
                </div>
                <div class="bar-item">
                  <Noticebar close icon="volume-plus">
                    [multiple line] This is NoticeBar,This is NoticeBar,This is NoticeBar,This is
                    NoticeBar,This is NoticeBar
                </Noticebar>
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
    <DocsHeader title="NoticeBar"></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <div class="doc-body">
      <!-- text -->
      <div class="panel">
        <div class="panel__title">text</div>
        <div class="panel__content">
          <div class="bar-item">
            <Noticebar single>
              [single line] This is NoticeBar,This is NoticeBar,This is NoticeBar
            </Noticebar>
          </div>
          <div class="bar-item">
            <Noticebar>
              [multiple line] This is NoticeBar,This is NoticeBar,This is NoticeBar,This is
              NoticeBar,This is NoticeBar
            </Noticebar>
          </div>
        </div>
      </div>

      <!-- marquee -->
      <div class="panel">
        <div class="panel__title">marquee</div>
        <div class="panel__content">
          <div class="bar-item">
            <Noticebar marquee>
              [text]This is NoticeBar,This is NoticeBar,This is NoticeBar[end]
            </Noticebar>
          </div>
          <div class="bar-item">
            <Noticebar marquee icon="volume-plus">
              [icon]This is NoticeBar,This is NoticeBar,This is NoticeBarThis is NoticeBar,This is
              NoticeBar,This is NoticeBar[end]
            </Noticebar>
          </div>
          <div class="bar-item">
            <Noticebar marquee>
              [long text]This is NoticeBar,This is NoticeBar,This is NoticeBarThis is NoticeBar,This
              is NoticeBar,This is NoticeBarThis is NoticeBar,This is NoticeBar,This is
              NoticeBarThis is NoticeBar,This is NoticeBar,This is NoticeBarThis is NoticeBar,This
              is NoticeBar,This is NoticeBar[end]
            </Noticebar>
          </div>
        </div>
      </div>

      <!-- icon -->
      <div class="panel">
        <div class="panel__title">icon</div>
        <div class="panel__content">
          <div class="bar-item">
            <Noticebar icon="volume-plus" single>
              [single line] This is NoticeBar,This is NoticeBar,This is NoticeBar
            </Noticebar>
          </div>
          <div class="bar-item">
            <Noticebar icon="volume-plus">
              [multiple line] This is NoticeBar,This is NoticeBar,This is NoticeBar,This is
              NoticeBar,This is NoticeBar
            </Noticebar>
          </div>
        </div>
      </div>

      <!-- more -->
      <div class="panel">
        <div class="panel__title">more</div>
        <div class="panel__content">
          <div class="bar-item">
            <Noticebar showMore single :onGotoMore="onGotoMore">
              [single line] This is NoticeBar,This is NoticeBar,This is NoticeBar
            </Noticebar>
          </div>
          <div class="bar-item">
            <Noticebar showMore icon="volume-plus" single :onGotoMore="onGotoMore">
              [single line] This is NoticeBar,This is NoticeBar,This is NoticeBar
            </Noticebar>
          </div>
          <div class="bar-item">
            <Noticebar showMore moreText="more content" :onGotoMore="onGotoMore">
              [multiple line] This is NoticeBar,This is NoticeBar,This is NoticeBar,This is
              NoticeBar,This is NoticeBar
            </Noticebar>
          </div>
          <div class="bar-item">
            <Noticebar showMore moreText="more content" icon="volume-plus" :onGotoMore="onGotoMore">
              [multiple line] This is NoticeBar,This is NoticeBar,This is NoticeBar,This is
              NoticeBar,This is NoticeBar
            </Noticebar>
          </div>
        </div>
      </div>

      <!-- close button -->
      <div class="panel">
        <div class="panel__title">close button</div>
        <div class="panel__content">
          <div class="bar-item">
            <Noticebar close single>
              [single line] This is NoticeBar,This is NoticeBar,This is NoticeBar
            </Noticebar>
          </div>
          <div class="bar-item">
            <Noticebar close icon="volume-plus" single>
              [single line] This is NoticeBar,This is NoticeBar,This is NoticeBar
            </Noticebar>
          </div>
          <div class="bar-item">
            <Noticebar close :onGotoMore="onGotoMore" single showMore>
              [single line] This is NoticeBar,This is NoticeBar,This is NoticeBar
            </Noticebar>
          </div>
          <div class="bar-item">
            <Noticebar close icon="volume-plus" showMore :onGotoMore="onGotoMore" single>
              [single line] This is NoticeBar,This is NoticeBar,This is NoticeBar
            </Noticebar>
          </div>
          <div class="bar-item">
            <Noticebar close>
              [multiple line] This is NoticeBar,This is NoticeBar,This is NoticeBar,This is
              NoticeBar,This is NoticeBar
            </Noticebar>
          </div>
          <div class="bar-item">
            <Noticebar close>
              [multiple line] This is NoticeBar,This is NoticeBar,This is NoticeBar,This is
              NoticeBar,This is NoticeBar
            </Noticebar>
          </div>
          <div class="bar-item">
            <Noticebar close icon="volume-plus">
              [multiple line] This is NoticeBar,This is NoticeBar,This is NoticeBar,This is
              NoticeBar,This is NoticeBar
            </Noticebar>
          </div>
        </div>
      </div>
    </div>
    <!-- E Body -->
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Noticebar } from 'onebay-ui'
import './index.scss'
export default defineComponent({
  name: 'NoticebarPage',
  components: {
    Noticebar
  },
  methods: {
    onGotoMore() {
      this.$modal({
        title: '点击了更多!',
        cancelText: 'Cancel'
      })
    }
  }
})
</script>

```

</div> 

## API
| Properties | Descrition                           | Type          | Default  |
| ---------- | ------------------------------------ | ------------- | -------- |
| className  | class name                           | string        | -        |
| style      | custom style                         | CSSProperties | -        |
| close      | Whether to show the close button     | boolean       | `false`  |
| single     | Whether the content is single line   | boolean       | `false`  |
| speed      | Content scroll speed                 | number        | 100      |
| moreText   | "See more" link text                 | string        | See more |
| icon       | icon in front of content             | string        | ''       |
| onGotoMore | Triggered when "See More" is clicked | ()=>void      | -        |
| onClose    | Triggered when noticebar closed      | ()=>void      | -        |