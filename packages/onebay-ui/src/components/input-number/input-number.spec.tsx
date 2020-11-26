import { mount } from '@vue/test-utils'
import InputNumber from './index'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(InputNumber, {
    slots,
    props: { ...values },
  })
}

describe('InputNumber Snap', () => {
  it('render initial InputNumber', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render InputNumber -- props customStyle', () => {
    const wrapper = factory({ customStyle: 'color:red;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render InputNumber -- props className', () => {
    const wrapper = factory({ className: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render InputNumber -- props type(number)', () => {
    const wrapper = factory({ type: 'number' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render InputNumber -- props type(digit)', () => {
    const wrapper = factory({ type: 'digit' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render InputNumber -- props disabled', () => {
    const wrapper = factory({ disabled: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render InputNumber -- props disabledInput', () => {
    const wrapper = factory({ disabledInput: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render InputNumber -- props value', () => {
    const wrapper = factory({ value: 2 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render InputNumber -- props width', () => {
    const wrapper = factory({ width: 200 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render InputNumber -- props size', () => {
    const wrapper = factory({ size: 'large' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render InputNumber -- props step', () => {
    const wrapper = factory({ step: 2 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render InputNumber -- props value & min = ""', () => {
    const wrapper = factory({ value: '', min: 0 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render InputNumber -- props value = "a"', () => {
    const wrapper = factory({ value: 'a' })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('InputNumber Event', () => {
  it('InputNumber onChange', async () => {
    const wrapper = factory({ value: 2, disabled: true })
    wrapper.find('.ob-input-number .ob-input-number__input').trigger('input')
    expect(wrapper.emitted()).not.toHaveProperty('change')
    await wrapper.setProps({ disabled: false })
    wrapper.find('.ob-input-number .ob-input-number__input').trigger('input')
    expect(wrapper.emitted()).toHaveProperty('change')
  })

  it('InputNumber onBlur', () => {
    const onBlur = jest.fn()
    const wrapper = factory({ value: 2, onBlur: onBlur })
    wrapper.find('.ob-input-number .ob-input-number__input').trigger('blur')
    expect(onBlur).toBeCalled()
  })

  it('InputNumber onClick min bigger than value', async () => {
    const wrapper = factory({ value: 2, min: 3 })
    wrapper.find('.ob-input-number .ob-input-number__btn').trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('change')
    await wrapper.setProps({ min: 0 })
    wrapper.find('.ob-input-number .ob-input-number__btn').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('change')
  })

  it('InputNumber onClick max smaller than value', async () => {
    const wrapper = factory({ value: '', max: 18, disabled: true })
    wrapper.find('.ob-input-number .ob-input-number__btn:last-child').trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('change')
    await wrapper.setProps({ disabled: false, value: 20 })
    wrapper.find('.ob-input-number .ob-input-number__btn:last-child').trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('change')
    await wrapper.setProps({ value: 10 })
    wrapper.find('.ob-input-number .ob-input-number__btn:last-child').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('change')
  })
})
