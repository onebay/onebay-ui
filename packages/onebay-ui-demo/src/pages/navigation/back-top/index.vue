<template>
  <div class="page backtop-page" style="height: 1000px">
    <DocsHeader title="BackTop" />
    <div class="doc-body" style="height: 100%">
      <BackTop v-if="topText" :style="style">{{ topText }}</BackTop>
      <BackTop v-else :style="style" />
      <div class="panel">
        <div class="panel__title">Basic usage</div>
        <div class="panel__content no-padding">
          <p>default content is "top"</p>
        </div>
      </div>
      <div class="panel">
        <div class="panel__title">Change content</div>
        <div class="panel__content no-padding">
          <Button type="primary" @click="() => changeText(topText === 'top' ? 'up' : 'top')"
            >change default content to text "{{ topText === 'top' ? 'up' : 'top' }}"</Button
          >
        </div>
      </div>
      <div class="panel">
        <div class="panel__title">Change style</div>
        <div class="panel__content no-padding">
          <Button type="primary" @click="changeStyle">Change style</Button>
        </div>
      </div>
      <div class="panel">
        <div class="panel__title">reset style</div>
        <div class="panel__content no-padding">
          <Button type="primary" @click="resetStyle">reset</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { BackTop, Button } from 'onebay-ui'
import './index.scss'

export default defineComponent({
  name: 'BackTopPage',
  components: {
    BackTop,
    Button
  },
  setup() {
    const initStyle = {}
    const topText = ref('')
    const style = ref(initStyle)
    const changeText = (txt) => {
      topText.value = txt
    }
    const changeStyle = () => {
      style.value = {
        right: '40px',
        bottom: '40px',
        backgroundColor: '#f45'
      }
    }
    const resetStyle = () => {
      style.value = initStyle
    }
    return {
      topText,
      changeText,
      style,
      changeStyle,
      resetStyle
    }
  }
})
</script>