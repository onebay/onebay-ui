import { mount } from '@vue/test-utils'
import Slider from './index'
import { sleep } from '../../utils/helper'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(Slider, {
    slots,
    props: { ...values },
  })
}

describe('Slider Snap', () => {
  it('render initial Slider', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Slider -- props value', () => {
    const wrapper = factory({ value: 50 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Slider -- props step', () => {
    const wrapper = factory({ step: 1 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Slider -- props min', () => {
    const wrapper = factory({ min: 50 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Slider -- props max', () => {
    const wrapper = factory({ max: 200 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Slider -- props disabled', () => {
    const wrapper = factory({ disabled: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Slider -- props activeColor', () => {
    const wrapper = factory({ activeColor: 'red' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Slider -- props backgroundColor', () => {
    const wrapper = factory({ backgroundColor: 'red' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Slider -- props blockColor', () => {
    const wrapper = factory({ blockColor: 'red' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Slider -- props blockSize', () => {
    const wrapper = factory({ blockSize: 24 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Slider -- props showValue', () => {
    const wrapper = factory({ showValue: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Slider -- props trackColor', () => {
    const wrapper = factory({ trackColor: "#f45" })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Slider -- props handlerColor', () => {
    const wrapper = factory({ handlerColor: "#f45" })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Slider -- props value less than min', () => {
    const wrapper = factory({ value: 10, min: 20 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Slider -- props value greater than max', () => {
    const wrapper = factory({ value: 110 })
    expect(wrapper.element).toMatchSnapshot()
  })


})

describe('Slider Event', () => {
  it('Slider onChange', async () => {
    const onChange = jest.fn()
    const wrapper = factory({ onChange: onChange })
    wrapper.find('.ob-slider__handler').trigger('touchstart', { changedTouches: [{ clientX: 50 }] })
    wrapper.find('.ob-slider__handler').trigger('touchmove', { changedTouches: [{ clientX: 100 }] })
    wrapper.find('.ob-slider__handler').trigger('touchend', { changedTouches: [{ clientX: 100 }] })
    await sleep(0)
    expect(onChange).toBeCalled()
  })
  it('Slider disabled onChange', async () => {
    const onChange = jest.fn()
    const wrapper = factory({ onChange: onChange, disabled: true })
    wrapper.find('.ob-slider__handler').trigger('touchstart', { changedTouches: [{ clientX: 50 }] })
    wrapper.find('.ob-slider__handler').trigger('touchmove', { changedTouches: [{ clientX: 100 }] })
    wrapper.find('.ob-slider__handler').trigger('touchend', { changedTouches: [{ clientX: 100 }] })
    await sleep(0)
    expect(onChange).not.toBeCalled()
  })

  it('Slider distance === 0 ', async () => {
    const onChange = jest.fn()
    const wrapper = factory({ onChange: onChange })
    wrapper.find('.ob-slider__handler').trigger('touchstart', { changedTouches: [{ clientX: 50 }] })
    wrapper.find('.ob-slider__handler').trigger('touchend', { changedTouches: [{ clientX: 50 }] })
    await sleep(0)
    expect(onChange).not.toBeCalled()
  })
})
