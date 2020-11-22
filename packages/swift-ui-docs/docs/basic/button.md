# button 

<DemoView />

``` javascript
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    return () => {
      return <h1>hello world</h1>
    }
  }
})
```

<div class="code-box code-vue-active">
<div class="code-tabs"></div>

```tsx
import './index.scss'
import { Button } from 'swift-ui/src/index'
import DocsHeader from '../../../components/DocHeader/DocsHeader'

export default {
  components: {
    Button
  },
  setup() {
    return () => {
      return (
        <div>
          <DocsHeader title="Button 按钮" />
          <div class="doc-body">
            <div class="panel">
              <div class="panel__title">
                主操作
              </div>
              <div class="panel__content">
                <div class="btn-item">
                  <Button type="primary">
                    主操作按钮
                  </Button>
                </div>
                <div class="btn-item">
                  <Button type="primary" loading>
                    Loading
                  </Button>
                </div>
                <div class="btn-item">
                  <Button type="primary" disabled>
                    不可操作
                  </Button>
                </div>
              </div>
            </div>
            <div class="panel">
              <div class="panel__title">
                次要操作
              </div>
              <div class="panel__content">
                <div class="btn-item">
                  <Button type="secondary">
                    次操作按钮
                  </Button>
                </div>
                <div class="btn-item">
                  <Button type="secondary" loading>
                    Loading
                  </Button>
                </div>
                <div class="btn-item">
                  <Button type="secondary" disabled>
                    不可操作
                  </Button>
                </div>
              </div>
            </div>

            <div class="panel">
              <div class="panel__title">
                次次要操作
              </div>
              <div class="panel__content">
                <div class="btn-item">
                  <Button>次次要操作按钮</Button>
                </div>
                <div class="btn-item">
                  <Button loading>
                    Loading
                  </Button>
                </div>
                <div class="btn-item">
                  <Button disabled>
                    不可操作
                  </Button>
                </div>
              </div>
            </div>

            <div class="panel">
              <div class="panel__title">
                通栏按钮
              </div>
              <div class="panel__content" style="padding: 0;">
                <div class="btn-item">
                  <Button type="primary" full>
                    主操作按钮
                  </Button>
                </div>
                <div class="btn-item">
                  <Button type="secondary" full>
                    次操作按钮
                  </Button>
                </div>
                <div class="btn-item">
                  <Button full>
                    次次要操作按钮
                  </Button>
                </div>
                <div class="btn-item">
                  <Button disabled full>
                    不可操作
                  </Button>
                </div>
              </div>
            </div>

            <div class="panel">
              <div class="panel__title">
                小按钮
              </div>
              <div class="panel__content">
                <div class="btn-item">
                  <div class="subitem">
                    <Button type="primary" size="small">
                      按钮
                    </Button>
                  </div>
                  <div class="subitem">
                    <Button type="secondary" size="small">
                      按钮
                    </Button>
                  </div>
                  <div class="subitem">
                    <Button size="small">
                      按钮
                    </Button>
                  </div>
                </div>
                <div class="btn-item">
                  <div class="subitem">
                    <Button type="primary" size="small" loading />
                  </div>
                  <div class="subitem">
                    <Button type="secondary" size="small" loading />
                  </div>
                  <div class="subitem">
                    <Button size="small" loading />
                  </div>
                </div>
                <div class="btn-item">
                  <div class="subitem">
                    <Button type="primary" size="small" disabled>
                      按钮
                    </Button>
                  </div>
                  <div class="subitem">
                    <Button type="secondary" size="small" disabled>
                      按钮
                    </Button>
                  </div>
                  <div class="subitem">
                    <Button size="small" disabled>
                      按钮
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div class="panel">
              <div class="panel__title">
                圆角按钮
              </div>
              <div class="panel__content">
                <div class="btn-item">
                  <div class="subitem">
                    <Button type="primary" size="small" circle>
                      按钮
                    </Button>
                  </div>
                  <div class="subitem">
                    <Button type="secondary" size="small" circle>
                      按钮
                    </Button>
                  </div>
                  <div class="subitem">
                    <Button size="small" circle>
                      按钮
                    </Button>
                  </div>
                </div>
                <div class="btn-item">
                  <div class="subitem">
                    <Button type="primary" size="small" loading circle />
                  </div>
                  <div class="subitem">
                    <Button type="secondary" size="small" loading circle />
                  </div>
                  <div class="subitem">
                    <Button size="small" loading circle />
                  </div>
                </div>
                <div class="btn-item">
                  <div class="subitem">
                    <Button type="primary" size="small" disabled circle>
                      按钮
                    </Button>
                  </div>
                  <div class="subitem">
                    <Button type="secondary" size="small" disabled circle>
                      按钮
                    </Button>
                  </div>
                  <div class="subitem">
                    <Button size="small" disabled circle>
                      按钮
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}
```

