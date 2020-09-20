import { mount } from '@vue/test-utils'
import Checkbox from '../../src/components/checkbox/index.vue'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(Checkbox, {
    slots,
    props: { ...values }
  })
}

const checkboxOption = [
  {
    value: 'list1',
    label: 'iPhone X',
    desc:
      '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。'
  },
  { value: 'list2', label: 'HUAWEI P20' },
  {
    value: 'list3',
    label: 'OPPO Find X',
    desc:
      '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
    disabled: true
  },
  {
    value: 'list4',
    label: 'vivo NEX',
    desc:
      '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
    disabled: true
  }
]

describe('Checkbox Snap', () => {
  it('render initial Checkbox', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Checkbox -- props options', () => {
    const wrapper = factory({ options: checkboxOption })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Checkbox -- props selectedList', () => {
    const wrapper = factory({ options: checkboxOption, selectedList: ['list2'] })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('Checkbox Event', () => {
  it('Checkbox onChange', () => {
    const wrapper = mount(<Checkbox options={checkboxOption} selectedList={['list2']} />)
    expect(wrapper.element).toMatchSnapshot()
    wrapper.find('.at-checkbox .at-checkbox__option').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('change')
  })

  it('Checkbox disabled, onChange not to be called', () => {
    const wrapper = mount(<Checkbox options={checkboxOption} selectedList={['list2']} />)
    wrapper.find('.at-checkbox .at-checkbox__option:nth-child(3)').trigger('click')
    expect(wrapper.emitted().hasOwnProperty('change')).toBe(false)
  })
})
