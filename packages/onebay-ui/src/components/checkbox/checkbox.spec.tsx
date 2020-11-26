import { mount } from '@vue/test-utils'
import Checkbox from './index'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(Checkbox, {
    slots,
    props: { ...values }
  })
}
const text = 'Some regions provide electronic ordinary invoices, which users can print by themselves, and the effect is equivalent to paper ordinary invoices. The actual invoice type shall prevail.'
const checkboxOption = [
  {
    value: 'list1',
    label: 'iPhone X',
    desc: text
  },
  { value: 'list2', label: 'HUAWEI P20' },
  {
    value: 'list3',
    label: 'OPPO Find X',
    desc: text,
    disabled: true
  },
  {
    value: 'list4',
    label: 'vivo NEX',
    desc: text,
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
    wrapper.find('.ob-checkbox .ob-checkbox__option').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('change')
  })

  it('Checkbox disabled, onChange not to be called', () => {
    const wrapper = mount(<Checkbox options={checkboxOption} selectedList={['list2']} />)
    wrapper.find('.ob-checkbox .ob-checkbox__option:nth-child(3)').trigger('click')
    expect(wrapper.emitted().hasOwnProperty('change')).toBe(false)
  })
})
