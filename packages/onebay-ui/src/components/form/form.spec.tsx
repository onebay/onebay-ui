import { mount } from '@vue/test-utils'
import Form from './index'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(Form, {
    slots,
    props: { ...values },
  })
}

describe('Form Snap', () => {
  it('render initial Form', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render initial Form', () => {
    const wrapper = factory({ reportSubmit: true })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('Form Event', () => {
  it('Form onSubmit', () => {
    const onSubmit = jest.fn()
    const wrapper = factory({ onSubmit: onSubmit })
    wrapper.find('.ob-form').trigger('submit')
    expect(onSubmit).toBeCalled()
  })

  it('Form onReset', () => {
    const onReset = jest.fn()
    const wrapper = factory({ onReset: onReset })
    wrapper.find('.ob-form').trigger('reset')
    expect(onReset).toBeCalled()
  })
})
