<template>
  <div :class="rootClass" @touchmove="handleTouchMove">
    <div class="at-action-sheet__overlay" @click="close" />
    <div class="at-action-sheet__container">
      <ActionSheetHeader v-if="title">{{ title }}</ActionSheetHeader>
      <ActionSheetBody>
        <slot />
      </ActionSheetBody>
      <ActionSheetFooter @click="handleCancel">{{ cancelText }}</ActionSheetFooter>
    </div>
  </div>
</template>

<script>
import ActionSheetBody from './components/body.vue'
import ActionSheetFooter from './components/footer.vue'
import ActionSheetHeader from './components/header.vue'
import classNames from 'classnames'
import { defineComponent, ref, computed } from 'vue'
export default defineComponent({
  name: 'ActionSheet',
  components: {
    ActionSheetBody,
    ActionSheetFooter,
    ActionSheetHeader
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: ''
    },
    isOpened: {
      type: Boolean,
      default: false
    },
    className: {
      type: [Array, String],
      default: () => ''
    }
  },
  emits: ['close', 'cancel'],
  setup(props) {
    const show = ref(props.isOpened)
    const rootClass = computed(() => {
      const res = classNames(
        'at-action-sheet',
        {
          'at-action-sheet--active': show.value
        },
        props.className
      )
      return res
    })
    return {
      show,
      rootClass
    }
  },
  watch: {
    isOpened(val) {
      this.show = val
      !val && this.handleClose()
    }
  },
  methods: {
    handleClose() {
      this.$emit('close')
    },
    handleCancel() {
      this.$emit('cancel')
      this.close()
    },
    close() {
      this.show = false
      this.handleClose()
    },
    handleTouchMove(e) {
      e.stopPropagation()
      e.preventDefault()
    }
  }
})
</script>
