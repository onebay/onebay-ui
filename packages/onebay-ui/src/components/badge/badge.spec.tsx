import { mount } from '@vue/test-utils'
import Badge from './index'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(Badge, {
    slots,
    components: {},
    props: { ...values }
  })
}

describe('Badge Snap', () => {
  it('render initial Badge', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Loading -- props dot', () => {
    const wrapper = factory({
      dot: true
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Badge -- props maxValue', () => {
    const wrapper = factory({ value: '10', maxValue: 9 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Badge -- props value less than maxValue', () => {
    const wrapper = factory({ value: '4', maxValue: 9 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Badge -- props value not valid', () => {
    const wrapper = factory({ value: 's', maxValue: 9 })
    expect(wrapper.element).toMatchSnapshot()
  })
})
