import { defineComponent } from 'vue'
import toast from './toast'
import message from './message'
import modal from './modal'
import imagePreview from './image-preview'

export default {
  install: (app: ReturnType<typeof defineComponent>): void => {
    app.config.globalProperties.$toast = toast
    app.config.globalProperties.$message = message
    app.config.globalProperties.$modal = modal
    app.config.globalProperties.$imagePreview = imagePreview
  }
}
