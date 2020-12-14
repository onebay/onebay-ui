<template>
  <div class="page row-page">
    <DocsHeader title="Row & Col" />
    <div class="doc-body">
      <div class="panel">
        <div class="panel__title">Basic usage</div>
        <div class="panel__content no-padding">
          <Flex>
            <FlexItem>Flex</FlexItem>
            <FlexItem>Flex</FlexItem>
          </Flex>
          <Flex>
            <FlexItem>Flex</FlexItem>
            <FlexItem>Flex</FlexItem>
            <FlexItem>Flex</FlexItem>
          </Flex>
          <Flex>
            <FlexItem>Flex</FlexItem>
            <FlexItem>Flex</FlexItem>
            <FlexItem>Flex</FlexItem>
            <FlexItem>Flex</FlexItem>
          </Flex>
          <Flex align="end">
            <FlexItem>Flex</FlexItem>
            <FlexItem>Flex</FlexItem>
            <FlexItem>Flex</FlexItem>
            <FlexItem>Flex</FlexItem>
          </Flex>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Flex } from 'onebay-ui'
import './index.scss'

export default defineComponent({
  name: 'RowPage',
  components: {
    Flex,
    FlexItem: Flex.Item
  }
})
</script>