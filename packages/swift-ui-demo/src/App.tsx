import { defineComponent, ref } from 'vue';
// import { SButton } from './components'
import { Accordion } from '/@/swift-ui/src/index.ts'
import '/@/swift-ui/src/style/components/loading.scss'
import '/@/swift-ui/src/style/components/accordion.scss'
import '/@/swift-ui/src/style/components/icon.scss'
import '/@/swift-ui/src/style/index.scss'
import Index from './index.vue'
export default defineComponent({
  name: 'App',
  setup() {
    const value1 = ref(false)
    return {
      value1
    };
  },
  render () {
    return (
      <div id="nav">
          <Accordion
              onClick={() => { this.value1 = !this.value1}}
              title="标题一"
              open={this.value1}
            >
              <div>标题文字: <img src="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png" alt=""/></div>
            </Accordion>
            <Index />
        </div>
    )
  }
});