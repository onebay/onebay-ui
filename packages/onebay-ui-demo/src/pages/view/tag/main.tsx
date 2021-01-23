import DocsHeader from '../../../components/DocHeader/DocsHeader'
import { defineComponent, reactive } from 'vue'
import { Tag, Toast } from 'onebay-ui'

interface TagItem { name: string, active: boolean }

export default defineComponent({
  name: 'TagPage',
  setup() {
    const state = reactive({
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
    })
    const onClick = (data: TagItem) => {
      const { tagList } = state
      const findIndex = tagList.findIndex((item) => item.name === data.name)
      const active = !tagList[findIndex].active
      const content = `您点击的 tag 标签名是：${data.name}，点击前是否选中：${data.active}，点击后：${active}`

      tagList[findIndex].active = active
      state.tagList = tagList

      Toast({
        text: content
      })
    }

    const handleHollowClick = (data: TagItem) => {
      const { hollowTagList } = state
      const findIndex = hollowTagList.findIndex((item) => item.name === data.name)

      hollowTagList[findIndex].active = !hollowTagList[findIndex].active
      state.hollowTagList = hollowTagList
    }

    const handleSolidClick = (data: TagItem) => {
      const { solidTagList } = state
      const findIndex = solidTagList.findIndex((item) => item.name === data.name)

      solidTagList[findIndex].active = !solidTagList[findIndex].active
      state.solidTagList = solidTagList
    }

    const handleHollowSmallClick = (data: TagItem) => {
      const { hollowTagList2 } = state
      const findIndex = hollowTagList2.findIndex((item) => item.name === data.name)

      hollowTagList2[findIndex].active = !hollowTagList2[findIndex].active
      state.hollowTagList2 = hollowTagList2
    }

    const handleSolidSmallClick = (data: TagItem) => {
      const { solidTagList2 } = state
      const findIndex = solidTagList2.findIndex((item) => item.name === data.name)

      solidTagList2[findIndex].active = !solidTagList2[findIndex].active
      state.solidTagList2 = solidTagList2
    }
    return () => {
      const {
        tagList,
        hollowTagList,
        solidTagList,
        hollowTagList2,
        solidTagList2
      } = state
      return (
        <div class="page">
          {/* <!-- S Header --> */}
          <DocsHeader title="Tag"></DocsHeader>
          {/* <!-- E Header --> */}

          {/* <!-- S Body --> */}
          <div class="doc-body">
            {/* <!-- Hollow label --> */}
            <div class="panel">
              <div class="panel__title">Hollow label</div>
              <div class="panel__content">
                <div class="example-item">
                  {
                    hollowTagList.map((item, index) => (
                      <div class="subitem" key={`ob-tag-${index}`}>
                        <Tag
                          name={item.name}
                          active={item.active}
                          circle={index % 2 === 0}
                          onClick={handleHollowClick}
                        >
                          Tag
                    </Tag>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>

            {/* <!-- Solid label --> */}
            <div class="panel">
              <div class="panel__title">Solid label</div>
              <div class="panel__content">
                <div class="example-item">
                  {
                    solidTagList.map((item, index) => (
                      <div class="subitem" key={`ob-tag-${index}`}>
                        <Tag
                          type="primary"
                          name={item.name}
                          active={item.active}
                          circle={index % 2 === 0}
                          onClick={handleSolidClick}
                        >
                          Tag
                  </Tag>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>

            {/* <!-- Click event --> */}
            <div class="panel">
              <div class="panel__title">Click event</div>
              <div class="panel__content">
                <div class="example-item">
                  {
                    tagList.map((item, index) => (

                      <div class="subitem" key={`ob-tag-${index}`}>
                        <Tag
                          name={item.name}
                          type="primary"
                          active={item.active}
                          circle={index % 2 === 0}
                          onClick={onClick}
                        >
                          tag-{index + 1}
                        </Tag>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>

            {/* <!-- Non-clickable --> */}
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

            {/* <!-- Hollow label (small) --> */}
            <div class="panel">
              <div class="panel__title">Hollow label (small)</div>
              <div class="panel__content">
                <div class="example-item">
                  {
                    hollowTagList2.map((item, index) => (

                      <div class="subitem" key={`ob-tag-${index}`}>
                        <Tag
                          size="small"
                          name={item.name}
                          active={item.active}
                          circle={index % 2 === 0}
                          onClick={handleHollowSmallClick}
                        >
                          Tag
                  </Tag>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>

            {/* <!-- Solid label (small) --> */}
            <div class="panel">
              <div class="panel__title">Solid label (small)</div>
              <div class="panel__content">
                <div class="example-item">
                  {
                    solidTagList2.map((item, index) => (

                      <div class="subitem" key={`ob-tag-${index}`}>
                        <Tag
                          size="small"
                          type="primary"
                          name={item.name}
                          active={item.active}
                          circle={index % 2 === 0}
                          onClick={handleSolidSmallClick}
                        >
                          Tag
                  </Tag>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>

            {/* <!-- Non-clickable state (small) --> */}
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
          {/* <!-- E Body --> */}
        </div>
      )
    }
  }
})