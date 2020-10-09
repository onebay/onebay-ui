import { mount } from '@vue/test-utils'
import Input from '../../src/components/input'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(Input, {
    slots,
    props: { ...values },
  })
}

describe('Input Snap', () => {
  it('render initial Input', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Input -- props style', () => {
    const wrapper = factory({ style: 'border:none;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Input -- props value', () => {
    const wrapper = factory({ value: 'value' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Input -- props name', () => {
    const wrapper = factory({ name: 'name' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Input -- props placeholder', () => {
    const wrapper = factory({ placeholder: 'placeholder' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Input -- props title', () => {
    const wrapper = factory({ title: 'title' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Input -- props maxLength', () => {
    const wrapper = factory({ maxLength: 10 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Input -- props type(number)', () => {
    const wrapper = factory({ type: 'number' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Input -- props type(password)', () => {
    const wrapper = factory({ type: 'password' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Input -- props type(idcard)', () => {
    const wrapper = factory({ type: 'idcard' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Input -- props type(digit)', () => {
    const wrapper = factory({ type: 'digit' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Input -- props type(phone)', () => {
    const wrapper = factory({ type: 'phone' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Input -- props disabled', () => {
    const wrapper = factory({ disabled: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Input -- props border', () => {
    const wrapper = factory({ border: false })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Input -- props editable', () => {
    const wrapper = factory({ editable: false })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Input -- props error', () => {
    const wrapper = factory({ error: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Input -- props clear', () => {
    const wrapper = factory({ clear: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Input -- props required', () => {
    const wrapper = factory({ required: true, title: 'name' })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('Input Event', () => {
  it('Input onChange', () => {
    const onChange = jest.fn()
    const wrapper = factory({ onChange: onChange })
    wrapper.find('.at-input__input').trigger('change')
    expect(onChange).toBeCalled()
  })

  it('Input onInput event', () => {
    const wrapper = factory()
    wrapper.find('.at-input__input').trigger('input')
    expect(wrapper.emitted()).toHaveProperty('input')
  })

  it('Input onFocus', () => {
    const onFocus = jest.fn()
    const wrapper = factory({ onFocus: onFocus })
    wrapper.find('.at-input__input').trigger('focus')
    expect(wrapper.emitted()).toHaveProperty('focus')
  })

  it('Input onBlur', () => {
    const onBlur = jest.fn()
    const wrapper = factory({ onBlur: onBlur })
    wrapper.find('.at-input__input').trigger('blur')
    expect(wrapper.emitted()).toHaveProperty('blur')
  })

  it('Input onClick', () => {
    const onClick = jest.fn()
    const wrapper = factory({ onClick: onClick, editable: false })
    wrapper.find('.at-input .at-input__overlay').trigger('click')
    expect(onClick).toBeCalled()
  })

  it('Input clear Behavior', () => {
    const onChange = jest.fn()
    const wrapper = factory({ onChange: onChange, clear: true, value: 'value' })
    wrapper.find('.at-input .at-input__icon').trigger('click')
    expect(wrapper.vm.inputClearing).toBeTruthy()
    expect(onChange).toBeCalled()
  })

  it('Input error Behavior', () => {
    const onErrorClick = jest.fn()
    const wrapper = factory({ onErrorClick: onErrorClick, error: true, value: 'value' })
    wrapper.find('.at-input .at-input__icon').trigger('click')
    expect(onErrorClick).toBeCalled()
  })
})
