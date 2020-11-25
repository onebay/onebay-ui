# tag 

<DemoView />
<BackTop />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```vue
<template>
  <div class="page">
    <!-- S Header -->
    <DocsHeader title="Tag"></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <div class="doc-body">
      <!-- Hollow label -->
      <div class="panel">
        <div class="panel__title">Hollow label</div>
        <div class="panel__content">
          <div class="example-item">
            <div v-for="(item, index) in hollowTagList" class="subitem" :key="`at-tag-${index}`">
              <Tag
                :name="item.name"
                :active="item.active"
                :circle="index % 2 === 0"
                :onClick="handleHollowClick"
              >
                Tag
              </Tag>
            </div>
          </div>
        </div>
      </div>

      <!-- Solid label -->
      <div class="panel">
        <div class="panel__title">Solid label</div>
        <div class="panel__content">
          <div class="example-item">
            <div v-for="(item, index) in solidTagList" class="subitem" :key="`at-tag-${index}`">
              <Tag
                type="primary"
                :name="item.name"
                :active="item.active"
                :circle="index % 2 === 0"
                :onClick="handleSolidClick"
              >
                Tag
              </Tag>
            </div>
          </div>
        </div>
      </div>

      <!-- Click event -->
      <div class="panel">
        <div class="panel__title">Click event</div>
        <div class="panel__content">
          <div class="example-item">
            <div v-for="(item, index) in tagList" class="subitem" :key="`at-tag-${index}`">
              <Tag
                :name="item.name"
                type="primary"
                :active="item.active"
                :circle="index % 2 === 0"
                :onClick="onClick"
              >
                tag-{{ index + 1 }}
              </Tag>
            </div>
          </div>
        </div>
      </div>

      <!-- Non-clickable -->
      <div class="panel">
        <div class="panel__title">Non-clickable</div>
        <div class="panel__content">
          <div class="example-item">
            <div class="subitem">
              <Tag type="primary" circle disabled> Tag </Tag>
            </div>
            <div class="subitem">
              <Tag type="primary" disabled> Tag </Tag>
            </div>
          </div>
        </div>
      </div>

      <!-- Hollow label (small) -->
      <div class="panel">
        <div class="panel__title">Hollow label (small)</div>
        <div class="panel__content">
          <div class="example-item">
            <div v-for="(item, index) in hollowTagList2" class="subitem" :key="`at-tag-${index}`">
              <Tag
                size="small"
                :name="item.name"
                :active="item.active"
                :circle="index % 2 === 0"
                :onClick="handleHollowSmallClick"
              >
                Tag
              </Tag>
            </div>
          </div>
        </div>
      </div>

      <!-- Solid label (small) -->
      <div class="panel">
        <div class="panel__title">Solid label (small)</div>
        <div class="panel__content">
          <div class="example-item">
            <div v-for="(item, index) in solidTagList2" class="subitem" :key="`at-tag-${index}`">
              <Tag
                size="small"
                type="primary"
                :name="item.name"
                :active="item.active"
                :circle="index % 2 === 0"
                :onClick="handleSolidSmallClick"
              >
                Tag
              </Tag>
            </div>
          </div>
        </div>
      </div>

      <!-- Non-clickable state (small) -->
      <div class="panel">
        <div class="panel__title">Non-clickable state (small)</div>
        <div class="panel__content">
          <div class="example-item">
            <div class="subitem">
              <Tag size="small" type="primary" circle disabled> Tag </Tag>
            </div>
            <div class="subitem">
              <Tag size="small" type="primary" disabled> Tag </Tag>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- E Body -->
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { Tag } from '/@/swift-ui/src/index.ts'
export default defineComponent({
  name: 'TagPage',
  components: {
    Tag
  },
  data() {
    return {
      tagList: [
        { name: 'tag-1', active: false },
        { name: 'tag-2', active: false },
        { name: 'tag-3', active: true },
        { name: 'tag-4', active: true }
      ],
      hollowTagList: [
        { name: 'tag-1', active: false },
        { name: 'tag-2', active: false },
        { name: 'tag-3', active: true },
        { name: 'tag-4', active: true }
      ],
      solidTagList: [
        { name: 'tag-1', active: false },
        { name: 'tag-2', active: false },
        { name: 'tag-3', active: true },
        { name: 'tag-4', active: true }
      ],
      hollowTagList2: [
        { name: 'tag-1', active: false },
        { name: 'tag-2', active: false },
        { name: 'tag-3', active: true },
        { name: 'tag-4', active: true }
      ],
      solidTagList2: [
        { name: 'tag-1', active: false },
        { name: 'tag-2', active: false },
        { name: 'tag-3', active: true },
        { name: 'tag-4', active: true }
      ]
    }
  },
  methods: {
    onClick(data) {
      const { tagList } = this
      const findIndex = tagList.findIndex((item) => item.name === data.name)
      const active = !tagList[findIndex].active
      const content = `您点击的 tag 标签名是：${data.name}，点击前是否选中：${data.active}，点击后：${active}`

      tagList[findIndex].active = active
      this.tagList = tagList

      this.$toast({
        text: content
      })
    },

    handleHollowClick(data) {
      const { hollowTagList } = this
      const findIndex = hollowTagList.findIndex((item) => item.name === data.name)

      hollowTagList[findIndex].active = !hollowTagList[findIndex].active
      this.hollowTagList = hollowTagList
    },

    handleSolidClick(data) {
      const { solidTagList } = this
      const findIndex = solidTagList.findIndex((item) => item.name === data.name)

      solidTagList[findIndex].active = !solidTagList[findIndex].active
      this.solidTagList = solidTagList
    },

    handleHollowSmallClick(data) {
      const { hollowTagList2 } = this
      const findIndex = hollowTagList2.findIndex((item) => item.name === data.name)

      hollowTagList2[findIndex].active = !hollowTagList2[findIndex].active
      this.hollowTagList2 = hollowTagList2
    },

    handleSolidSmallClick(data) {
      const { solidTagList2 } = this
      const findIndex = solidTagList2.findIndex((item) => item.name === data.name)

      solidTagList2[findIndex].active = !solidTagList2[findIndex].active
      this.solidTagList2 = solidTagList2
    }
  }
})
</script>

```

</div> 