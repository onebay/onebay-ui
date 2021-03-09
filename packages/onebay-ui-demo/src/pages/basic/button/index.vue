<template>
  <div>
    <DocsHeader title="Button" />
    <div class="doc-body">
      <div class="panel">
        <div class="panel__title">
          Main operation
        </div>
        <div class="panel__content">
          <div class="btn-item">
            <Button type="primary">
              Main operation button
            </Button>
          </div>
          <div class="btn-item">
            <Button type="primary" loading>
              Loading
            </Button>
          </div>
          <div class="btn-item">
            <Button type="primary" disabled>
              disabled
            </Button>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="panel__title">
          Secondary operation
        </div>
        <div class="panel__content">
          <div class="btn-item">
            <Button type="secondary">
              Secondary operation button
            </Button>
          </div>
          <div class="btn-item">
            <Button type="secondary" loading>
              Loading
            </Button>
          </div>
          <div class="btn-item">
            <Button type="secondary" disabled>
              disabled
            </Button>
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="panel__title">
          Secondary operation
        </div>
        <div class="panel__content">
          <div class="btn-item">
            <Button>Secondary operation button</Button>
          </div>
          <div class="btn-item">
            <Button loading>
              Loading
            </Button>
          </div>
          <div class="btn-item">
            <Button disabled>
              disabled
            </Button>
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="panel__title">
          Column Button
        </div>
        <div class="panel__content" style="padding: 0;">
          <div class="btn-item">
            <Button type="primary" full>
              Main operation button
            </Button>
          </div>
          <div class="btn-item">
            <Button type="secondary" full>
              Secondary operation button
            </Button>
          </div>
          <div class="btn-item">
            <Button full>
              Secondary operation button
            </Button>
          </div>
          <div class="btn-item">
            <Button disabled full>
              disabled
            </Button>
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="panel__title">
          Small Button
        </div>
        <div class="panel__content">
          <div class="btn-item">
            <div class="subitem">
              <Button type="primary" size="small">
                Button
              </Button>
            </div>
            <div class="subitem">
              <Button type="secondary" size="small">
                Button
              </Button>
            </div>
            <div class="subitem">
              <Button size="small">
                Button
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
                Button
              </Button>
            </div>
            <div class="subitem">
              <Button type="secondary" size="small" disabled>
                Button
              </Button>
            </div>
            <div class="subitem">
              <Button size="small" disabled>
                Button
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="panel__title">
          Round button
        </div>
        <div class="panel__content">
          <div class="btn-item">
            <div class="subitem">
              <Button type="primary" size="small" circle>
                Button
              </Button>
            </div>
            <div class="subitem">
              <Button type="secondary" size="small" circle>
                Button
              </Button>
            </div>
            <div class="subitem">
              <Button size="small" circle>
                Button
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
                Button
              </Button>
            </div>
            <div class="subitem">
              <Button type="secondary" size="small" disabled circle>
                Button
              </Button>
            </div>
            <div class="subitem">
              <Button size="small" disabled circle>
                Button
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
import { Button } from 'onebay-ui'
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
