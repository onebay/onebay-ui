import { App } from 'vue'
import toast from './toast/index'
import message from './message/index'
import modal from './modal/index'
import imagePreview from './image-preview/index'

export { toast, message, modal, imagePreview }

export default {
  install: (app: App): void => {
    app.config.globalProperties.$toast = toast
    app.config.globalProperties.$message = message
    app.config.globalProperties.$modal = modal
    app.config.globalProperties.$imagePreview = imagePreview
  }
}
