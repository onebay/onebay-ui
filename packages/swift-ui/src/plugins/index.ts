import { defineComponent } from 'vue'
import toast from './toast'
import message from './message'

export default {
  install: (app: ReturnType<typeof defineComponent>): void => {
    app.config.globalProperties.$toast = toast
    app.config.globalProperties.$message = message
  }
}
