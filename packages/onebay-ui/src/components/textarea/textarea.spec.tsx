import { mount } from '@vue/test-utils'
import Textarea from './index'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(Textarea, {
    slots,
    props: { value: '', ...values },
  })
}

describe('Textarea Snap', () => {
  it('render initial Textarea', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Textarea -- props style', () => {
    const wrapper = factory({ style: 'color:red;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Textarea -- props className', () => {
    const wrapper = factory({ className: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Textarea -- props value', () => {
    const wrapper = factory({ value: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Textarea -- props maxLength', () => {
    const wrapper = factory({ maxLength: 300 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Textarea -- props placeholder', () => {
    const wrapper = factory({ placeholder: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Textarea -- props count', () => {
    const wrapper = factory({ count: false })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Textarea -- props height', () => {
    const wrapper = factory({ height: 3000 })
    expect(wrapper.vm.height).toBe(3000)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Textarea textOverflowForbidden false', () => {
    const wrapper = factory({ textOverflowForbidden: false })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('Textarea Event', () => {
  it('Textarea onChange Event', () => {
    const wrapper = factory({ value: 'test' })
    wrapper.find('.ob-textarea__textarea').trigger('input')
    expect(wrapper.emitted()).toHaveProperty('change')
  })

  it('Textarea onBlur Event', () => {
    const wrapper = factory({ value: 'test' })
    wrapper.find('.ob-textarea__textarea').trigger('blur')
    expect(wrapper.emitted()).toHaveProperty('blur')
  })

  it('Textarea onFocus Event', () => {
    const wrapper = factory({ value: 'test' })
    wrapper.find('.ob-textarea__textarea').trigger('focus')
    expect(wrapper.emitted()).toHaveProperty('focus')
  })
})
