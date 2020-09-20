<template>
  <div class="page">
    <!-- S Header -->
    <DocsHeader title="Checkbox 复选框"></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <div class="doc-body">
      <!-- 基础用法 -->
      <div class="panel">
        <div class="panel__title">基础用法</div>
        <div class="panel__content no-padding">
          <div class="example-item">
            <div class="checkbox-container">
              <Checkbox
                :options="state.checkboxOption1"
                :selectedList="state.checkedList1"
                :onChange="handleChange"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- 含描述信息 -->
      <div class="panel">
        <div class="panel__title">含描述信息</div>
        <div class="panel__content no-padding">
          <div class="example-item">
            <div class="checkbox-container">
              <Checkbox
                :options="state.checkboxOption2"
                :selectedList="state.checkedList2"
                :onChange="handleChangeSnd"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- 选项禁用 -->
      <div class="panel">
        <div class="panel__title">选项禁用</div>
        <div class="panel__content no-padding">
          <div class="example-item">
            <div class="checkbox-container">
              <Checkbox
                :options="state.checkboxOption3"
                :selectedList="state.checkedList3"
                :onChange="handleChangeThd"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- E Body -->
  </div>
</template>

<script>
import { defineComponent, ref } from "vue"
import { Checkbox } from '/@/swift-ui/src/index.ts'
export default defineComponent({
  name: 'CheckboxPage',
  components: {
    Checkbox
  },
  data() {
    return {
      state: {
        checkedList1: ['list1'],
        checkedList2: ['list1'],
        checkedList3: ['list1', 'list4'],
        checkboxOption1: [
          { value: 'list1', label: 'iPhone X' },
          { value: 'list2', label: 'HUAWEI P20' },
          { value: 'list3', label: 'OPPO Find X' },
        ],
        checkboxOption2: [
          {
            value: 'list1',
            label: 'iPhone X',
            desc:
              '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
          },
          {
            value: 'list2',
            label: 'HUAWEI P20',
            desc:
              '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
          },
          {
            value: 'list3',
            label: 'OPPO Find X',
            desc:
              '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
          },
        ],
        checkboxOption3: [
          {
            value: 'list1',
            label: 'iPhone X',
            desc:
              '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
          },
          { value: 'list2', label: 'HUAWEI P20' },
          {
            value: 'list3',
            label: 'OPPO Find X',
            desc:
              '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
            disabled: true,
          },
          {
            value: 'list4',
            label: 'vivo NEX',
            desc:
              '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
            disabled: true,
          },
        ],
      },
    }
  },
  methods: {
    handleChange(value) {
      this.state.checkedList1 = value
    },

    handleChangeSnd(value) {
      this.state.checkedList2 = value
    },

    handleChangeThd(value) {
      this.state.checkedList3 = value
    },
  },
})
</script>
