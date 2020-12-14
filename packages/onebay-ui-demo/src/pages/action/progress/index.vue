<template>
  <div class="page progress-page">
    <!-- S Header -->
    <DocsHeader title="Progress" />
    <!-- E Header -->

    <!-- S Body -->
    <div class="doc-body">
      <!-- 基础进度条 -->
      <div class="panel">
        <div class="panel__title">基础进度条</div>
        <div class="panel__content">
          <div class="example-item">
            <Progress :percent="25" />
          </div>
          <div class="example-item">
            <Progress :percent="50" />
          </div>
          <div class="example-item">
            <Progress :percent="75" />
          </div>
        </div>
      </div>

      <!-- 隐藏进度文案 -->
      <div class="panel">
        <div class="panel__title">隐藏进度文案</div>
        <div class="panel__content">
          <div class="example-item">
            <Progress :percent="25" isHidePercent />
          </div>
          <div class="example-item">
            <Progress :percent="75" isHidePercent />
          </div>
        </div>
      </div>

      <!-- 自定义进度条线宽 -->
      <div class="panel">
        <div class="panel__title">自定义进度条线宽</div>
        <div class="panel__content">
          <div class="example-item">
            <Progress :percent="25" :strokeWidth="6" />
          </div>
          <div class="example-item">
            <Progress :percent="50" :strokeWidth="8" />
          </div>
          <div class="example-item">
            <Progress :percent="75" :strokeWidth="10" />
          </div>
        </div>
      </div>

      <!-- 自定义颜色 -->
      <div class="panel">
        <div class="panel__title">自定义颜色</div>
        <div class="panel__content">
          <div class="example-item">
            <Progress :percent="25" color="#FF4949" />
          </div>
          <div class="example-item">
            <Progress :percent="50" color="#13CE66" />
          </div>
          <div class="example-item">
            <Progress :percent="75" color="#FFC82C" />
          </div>
        </div>
      </div>

      <!-- 不同的状态 -->
      <div class="panel">
        <div class="panel__title">不同的状态</div>
        <div class="panel__content">
          <div class="example-item">
            <div class="example-item__desc">暂停</div>
            <Progress :percent="25" />
          </div>
          <div class="example-item">
            <div class="example-item__desc">进行中</div>
            <Progress :percent="50" status="progress" />
          </div>
          <div class="example-item">
            <div class="example-item__desc">错误</div>
            <Progress :percent="75" status="error" />
          </div>
          <div class="example-item">
            <div class="example-item__desc">已完成</div>
            <Progress :percent="100" status="success" />
          </div>
        </div>
      </div>

      <!-- 实际案例 -->
      <div class="panel">
        <div class="panel__title">实际案例</div>
        <div class="panel__content">
          <div class="example-item">
            <Progress :percent="state.percent" />
            <div class="example-item__buttons">
              <div class="btn">
                <Button size="small" :on-click="reduce"> subtract </Button>
              </div>
              <div class="btn">
                <Button size="small" :on-click="increase"> add </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- E Body -->
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Button, Progress } from 'onebay-ui'
const OFFSET = 15
export default defineComponent({
  name: 'ProgressPage',
  components: {
    Button,
    Progress
  },
  data() {
    return {
      state: {
        percent: 0
      }
    }
  },
  methods: {
    reduce() {
      let { percent } = this.state
      if (percent === 0) {
        return
      }

      percent = percent - OFFSET < 0 ? 0 : percent - OFFSET

      this.state.percent = percent
    },

    increase() {
      let { percent } = this.state
      if (percent === 100) {
        return
      }

      percent = percent + OFFSET > 100 ? 100 : percent + OFFSET

      this.state.percent = percent
    }
  }
})
</script>
