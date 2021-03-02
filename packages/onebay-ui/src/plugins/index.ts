import { App } from 'vue'
import imagePreview from './image-preview/index'

export { imagePreview }

export default {
  install: (app: App): void => {
    app.config.globalProperties.$imagePreview = imagePreview
  }
}
