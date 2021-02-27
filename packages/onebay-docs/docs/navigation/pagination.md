# pagination 

<DemoView />
<BackToTop />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```tsx
import DocsHeader from '../../../components/DocHeader/DocsHeader'
import { computed, defineComponent, ref } from 'vue'
import { Button, Pagination, Toast } from 'onebay-ui'
import './index.scss'
export default defineComponent({
  name: 'PaginationPage',
  setup() {
    const list = ref<number[]>([])
    const len = computed(() => {
      return list.value.length
    })
    const current = ref(1)
    const pageSize = ref(10)

    const onPage = (data: { current: number }) => {
      current.value = data.current
      Toast({
        text: `Pagination: ${data}`
      })
    }

    const onPageDataChange = () => {
      const _list = new Array(20).fill(1)
      list.value = list.value.concat(_list)
    }

    const onCurrentChange = () => {
      current.value = 1
      list.value = []
    }
    return () => {
      return (
        <div class="page">
          {/* <!-- S Header --> */}
          <DocsHeader title="Pagination"></DocsHeader>
          {/* <!-- E Header --> */}

          <div class="doc-body">
            {/* <!-- Basic usage --> */}
            <div class="panel">
              <div class="panel__title">Basic usage</div>
              <div class="panel__content no-padding">
                <div class="example-item">
                  <Pagination total={20} pageSize={10} current={1}></Pagination>
                </div>
              </div>
            </div>

            {/* <!-- Icon type --> */}
            <div class="panel">
              <div class="panel__title">Icon type</div>
              <div class="panel__content no-padding">
                <div class="example-item">
                  <Pagination icon total={20} pageSize={10} current={1}></Pagination>
                </div>
              </div>
            </div>

            {/* <!-- 点击页码出是否出现picker选择页码 --> */}
            <div class="panel">
              <div class="panel__title">picker快速选择页码</div>
              <div class="panel__content no-padding">
                <div class="example-item">
                  <Pagination icon total={20} pageSize={10} current={1}></Pagination>
                </div>
              </div>
            </div>

            {/* <!-- Change the data length --> */}
            <div class="panel">
              <div class="panel__title">Change the data length</div>
              <div class="panel__content no-padding">
                <div class="example-item">
                  <Pagination
                    icon
                    total={len.value}
                    pageSize={pageSize.value}
                    current={current.value}
                    onPageChange={onPage}
                  ></Pagination>
                  <div class="btn-item">
                    current page：{current}，current data：{len} items, page size：
                    {pageSize}
                  </div>
                  <div class="btn-item">
                    <Button type="primary" onClick={onPageDataChange}> Add 20 data </Button>
                  </div>
                  <div class="btn-item">
                    <Button onClick={onCurrentChange}> reset </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
})
```

```vue
<template>
  <div class="page">
    <!-- S Header -->
    <DocsHeader title="Pagination"></DocsHeader>
    <!-- E Header -->

    <div class="doc-body">
      <!-- Basic usage -->
      <div class="panel">
        <div class="panel__title">Basic usage</div>
        <div class="panel__content no-padding">
          <div class="example-item">
            <Pagination :total="20" :pageSize="10" :current="1"></Pagination>
          </div>
        </div>
      </div>

      <!-- Icon type -->
      <div class="panel">
        <div class="panel__title">Icon type</div>
        <div class="panel__content no-padding">
          <div class="example-item">
            <Pagination icon :total="20" :pageSize="10" :current="1"></Pagination>
          </div>
        </div>
      </div>

      <!-- 点击页码出是否出现picker选择页码 -->
      <div class="panel">
        <div class="panel__title">picker快速选择页码</div>
        <div class="panel__content no-padding">
          <div class="example-item">
            <Pagination icon :total="20" :pageSize="10" :current="1"></Pagination>
          </div>
        </div>
      </div>

      <!-- Change the data length -->
      <div class="panel">
        <div class="panel__title">Change the data length</div>
        <div class="panel__content no-padding">
          <div class="example-item">
            <Pagination
              icon
              :total="len"
              :pageSize="pageSize"
              :current="current"
              :onPageChange="onPage"
            ></Pagination>
            <div class="btn-item">
              current page：{{ current }}，current data：{{ len }} items, page size：
              {{ pageSize }}
            </div>
            <div class="btn-item">
              <Button type="primary" :onClick="onPageDataChange"> Add 20 data </Button>
            </div>
            <div class="btn-item">
              <Button :onClick="onCurrentChange"> reset </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Button, Pagination, Toast } from 'onebay-ui'
import './index.scss'
export default defineComponent({
  name: 'PaginationPage',
  components: { Button, Pagination },
  computed: {
    len() {
      return this.list.length
    }
  },
  data() {
    return {
      list: [],
      current: 1,
      pageSize: 10
    }
  },
  methods: {
    onPage(data) {
      this.current = data.current
      Toast({
        text: `Pagination: ${data}`
      })
    },

    onPageDataChange() {
      const _list = new Array(20).fill(1)
      this.list = this.list.concat(_list)
    },

    onCurrentChange() {
      this.current = 1
      this.list = []
    }
  }
})
</script>

```

</div> 