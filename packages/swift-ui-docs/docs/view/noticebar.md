# noticebar 

<DemoView />
<BackTop />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```vue
<template>
  <div class="page">
    <!-- S Header -->
    <DocsHeader title="NoticeBar 通告栏"></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <div class="doc-body">
      <!-- 文字 -->
      <div class="panel">
        <div class="panel__title">文字</div>
        <div class="panel__content">
          <div class="bar-item">
            <Noticebar single>
              [单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </Noticebar>
          </div>
          <div class="bar-item">
            <Noticebar>
              [多行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </Noticebar>
          </div>
        </div>
      </div>

      <!-- 跑马灯 -->
      <div class="panel">
        <div class="panel__title">跑马灯</div>
        <div class="panel__content">
          <div class="bar-item">
            <Noticebar marquee>
              [纯文字]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]
            </Noticebar>
          </div>
          <div class="bar-item">
            <Noticebar marquee icon="volume-plus">
              [带icon]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]
            </Noticebar>
          </div>
          <div class="bar-item">
            <Noticebar marquee>
              [超长文本]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]
            </Noticebar>
          </div>
        </div>
      </div>

      <!-- 图标 -->
      <div class="panel">
        <div class="panel__title">图标</div>
        <div class="panel__content">
          <div class="bar-item">
            <Noticebar icon="volume-plus" single>
              [单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </Noticebar>
          </div>
          <div class="bar-item">
            <Noticebar icon="volume-plus">
              [多行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </Noticebar>
          </div>
        </div>
      </div>

      <!-- 查看更多 -->
      <div class="panel">
        <div class="panel__title">查看更多</div>
        <div class="panel__content">
          <div class="bar-item">
            <Noticebar showMore single :onGotoMore="onGotoMore">
              [单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </Noticebar>
          </div>
          <div class="bar-item">
            <Noticebar showMore icon="volume-plus" single :onGotoMore="onGotoMore">
              [单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </Noticebar>
          </div>
          <div class="bar-item">
            <Noticebar showMore moreText="更多内容" :onGotoMore="onGotoMore">
              [多行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </Noticebar>
          </div>
          <div class="bar-item">
            <Noticebar showMore moreText="更多内容" icon="volume-plus" :onGotoMore="onGotoMore">
              [多行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </Noticebar>
          </div>
        </div>
      </div>

      <!-- 关闭按钮 -->
      <div class="panel">
        <div class="panel__title">关闭按钮</div>
        <div class="panel__content">
          <div class="bar-item">
            <Noticebar close single>
              [单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </Noticebar>
          </div>
          <div class="bar-item">
            <Noticebar close icon="volume-plus" single>
              [单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </Noticebar>
          </div>
          <div class="bar-item">
            <Noticebar close :onGotoMore="onGotoMore" single showMore>
              [单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </Noticebar>
          </div>
          <div class="bar-item">
            <Noticebar close icon="volume-plus" showMore :onGotoMore="onGotoMore" single>
              [单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </Noticebar>
          </div>
          <div class="bar-item">
            <Noticebar close>
              [多行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </Noticebar>
          </div>
          <div class="bar-item">
            <Noticebar close>
              [多行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </Noticebar>
          </div>
          <div class="bar-item">
            <Noticebar close icon="volume-plus">
              [多行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
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
import { Noticebar } from '/@/swift-ui/src/index.ts'
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
        cancelText: '取消'
      })
    }
  }
})
</script>

```

</div> 