import { mount } from '@vue/test-utils'
import Rate from './index'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(Rate, {
    slots,
    props: { ...values },
  })
}

describe('Rate Snap', () => {
  it('render initial Rate', () => {
    const wrapper = factory({ isTest: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Rate -- props className', () => {
    const wrapper = factory({ className: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Rate -- props customStyle', () => {
    const wrapper = factory({ customStyle: 'color:red;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Rate -- props size', () => {
    const wrapper = factory({ size: '10' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Rate -- props value', () => {
    const wrapper = factory({ value: 2 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Rate -- props max', () => {
    const wrapper = factory({ max: 10 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Rate -- props margin', () => {
    const wrapper = factory({ margin: 10 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Rate -- props float value', () => {
    const wrapper = factory({ value: 2.4 })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('Rate Event', () => {
  it('Rate onChange Event', () => {
    const onChange = jest.fn()
    const wrapper = factory({ value: 2, onChange: onChange })
    wrapper.find('.ob-rate__icon').trigger('click')
    expect(onChange).toBeCalled()
  })
})
