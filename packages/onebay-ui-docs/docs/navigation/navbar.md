# navbar 

<DemoView />
<BackToTop />

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```tsx
import DocsHeader from '../../../components/DocHeader/DocsHeader'
import { defineComponent } from 'vue'
import { NavBar, Toast } from 'onebay-ui'
import './index.scss'
export default defineComponent({
  name: 'NavbarPage',
  setup() {
    const handleClick = (text: string) => {
      Toast({
        text,
        duration: 2000,
        status: 'success'
      })
    }

    const clickMy = () => {
      Toast({
        text: 'My',
        duration: 2000,
        status: 'success'
      })
    }

    const clickList = () => {
      Toast({
        text: 'function list',
        duration: 2000,
        status: 'success'
      })
    }
    return () => {
      return (
        <div class="page">
          <DocsHeader title="NavBar"></DocsHeader>

          <div class="doc-body">
            {/* <!-- Basic usage --> */}
            <div class="panel">
              <div class="panel__title">Basic usage</div>
              <div class="panel__content no-padding">
                <div class="example-item">
                  <NavBar
                    v-slots={{
                      left: () => <div class="ob-icon ob-icon-chevron-left"></div>,
                      right: () => (
                        <>
                          <div class="ob-icon ob-icon-bullet-list"></div>
                          <div class="ob-icon ob-icon-user"></div>
                        </>
                      )
                    }}
                    onClickLeftIcon={() => handleClick('go back')}
                    title="NavBar Title"
                  />
                </div>
                <div class="example-item">
                  <NavBar
                    onClickLeftIcon={() => handleClick('go back')}
                    title="NavBar Title"
                    v-slots={{
                      left: () => <div class="ob-icon ob-icon-chevron-left"></div>,
                      right: () => (
                        <>
                          <div class="ob-icon ob-icon-bullet-list" onClick={clickList}></div>
                          <div class="ob-icon ob-icon-user" onClick={clickMy}></div>
                        </>
                      )
                    }}
                  />
                </div>
              </div>
            </div>

            {/* <!-- Customize the upper left corner copy --> */}
            <div class="panel">
              <div class="panel__title">Customize the upper left corner copy</div>
              <div class="panel__content no-padding">
                <div class="example-item">
                  <NavBar
                    onClickLeftIcon={() => handleClick('go back')}
                    title="NavBar Title"
                    v-slots={{
                      left: () => <div class="ob-icon ob-icon-chevron-left"></div>,
                      right: () => (
                        <>
                          <div class="ob-icon ob-icon-bullet-list" onClick={clickList}></div>
                          <div class="ob-icon ob-icon-user" onClick={clickMy}></div>
                        </>
                      )
                    }}
                  />
                </div>
                <div class="example-item">
                  <NavBar
                    onClickLeftIcon={() => handleClick('go back')}
                    title="NavBar Title"
                    v-slots={{
                      left: () => <div class="ob-icon ob-icon-chevron-left"></div>,
                      right: () => (
                        <>
                          <div class="ob-icon ob-icon-bullet-list" onClick={clickList}></div>
                          <div class="ob-icon ob-icon-user" onClick={clickMy}></div>
                        </>
                      )
                    }}
                  />
                </div>
              </div>
            </div>

            {/* <!-- Custom color -->*/}
            <div class="panel">
              <div class="panel__title">Custom color</div>
              <div class="panel__content no-padding">
                <NavBar
                  onClickLeftIcon={() => handleClick('go back')}
                  title="NavBar Title"
                  v-slots={{
                    left: () => <div class="ob-icon ob-icon-chevron-left" style="color: #f45"></div>,
                    right: () => (
                      <>
                        <div class="ob-icon ob-icon-bullet-list" onClick={clickList} style="color: #333"></div>
                        <div class="ob-icon ob-icon-user" onClick={clickMy} style="color: #f45"></div>
                      </>
                    )
                  }}
                />
              </div>
            </div>

            {/* <!-- Custom icon style --> */}
            <div class="panel">
              <div class="panel__title">Custom icon style</div>
              <div class="panel__content no-padding">
                <NavBar
                  onClickLeftIcon={() => handleClick('go back')}
                  title="NavBar Title"
                  v-slots={{
                    left: () => 'go back',
                    right: () => (
                      <>
                        <div class="ob-icon ob-icon-bullet-list" onClick={clickList} style="color: #333"></div>
                        <div class="ob-icon ob-icon-user" onClick={clickMy} style="color: #f45"></div>
                      </>
                    )
                  }}
                />
              </div>
            </div>

            {/* <!-- No underline --> */}
            <div class="panel">
              <div class="panel__title">No underline</div>
              <div class="panel__content no-padding">
                <NavBar
                  onClickLeftIcon={() => handleClick('go back')}
                  title="NavBar Title"
                  border={false}
                  v-slots={{
                    left: () => 'go back',
                    right: () => (
                      <>
                        <div class="ob-icon ob-icon-bullet-list" onClick={clickList} style="color: #333"></div>
                        <div class="ob-icon ob-icon-user" onClick={clickMy} style="color: #f45"></div>
                      </>
                    )
                  }}
                />
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
    <DocsHeader title="NavBar"></DocsHeader>

    <div class="doc-body">
      <!-- Basic usage -->
      <div class="panel">
        <div class="panel__title">Basic usage</div>
        <div class="panel__content no-padding">
          <div class="example-item">
            <NavBar :onClickLeftIcon="handleClick.bind(this, 'go back')" title="NavBar Title">
              <template v-slot:left>
                <div class="ob-icon ob-icon-chevron-left"></div>
              </template>
              <template v-slot:right>
                <div class="ob-icon ob-icon-bullet-list"></div>
                <div class="ob-icon ob-icon-user"></div>
              </template>
            </NavBar>
          </div>
          <div class="example-item">
            <NavBar :onClickLeftIcon="handleClick.bind(this, 'go back')" title="NavBar Title">
              <template v-slot:left>
                <div class="ob-icon ob-icon-chevron-left"></div>
              </template>
              <template v-slot:right>
                <div class="ob-icon ob-icon-bullet-list" @click="clickList"></div>
                <div class="ob-icon ob-icon-user" @click="clickMy"></div>
              </template>
            </NavBar>
          </div>
        </div>
      </div>

      <!-- Customize the upper left corner copy -->
      <div class="panel">
        <div class="panel__title">Customize the upper left corner copy</div>
        <div class="panel__content no-padding">
          <div class="example-item">
            <NavBar :onClickLeftIcon="handleClick.bind(this, 'go back')" title="NavBar Title">
              <template v-slot:left>
                <div class="ob-icon ob-icon-chevron-left"></div>
                back
              </template>
              <template v-slot:right>
                <div class="ob-icon ob-icon-bullet-list" @click="clickList"></div>
                <div class="ob-icon ob-icon-user" @click="clickMy"></div>
              </template>
            </NavBar>
          </div>
          <div class="example-item">
            <NavBar :onClickLeftIcon="handleClick.bind(this, 'go back')" title="NavBar Title">
              <template v-slot:left>
                <div class="ob-icon ob-icon-chevron-left"></div>
              </template>
              <template v-slot:right>
                <div class="ob-icon ob-icon-bullet-list" @click="clickList"></div>
                <div class="ob-icon ob-icon-user" @click="clickMy"></div>
              </template>
            </NavBar>
          </div>
        </div>
      </div>

      <!-- Custom color -->
      <div class="panel">
        <div class="panel__title">Custom color</div>
        <div class="panel__content no-padding">
          <NavBar :onClickLeftIcon="handleClick.bind(this, 'go back')" title="NavBar Title">
            <template v-slot:left>
              <div class="ob-icon ob-icon-chevron-left" style="color: #f45"></div>
            </template>
            <template v-slot:right>
              <div class="ob-icon ob-icon-bullet-list" @click="clickList" style="color: #333"></div>
              <div class="ob-icon ob-icon-user" @click="clickMy" style="color: #f45"></div>
            </template>
          </NavBar>
        </div>
      </div>

      <!-- Custom icon style -->
      <div class="panel">
        <div class="panel__title">Custom icon style</div>
        <div class="panel__content no-padding">
          <NavBar :onClickLeftIcon="handleClick.bind(this, 'go back')" title="NavBar Title">
            <template v-slot:left> go back </template>
            <template v-slot:right>
              <div class="ob-icon ob-icon-bullet-list" @click="clickList" style="color: #333"></div>
              <div class="ob-icon ob-icon-user" @click="clickMy" style="color: #f45"></div>
            </template>
          </NavBar>
        </div>
      </div>

      <!-- No underline -->
      <div class="panel">
        <div class="panel__title">No underline</div>
        <div class="panel__content no-padding">
          <NavBar
            :onClickLeftIcon="handleClick.bind(this, 'go back')"
            title="NavBar Title"
            :border="false"
          >
            <template v-slot:left> go back </template>
            <template v-slot:right>
              <div class="ob-icon ob-icon-bullet-list" @click="clickList" style="color: #333"></div>
              <div class="ob-icon ob-icon-user" @click="clickMy" style="color: #f45"></div>
            </template>
          </NavBar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { NavBar, Toast } from 'onebay-ui'
import './index.scss'
export default defineComponent({
  name: 'NavbarPage',
  components: {
    NavBar
  },
  methods: {
    handleClick(text) {
      Toast({
        text,
        duration: 2000,
        status: 'success'
      })
    },

    clickReturn() {
      Toast({
        text: 'go back',
        duration: 2000,
        status: 'success'
      })
    },

    clickMy() {
      Toast({
        text: 'My',
        duration: 2000,
        status: 'success'
      })
    },

    clickList() {
      Toast({
        text: 'function list',
        duration: 2000,
        status: 'success'
      })
    }
  }
})
</script>

```

</div> 

## API
| Properties      | Descrition                                     | Type          | Default |
| --------------- | ---------------------------------------------- | ------------- | ------- |
| className       | class name                                     | string        | -       |
| style           | custom style                                   | CSSProperties | -       |
| fixed           | Whether to fix the top                         | boolean       | `false` |
| border          | Whether to display the border                  | boolean       | `true`  |
| color           | Link text and icon color, excluding title      | string        | ''      |
| title           | title                                          | string        | ''      |
| leftContent     | left side content                              | string        | ''      |
| rightContent    | right side content                             | string        | ''      |
| onClickLeftIcon | Click event of the first icon type on the left | () => void    | -       |