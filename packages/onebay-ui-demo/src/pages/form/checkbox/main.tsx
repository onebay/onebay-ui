import { defineComponent, reactive } from 'vue'
import { Checkbox } from onebay - ui
import DocsHeader from '../../../components/DocHeader/DocsHeader'

export default defineComponent({
  name: 'CheckboxPage',
  components: {
    Checkbox
  },
  setup() {
    const state = reactive({
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
            'Some regions provide electronic ordinary invoices, which users can print by themselves, and the effect is equivalent to paper ordinary invoices. The actual invoice type shall prevail.',
        },
        {
          value: 'list2',
          label: 'HUAWEI P20',
          desc:
            'Some regions provide electronic ordinary invoices, which users can print by themselves, and the effect is equivalent to paper ordinary invoices. The actual invoice type shall prevail.',
        },
        {
          value: 'list3',
          label: 'OPPO Find X',
          desc:
            'Some regions provide electronic ordinary invoices, which users can print by themselves, and the effect is equivalent to paper ordinary invoices. The actual invoice type shall prevail.',
        },
      ],
      checkboxOption3: [
        {
          value: 'list1',
          label: 'iPhone X',
          desc:
            'Some regions provide electronic ordinary invoices, which users can print by themselves, and the effect is equivalent to paper ordinary invoices. The actual invoice type shall prevail.',
        },
        { value: 'list2', label: 'HUAWEI P20' },
        {
          value: 'list3',
          label: 'OPPO Find X',
          desc:
            'Some regions provide electronic ordinary invoices, which users can print by themselves, and the effect is equivalent to paper ordinary invoices. The actual invoice type shall prevail.',
          disabled: true,
        },
        {
          value: 'list4',
          label: 'vivo NEX',
          desc:
            'Some regions provide electronic ordinary invoices, which users can print by themselves, and the effect is equivalent to paper ordinary invoices. The actual invoice type shall prevail.',
          disabled: true,
        },
      ],
    })
    const handleChange = (value) => {
      state.checkedList1 = value
    }

    const handleChangeSnd = (value) => {
      state.checkedList2 = value
    }

    const handleChangeThd = (value) => {
      state.checkedList3 = value
    }
    return () => {
      return (
        <div class="page">
          <DocsHeader title="Checkbox"></DocsHeader>
          <div class="doc-body">
            <div class="panel">
              <div class="panel__title">Basic usage</div>
              <div class="panel__content no-padding">
                <div class="example-item">
                  <div class="checkbox-container">
                    <Checkbox
                      options={state.checkboxOption1}
                      selectedList={state.checkedList1}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="panel">
              <div class="panel__title">With descriptive information</div>
              <div class="panel__content no-padding">
                <div class="example-item">
                  <div class="checkbox-container">
                    <Checkbox
                      options={state.checkboxOption2}
                      selectedList={state.checkedList2}
                      onChange={handleChangeSnd}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="panel">
              <div class="panel__title">Option disabled</div>
              <div class="panel__content no-padding">
                <div class="example-item">
                  <div class="checkbox-container">
                    <Checkbox
                      options={state.checkboxOption3}
                      selectedList={state.checkedList3}
                      onChange={handleChangeThd}
                    />
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
