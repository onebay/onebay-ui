<template>
  <div class="page float-layout-page">
    <DocsHeader title="Float Layout" />

    <div class="doc-body">
      <!-- Basic usage -->
      <div class="panel">
        <div class="panel__title">Basic usage</div>
        <div class="panel__content">
          <div class="example-item">
            <Button :onClick="handleClick.bind(this, 1)">open Float Layout</Button>
          </div>
        </div>
      </div>

      <!-- max height -->
      <div class="panel">
        <div class="panel__title">max height</div>
        <div class="panel__content">
          <div class="example-item">
            <Button :onClick="handleClick.bind(this, 2)">open Float Layout</Button>
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="panel__title">Event Listeners</div>
        <div class="panel__content">
          <div class="example-item">
            <Button :onClick="handleClick.bind(this, 3)">open Float Layout</Button>
          </div>
        </div>
      </div>
    </div>

    <FloatLayout :isOpened="isOpened1" :onClose="handleClose.bind(this, '1')">
      <div class="content-wrapper">
        This is the content area. Write it as you like. This is the content area. Write it as you
        like. This is the content area. Write it as you like. This is the content area. Write it as
        you like. This is the content area.
      </div>
    </FloatLayout>

    <FloatLayout
      title="This is a title"
      :isOpened="isOpened2"
      :onClose="handleClose.bind(this, '2')"
    >
      <div class="content-wrapper">
        "The Poet Continues to Silence" contains twelve short stories by Yehoshua. They use
        dreamlike brushwork to create characters that are both sensitive and slow. Sometimes the
        story is in the city, sometimes in the battlefield, sometimes in the remote mountain
        village, sometimes completely confined to the family, and always grotesque from commonplace.
        The main thread of each story brings ever-increasing tension, even on the surface, nothing
        important happens at all: The poet of the seal pen lives with his son with intellectual
        disability; the desperate spare child takes care of the child of the dream lover and others
        The father who had been sent for many years intercepted letters from his daughter’s suitor.
        The villagers waited for the train to pass by in a ritual ritual. The commander refused to
        order his troops on the battlefield. The sleepy worker slipped home to rest. There was an
        immortal old man among the neighbors...
      </div>
    </FloatLayout>

    <FloatLayout
      title="This is a title"
      :isOpened="isOpened3"
      :onScroll="onScroll"
      :onScrollToLower="onScrollToLower"
      :onScrollToUpper="onScrollToUpper"
      :onClose="handleClose.bind(this, '3')"
    >
      <div class="content-wrapper">
        <p>this is content!!!</p>
        <p>this is content!!!</p>
        <p>this is content!!!</p>
        <p>this is content!!!</p>
        <p>this is content!!!</p>
        <p>this is content!!!</p>
        <p>this is content!!!</p>
        <p>this is content!!!</p>
        <p>this is content!!!</p>
        <p>this is content!!!</p>
        <p>this is content!!!</p>
        <p>this is content!!!</p>
        <p>this is content!!!</p>
        <p>this is content!!!</p>
        <p>this is content!!!</p>
        <p>this is content!!!</p>
        <p>this is content!!!</p>
        <p>this is content!!!</p>
        <p>this is content!!!</p>
        <p>this is content!!!</p>
        <p>this is content!!!</p>
        <p>this is content!!!</p>
        <p>this is content!!!</p>
        <p>this is content!!!</p>
        <p>this is content!!!</p>
        <p>this is content!!!</p>
        <p>this is content!!!</p>
        <p>this is content!!!</p>
        <p>this is content!!!</p>
        <p>this is content!!!</p>
      </div>
    </FloatLayout>
    <Toast :isOpened="showToast" :text="toastContent" @close="closeToast"></Toast>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Button, FloatLayout, Toast } from '/@/onebay-ui/src/index.ts'
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
