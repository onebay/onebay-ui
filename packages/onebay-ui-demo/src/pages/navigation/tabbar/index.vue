<template>
  <div class="page">
    <DocsHeader title="TabBar"></DocsHeader>
    <div class="doc-body">
      <div class="panel">
        <div class="panel__title">Text tab bar</div>
        <div class="panel__content no-padding">
          <TabBar :tabList="tabList1" :onClick="handleClick.bind(this, 1)" :current="current1" />
        </div>
      </div>
      <div class="panel">
        <div class="panel__title">Icon text label bar</div>
        <div class="panel__content no-padding">
          <TabBar :tabList="tabList2" :onClick="handleClick.bind(this, 2)" :current="current2" />
        </div>
      </div>
      <div class="panel">
        <div class="panel__title">Customize icon color, font color, background color</div>
        <div class="panel__content no-padding">
          <TabBar
            backgroundColor="#FAFBFC"
            color="#ea6bb8"
            selectedColor="#e64340"
            :tabList="tabList2"
            :onClick="handleClick.bind(this, 3)"
            :current="current3"
          />
        </div>
      </div>
      <div class="panel">
        <div class="panel__title">icon</div>
        <div class="panel__content no-padding" style="padding-bottom: 24px">
          <TabBar :tabList="tabList3" :onClick="handleClick.bind(this, 5)" :current="current5" />
        </div>
      </div>
      <div class="panel">
        <div class="panel__title">Fixed bottom</div>
        <div class="panel__content no-padding" style="padding-bottom: 24px">
          <TabBar
            fixed
            :tabList="tabList2"
            :onClick="handleClick.bind(this, 4)"
            :current="current4"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { TabBar } from '/@/onebay-ui/src/index.ts'
export default defineComponent({
  name: 'TabBarPage',
  components: {
    TabBar
  },
  data() {
    return {
      current1: 0,
      current2: 0,
      current3: 0,
      current4: 0,
      current5: 0,
      tabList1: [
        { title: 'To do', text: 8 },
        { title: 'camera' },
        { title: 'Contacts', dot: true }
      ],
      tabList2: [
        { title: 'To do', iconType: 'bullet-list', text: 'new' },
        { title: 'camera', iconType: 'camera' },
        { title: 'folder', iconType: 'folder', text: '100', max: 99 }
      ],
      tabList3: [
        {
          title: 'Center',
          image:
            'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
          selectedImage:
            'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
          text: 'new'
        },
        {
          title: 'Discount',
          image:
            'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png'
        },
        {
          title: 'Member',
          image:
            'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
          text: '100',
          max: 99
        }
      ]
    }
  },
  methods: {
    handleClick(num, value) {
      this[`current${num}`] = value
    }
  }
})
</script>
