<template>
  <div class="page progress-page">
    <!-- S Header -->
    <DocsHeader title="Progress" />
    <!-- E Header -->

    <!-- S Body -->
    <div class="doc-body">
      <!-- Basic progress bar -->
      <div class="panel">
        <div class="panel__title">Basic progress bar</div>
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

      <!-- Hide progress text -->
      <div class="panel">
        <div class="panel__title">Hide progress text</div>
        <div class="panel__content">
          <div class="example-item">
            <Progress :percent="25" isHidePercent />
          </div>
          <div class="example-item">
            <Progress :percent="75" isHidePercent />
          </div>
        </div>
      </div>

      <!-- Customize the line width of the progress bar -->
      <div class="panel">
        <div class="panel__title">Customize the line width of the progress bar</div>
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

      <!-- Custom color -->
      <div class="panel">
        <div class="panel__title">Custom color</div>
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

      <!-- Different states -->
      <div class="panel">
        <div class="panel__title">Different states</div>
        <div class="panel__content">
          <div class="example-item">
            <div class="example-item__desc">suspend</div>
            <Progress :percent="25" />
          </div>
          <div class="example-item">
            <div class="example-item__desc">processing</div>
            <Progress :percent="50" status="progress" />
          </div>
          <div class="example-item">
            <div class="example-item__desc">error</div>
            <Progress :percent="75" status="error" />
          </div>
          <div class="example-item">
            <div class="example-item__desc">completed</div>
            <Progress :percent="100" status="success" />
          </div>
        </div>
      </div>

      <!-- actual case -->
      <div class="panel">
        <div class="panel__title">actual case</div>
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
