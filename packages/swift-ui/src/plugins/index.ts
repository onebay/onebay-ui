import { defineComponent } from 'vue'
import toast from './toast'

export default {
  install: (app: ReturnType<typeof defineComponent>): void => {
    app.config.globalProperties.$toast = toast
  }
}
