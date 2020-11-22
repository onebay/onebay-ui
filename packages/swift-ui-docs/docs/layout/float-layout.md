# float-layout 

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
  <div class="page float-layout-page">
    <DocsHeader title="Float Layout 浮动弹层" />

    <div class="doc-body">
      <!-- 基本用法 -->
      <div class="panel">
        <div class="panel__title">基本用法</div>
        <div class="panel__content">
          <div class="example-item">
            <Button :onClick="handleClick.bind(this, 1)">打开 Float Layout</Button>
          </div>
        </div>
      </div>

      <!-- 最大高度 -->
      <div class="panel">
        <div class="panel__title">最大高度</div>
        <div class="panel__content">
          <div class="example-item">
            <Button :onClick="handleClick.bind(this, 2)">打开 Float Layout</Button>
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="panel__title">监听事件</div>
        <div class="panel__content">
          <div class="example-item">
            <Button :onClick="handleClick.bind(this, 3)">打开 Float Layout</Button>
          </div>
        </div>
      </div>
    </div>

    <FloatLayout :isOpened="isOpened1" :onClose="handleClose.bind(this, '1')">
      <div class="content-wrapper">
        这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写
      </div>
    </FloatLayout>

    <FloatLayout title="这是个标题" :isOpened="isOpened2" :onClose="handleClose.bind(this, '2')">
      <div class="content-wrapper">
        《诗人继续沉默》收录了耶霍舒亚的十二个中短篇小说。它们以梦境一般的笔法塑造了一个个既敏感又迟钝的角色。故事有时在城市，有时在战场，有时在遥远的山村，有时完全囿于家庭，并总是从司空见惯中生出离奇。每个故事的主线带来不断加剧的紧张感，即使从表面上看，根本没有重要的事情发生：
        封笔的诗人与智力障碍的儿子一起生活； 绝望的备胎照顾梦中情人与别人的孩子
        外派多年的父亲截取女儿追求者的信件 村民们每日仪式般等候火车经过
        指挥官拒绝命令他的部队上战场 渴睡的工人溜回家休息
        邻居当中有个永生不死的老头 …
        然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
        《诗人继续沉默》收录了耶霍舒亚的十二个中短篇小说。它们以梦境一般的笔法塑造了一个个既敏感又迟钝的角色。故事有时在城市，有时在战场，有时在遥远的山村，有时完全囿于家庭，并总是从司空见惯中生出离奇。每个故事的主线带来不断加剧的紧张感，即使从表面上看，根本没有重要的事情发生：
        封笔的诗人与智力障碍的儿子一起生活； 绝望的备胎照顾梦中情人与别人的孩子
        外派多年的父亲截取女儿追求者的信件 村民们每日仪式般等候火车经过
        指挥官拒绝命令他的部队上战场 渴睡的工人溜回家休息
        邻居当中有个永生不死的老头 …
        然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
        然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
        然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
        然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
        然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
        然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
        然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
        然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
        然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
      </div>
    </FloatLayout>

    <FloatLayout
      title="这是个标题"
      :isOpened="isOpened3"
      :onScroll="onScroll"
      :onScrollToLower="onScrollToLower"
      :onScrollToUpper="onScrollToUpper"
      :onClose="handleClose.bind(this, '3')"
    >
      <div class="content-wrapper">
        《诗人继续沉默》收录了耶霍舒亚的十二个中短篇小说。它们以梦境一般的笔法塑造了一个个既敏感又迟钝的角色。故事有时在城市，有时在战场，有时在遥远的山村，有时完全囿于家庭，并总是从司空见惯中生出离奇。每个故事的主线带来不断加剧的紧张感，即使从表面上看，根本没有重要的事情发生：
        封笔的诗人与智力障碍的儿子一起生活； 绝望的备胎照顾梦中情人与别人的孩子
        外派多年的父亲截取女儿追求者的信件 村民们每日仪式般等候火车经过
        指挥官拒绝命令他的部队上战场 渴睡的工人溜回家休息
        邻居当中有个永生不死的老头 …
        然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
        《诗人继续沉默》收录了耶霍舒亚的十二个中短篇小说。它们以梦境一般的笔法塑造了一个个既敏感又迟钝的角色。故事有时在城市，有时在战场，有时在遥远的山村，有时完全囿于家庭，并总是从司空见惯中生出离奇。每个故事的主线带来不断加剧的紧张感，即使从表面上看，根本没有重要的事情发生：
        封笔的诗人与智力障碍的儿子一起生活； 绝望的备胎照顾梦中情人与别人的孩子
        外派多年的父亲截取女儿追求者的信件 村民们每日仪式般等候火车经过
        指挥官拒绝命令他的部队上战场 渴睡的工人溜回家休息
        邻居当中有个永生不死的老头 …
        然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
        然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
        然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
        然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
        然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
        然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
        然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
        然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
        然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
      </div>
    </FloatLayout>
    <Toast :isOpened="showToast" :text="toastContent" @close="closeToast"></Toast>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Button, FloatLayout, Toast } from '/@/swift-ui/src/index.ts'
export default defineComponent({
  name: 'FloatLayoutPage',
  components: {
    Button,
    FloatLayout,
    Toast
  },
  data() {
    return {
      isOpened1: false,
      isOpened2: false,
      isOpened3: false,
      showToast: false,
      toastContent: ''
    }
  },
  methods: {
    openToast(content) {
      this.toastContent = content
      this.showToast = true
    },
    closeToast() {
      this.showToast = false
    },
    onScroll(event) {
      alert({
        title: `onScroll: ${event}`,
        icon: 'none'
      })
    },

    onScrollToLower(event) {
      alert({
        title: `onScrollToLower: ${event}`,
        icon: 'none'
      })
    },

    onScrollToUpper(event) {
      alert({
        title: `onScrollToUpper: ${event}`,
        icon: 'none'
      })
    },

    handleClick(type) {
      this[`isOpened${type}`] = true
    },

    handleClose(type) {
      this[`isOpened${type}`] = false
      this.openToast(`handleClose: ${type}`)
    }
  }
})
</script>

```

</div> 