import { defineComponent } from 'vue'
import './docs-header.scss'

export default defineComponent({
  name: 'DocsHeader',
  props: {
    title: {
      type: String,
      default: '标题',
    },
  },
  setup(props) {
    return () => {
      return (
        <div class="doc-header" >
          <div class="doc-header__title">
            {props.title}
          </div>
        </div>
      )
    }
  }
})