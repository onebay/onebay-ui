<template>
  <div class="page">
    <div class="panel-header">
      <div class="panel-header__icon">
        <img v-if="icon" :src="icon" class="img" />
        <span v-else class="at-icon at-icon-list" />
      </div>
      <div class="panel-header__title">
        {{ title }}
      </div>
    </div>
    <div class="panel-body">
      <div class="component-list">
        <div
          v-for="(item, index) in itemList"
          :key="index"
          class="component-list__item"
          @click="gotoComponent(item.id, currentId)"
        >
          <span class="name">
            {{ `${item.id} ${item.name}` }}
          </span>
          <span class="at-icon at-icon-chevron-right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
// import './index.scss'
import { list, panelNames } from './listConfig'

export default defineComponent({
  data() {
    return {
      list,
      currentId: '',
      title: '',
      icon: '',
      itemList: [],
    }
  },
  mounted() {
    const { id } = this.$route.query
    if (id) {
      const currentId = id
      this.itemList = list[currentId] || []
      this.title = (panelNames[currentId] && panelNames[currentId].name) || ''
      this.icon = (panelNames[currentId] && panelNames[currentId].icon) || ''
      this.currentId = currentId
    }
  },
  methods: {
    gotoComponent(id, parent) {
      this.$router.push(`/pages/${parent.toLowerCase()}/${id.toLowerCase()}/index`)
    },
  },
})
</script>
<style lang="scss">
@import '../../../../swift-ui/src/style/mixins/index.scss';

@import '../../../../swift-ui/src/style/variables/default.scss';
  @import './index.scss';
</style>