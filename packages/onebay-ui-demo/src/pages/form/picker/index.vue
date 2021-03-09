<template>
  <div class="page picker__page">
    <!-- S Header -->
    <DocsHeader title="Picker"></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <div class="doc-body">
      <!-- single Picker -->
      <div class="panel">
        <div class="panel__title">single Picker</div>
        <div class="panel__content">
          <div class="example-item">
            <Picker
              mode="selector"
              :range="state.selector"
              :value="state.selectorValue"
              @change="handleChange"
              @cancel="handleCancel"
            >
              <div class="demo-list-item">
                <div class="demo-list-item__label">language</div>
                <div class="demo-list-item__value">
                  {{ state.selector[state.selectorValue] }}
                </div>
              </div>
            </Picker>
          </div>
        </div>
      </div>

      <!-- multi Picker -->
      <div class="panel">
        <div class="panel__title">multi Picker</div>
        <div class="panel__content">
          <div class="example-item">
            <Picker
              mode="multiSelector"
              :range="state.multiSelector"
              :value="state.mulitSelectorValues"
              @change="handleMulitChange"
              @columnchange="handleColumnChange"
            >
              <div class="demo-list-item">
                <div class="demo-list-item__label">Please select menu</div>
                <div class="demo-list-item__value">
                  {{
                    `${state.multiSelector[0][state.mulitSelectorValues[0]]} & ${
                      state.multiSelector[1][state.mulitSelectorValues[1]]
                    }`
                  }}
                </div>
              </div>
            </Picker>
          </div>
        </div>
      </div>

      <!-- Time Picker -->
      <div class="panel">
        <div class="panel__title">Time Picker</div>
        <div class="panel__content">
          <div class="example-item">
            <Picker mode="time" :value="state.timeSel" @change="handleTimeChange">
              <div class="demo-list-item">
                <div class="demo-list-item__label">Please select a time</div>
                <div class="demo-list-item__value">{{ state.timeSel }}</div>
              </div>
            </Picker>
          </div>
        </div>
      </div>

      <!-- Date Picker -->
      <div class="panel">
        <div class="panel__title">Date Picker</div>
        <div class="panel__content">
          <div class="example-item">
            <Picker mode="date" :value="state.dateSel" @change="handleDateChange">
              <div class="demo-list-item">
                <div class="demo-list-item__label">Please select a date</div>
                <div class="demo-list-item__value">{{ state.dateSel }}</div>
              </div>
            </Picker>
          </div>
        </div>
      </div>
      <!-- use with rangeKey -->
      <div class="panel">
        <div class="panel__title">use with rangeKey</div>
        <div class="panel__content">
          <div class="example-item">
            <Picker 
            mode="selector" 
            :range="state.rangeKeyOptions"
            rangeKey="label"
            :value="state.value" 
            @change="handleChangeWithRangeKey">
              <div class="demo-list-item">
                <div class="demo-list-item__label">Please select a item</div>
                <div class="demo-list-item__value">{{ rangeKeyValue }}</div>
              </div>
            </Picker>
          </div>
        </div>
      </div>
    </div>
    <!-- E Body -->
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Picker } from 'onebay-ui'
import './index.scss'

export default defineComponent({
  name: 'PickerPage',
  components: {
    Picker
  },
  data() {
    return {
      state: {
        selector: ['java', 'python', 'typescript'],
        multiSelector: [
          ['vue', 'typescript'],
          ['scss', 'less']
        ],
        selectorValue: 0,
        mulitSelectorValues: [0, 1],
        timeSel: '06:18',
        dateSel: '2018-06-18',
        value: '',
        rangeKeyOptions: [
          { value: 0, label: 'vue' },
          { value: 1, label: 'onebay' }
        ]
      }
    }
  },
  computed: {
    rangeKeyValue () {
      const item = this.state.rangeKeyOptions.find(item => item.value === this.state.value)
      return item ? item['label'] : ''
    }
  },
  methods: {
    handleChange(e) {
      this.state.selectorValue = e
    },

    handleMulitChange(e) {
      this.state.mulitSelectorValues = e
    },

    handleTimeChange(e) {
      this.state.timeSel = e
    },

    handleDateChange(e) {
      this.state.dateSel = e
    },

    handleCancel(e) {
      console.log('handleCancel', e)
    },

    handleColumnChange(e) {
      console.log('handleColumnChange', e)
    },

    handleChangeWithRangeKey(value) {
      this.state.value = value
    }
  }
})
</script>
