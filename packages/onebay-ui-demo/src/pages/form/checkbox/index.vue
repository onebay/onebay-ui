<template>
  <div class="page">
    <!-- S Header -->
    <DocsHeader title="Checkbox"></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <div class="doc-body">
      <!-- Basic usage -->
      <div class="panel">
        <div class="panel__title">Basic usage</div>
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

      <!-- With descriptive information -->
      <div class="panel">
        <div class="panel__title">With descriptive information</div>
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

      <!-- Option disabled -->
      <div class="panel">
        <div class="panel__title">Option disabled</div>
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
import { defineComponent, ref } from 'vue'
import { Checkbox } from 'onebay-ui'
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
          { value: 'list3', label: 'OPPO Find X' }
        ],
        checkboxOption2: [
          {
            value: 'list1',
            label: 'iPhone X',
            desc:
              'Some regions provide electronic ordinary invoices, which are equivalent to paper ordinary invoices. The actual invoice type shall prevail.'
          },
          {
            value: 'list2',
            label: 'HUAWEI P20',
            desc:
              'Some regions provide electronic ordinary invoices, which are equivalent to paper ordinary invoices. The actual invoice type shall prevail.'
          },
          {
            value: 'list3',
            label: 'OPPO Find X',
            desc:
              'Some regions provide electronic ordinary invoices, which are equivalent to paper ordinary invoices. The actual invoice type shall prevail.'
          }
        ],
        checkboxOption3: [
          {
            value: 'list1',
            label: 'iPhone X',
            desc:
              'Some regions provide electronic ordinary invoices, which are equivalent to paper ordinary invoices. The actual invoice type shall prevail.'
          },
          { value: 'list2', label: 'HUAWEI P20' },
          {
            value: 'list3',
            label: 'OPPO Find X',
            desc:
              'Some regions provide electronic ordinary invoices, which are equivalent to paper ordinary invoices. The actual invoice type shall prevail.',
            disabled: true
          },
          {
            value: 'list4',
            label: 'vivo NEX',
            desc:
              'Some regions provide electronic ordinary invoices, which are equivalent to paper ordinary invoices. The actual invoice type shall prevail.',
            disabled: true
          }
        ]
      }
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
    }
  }
})
</script>
