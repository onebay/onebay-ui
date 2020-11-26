import { mount } from '@vue/test-utils'
import Button from './index'

const factory = (values = {}, slots = { default: ['click me'] }) => {
  return mount(Button, {
    slots,
    props: { ...values }
  })
}

describe('test Button', () => {
  it('render Button -- props size(normal)', () => {
    const wrapper = factory({
      size: 'normal'
    })
    expect(wrapper.element).toMatchSnapshot()
  })
  it('render Button -- props size(small)', () => {
    const wrapper = factory({
      size: 'small'
    })
    expect(wrapper.element).toMatchSnapshot()
  })
  it('render Button -- props size(primary)', () => {
    const wrapper = factory({
      size: 'primary'
    })
    expect(wrapper.element).toMatchSnapshot()
  })
  it('render Button -- props size(secondary)', () => {
    const wrapper = factory({
      size: 'secondary'
    })
    expect(wrapper.element).toMatchSnapshot()
  })
  it('render Button -- props circle', () => {
    const wrapper = factory({
      circle: true
    })
    expect(wrapper.element).toMatchSnapshot()
  })
  it('render Button -- props full', () => {
    const wrapper = factory({
      full: true
    })
    expect(wrapper.element).toMatchSnapshot()
  })
  it('render Button -- props loading', () => {
    const wrapper = factory({
      loading: true
    })
    expect(wrapper.element).toMatchSnapshot()
  })
  it('render Button -- props disabled', () => {
    const wrapper = factory({
      disabled: true
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('Button Event', () => {
  it('Button trigger click event', () => {
    const wrapper = factory()
    wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })
  it('Button disabled, not to trigger click event', () => {
    const wrapper = factory({
      disabled: true
    })
    expect(!wrapper.emitted().hasOwnProperty('click')).toBe(true)
  })
})
