<template>
  <div class="page row-page">
    <DocsHeader title="Row & Col" />
    <div class="doc-body">
      <div class="panel">
        <div class="panel__title">Basic usage</div>
        <div class="panel__content no-padding">
          <Row>
            <Col :span="8">span: 8</Col>
            <Col :span="8">span: 8</Col>
            <Col :span="8">span: 8</Col>
          </Row>
          <Row>
            <Col :span="6">span: 8</Col>
            <Col :span="10" :offset="4">offset: 4 span: 10</Col>
          </Row>
        </div>
      </div>
      <div class="panel">
        <div class="panel__title">Spaces between</div>
        <div class="panel__content no-padding">
          <Row :gutter="20">
            <Col :span="8">span: 8</Col>
            <Col :span="8">span: 8</Col>
            <Col :span="8">span: 8</Col>
          </Row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Row, Col } from '/@/swift-ui/src/index.ts'
import './index.scss'

export default defineComponent({
  name: 'RowPage',
  components: {
    Row,
    Col
  }
})
</script>