```vue
<template>
  <div>
    <DocsHeader title="Button 按钮" />
    <div class="doc-body">
      <div class="panel">
        <div class="panel__title">
          主操作
        </div>
        <div class="panel__content">
          <div class="btn-item">
            <Button type="primary">
              主操作按钮
            </Button>
          </div>
          <div class="btn-item">
            <Button type="primary" loading>
              Loading
            </Button>
          </div>
          <div class="btn-item">
            <Button type="primary" disabled>
              不可操作
            </Button>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="panel__title">
          次要操作
        </div>
        <div class="panel__content">
          <div class="btn-item">
            <Button type="secondary">
              次操作按钮
            </Button>
          </div>
          <div class="btn-item">
            <Button type="secondary" loading>
              Loading
            </Button>
          </div>
          <div class="btn-item">
            <Button type="secondary" disabled>
              不可操作
            </Button>
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="panel__title">
          次次要操作
        </div>
        <div class="panel__content">
          <div class="btn-item">
            <Button>次次要操作按钮</Button>
          </div>
          <div class="btn-item">
            <Button loading>
              Loading
            </Button>
          </div>
          <div class="btn-item">
            <Button disabled>
              不可操作
            </Button>
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="panel__title">
          通栏按钮
        </div>
        <div class="panel__content" style="padding: 0;">
          <div class="btn-item">
            <Button type="primary" full>
              主操作按钮
            </Button>
          </div>
          <div class="btn-item">
            <Button type="secondary" full>
              次操作按钮
            </Button>
          </div>
          <div class="btn-item">
            <Button full>
              次次要操作按钮
            </Button>
          </div>
          <div class="btn-item">
            <Button disabled full>
              不可操作
            </Button>
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="panel__title">
          小按钮
        </div>
        <div class="panel__content">
          <div class="btn-item">
            <div class="subitem">
              <Button type="primary" size="small">
                按钮
              </Button>
            </div>
            <div class="subitem">
              <Button type="secondary" size="small">
                按钮
              </Button>
            </div>
            <div class="subitem">
              <Button size="small">
                按钮
              </Button>
            </div>
          </div>
          <div class="btn-item">
            <div class="subitem">
              <Button type="primary" size="small" loading />
            </div>
            <div class="subitem">
              <Button type="secondary" size="small" loading />
            </div>
            <div class="subitem">
              <Button size="small" loading />
            </div>
          </div>
          <div class="btn-item">
            <div class="subitem">
              <Button type="primary" size="small" disabled>
                按钮
              </Button>
            </div>
            <div class="subitem">
              <Button type="secondary" size="small" disabled>
                按钮
              </Button>
            </div>
            <div class="subitem">
              <Button size="small" disabled>
                按钮
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="panel__title">
          圆角按钮
        </div>
        <div class="panel__content">
          <div class="btn-item">
            <div class="subitem">
              <Button type="primary" size="small" circle>
                按钮
              </Button>
            </div>
            <div class="subitem">
              <Button type="secondary" size="small" circle>
                按钮
              </Button>
            </div>
            <div class="subitem">
              <Button size="small" circle>
                按钮
              </Button>
            </div>
          </div>
          <div class="btn-item">
            <div class="subitem">
              <Button type="primary" size="small" loading circle />
            </div>
            <div class="subitem">
              <Button type="secondary" size="small" loading circle />
            </div>
            <div class="subitem">
              <Button size="small" loading circle />
            </div>
          </div>
          <div class="btn-item">
            <div class="subitem">
              <Button type="primary" size="small" disabled circle>
                按钮
              </Button>
            </div>
            <div class="subitem">
              <Button type="secondary" size="small" disabled circle>
                按钮
              </Button>
            </div>
            <div class="subitem">
              <Button size="small" disabled circle>
                按钮
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './index.scss'
import { Button } from '/@/swift-ui/src/index.ts'
export default {
  components: {
    Button
  },
  data() {
    return {}
  },
  methods: {
    hanldeClick(e) {
      console.log(e)
    },
  },
}
</script>

```

</div> 