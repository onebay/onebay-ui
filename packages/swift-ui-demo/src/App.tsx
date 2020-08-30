import { defineComponent } from 'vue';
// import { SButton } from './components'
import { SButton, Loading } from 'swift-ui'
import './style/components/loading.scss'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <div id="nav">
          <SButton>SButton</SButton>
          <Loading size="12" color="#f45" />
        </div>
      </>
    );
  }
});