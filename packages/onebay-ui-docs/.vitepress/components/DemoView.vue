<template>
  <div class="iframe">
    <Loading v-if="!loaded" />
    <iframe
      :src="src"
      frameborder="0"
      @load="load"
      class="iframe-window"
    ></iframe>
  </div>
</template>

<script>
import Loading from "./Loading.vue";
import { renderTabs } from "../common";

export default {
  name: "Demoview",
  components: {
    Loading,
  },
  created() {
    const route = this.$router.route.path.split(".")[0].replace("/docs/", "");
    if (import.meta.env.MODE === "development") {
      this.src = `http://localhost:3333/#/pages/${route}/index`;
    } else {
      this.src = `/demo/#/pages/${route}/index`;
    }
  },
  mounted() {
    renderTabs();
  },
  data() {
    return {
      src: "",
      loaded: false,
    };
  },
  methods: {
    load() {
      this.loaded = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.iframe {
  position: relative;
}
.iframe-window {
  width: 100%;
  height: 100%;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  box-shadow: 1px 0 var(--border-color);
}
@media screen and (max-width: 414px) {
  .iframe-window {
    border: 0;
  }
}
</style>