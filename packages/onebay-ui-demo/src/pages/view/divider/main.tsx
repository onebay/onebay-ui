import { defineComponent } from 'vue'
import { Divider } from 'onebay-ui'
import DocsHeader from '../../../components/DocHeader/DocsHeader'
import './index.scss'

export default defineComponent({
  name: 'DividerPage',
  setup() {
    return () => {
      return (
        <div class="page">
          {/* <!-- S Header --> */}
          <DocsHeader title="Divider 分隔线"></DocsHeader>
          {/* <!-- E Header --> */}

          {/* <!-- S Body --> */}
          <div class="doc-body">
            {/* <!-- 文字 --> */}
            <div class="panel">
              <div class="panel__title">一般用法</div>
              <div class="panel__content no-padding">
                <Divider content="分割线" />
              </div>
            </div>

            {/* <!-- 自定义颜色 --> */}
            <div class="panel">
              <div class="panel__title">自定义颜色</div>
              <div class="panel__content no-padding">
                <Divider content="没有更多了" fontColor="#ed3f14" lineColor="#ed3f14" />
                <Divider content="没有更多了" fontColor="#ff9900" lineColor="#ff9900" />
                <Divider content="没有更多了" fontColor="#2d8cf0" lineColor="#2d8cf0" />
              </div>
            </div>

            {/* <!-- 自定义内容 --> */}
            <div class="panel">
              <div class="panel__title">自定义内容</div>
              <div class="panel__content no-padding">
                <Divider>自定义内容</Divider>
              </div>
            </div>
          </div>
          {/* <!-- E Body --> */}
        </div>
      )
    }
  }
})