import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld'
import SButton from './components/button'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <div id="nav">
          <HelloWorld></HelloWorld>
          <SButton>SButton</SButton>
        </div>
      </>
    );
  }
});