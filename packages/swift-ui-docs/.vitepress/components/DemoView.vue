<template>
  <div class="iframe">
    <Loading v-if="!loaded"/>
    <iframe :src="src" frameborder="0" @load="load" class="iframe-window"></iframe>
  </div>
</template>

<script>
  import Loading from './Loading.vue'
  export default {
    name: 'Demoview',
    components: {
      Loading
    },
    created() {
      const route = this.$router.route.path.split('.')[0].replace('/docs/', '')
      console.log('route', route)
      this.src = `http://localhost:3001/#/pages/${route}/index`
    },
    data() {
      return {
        src: '',
        loaded: false
      }
    },
    methods: {
      load() {
        this.loaded = true
      }
    }
  }
</script>
<style lang="scss" scoped>
  .iframe {
    position: relative;
  }
  .iframe-window {
    width: 100%;
    height: 100%;
  }
</style>