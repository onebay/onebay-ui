import { mount } from '@vue/test-utils'
import Switch from './index'

const factory = (values = {}, slots = { default: ['switch'] }) => {
  return mount(Switch, {
    slots,
    props: { ...values },
  })
}

describe('Switch Snap', () => {
  it('render initial Switch', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Switch -- props title', () => {
    const wrapper = factory({ title: 'title' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Switch -- props checked', () => {
    const wrapper = factory({ title: 'checked', checked: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Switch -- props border', () => {
    const wrapper = factory({ title: 'border', border: false })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Switch -- props disabled', () => {
    const wrapper1 = factory({ title: 'disabled', checked: true, disabled: true })
    expect(wrapper1.element).toMatchSnapshot()
    const wrapper2 = factory({ title: 'disabled', disabled: true })
    expect(wrapper2.element).toMatchSnapshot()
  })

  it('Switch Change checked', async () => {
    const wrapper = factory({ title: 'checked', checked: false })
    await wrapper.setProps({ checked: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('Switch color', () => {
    const wrapper = factory({ checked: true, color: '#ff4455' })
    expect(wrapper.element).toMatchSnapshot()
  })


})

describe('Switch Event', () => {
  it('Switch onChange', () => {
    const mockEvent = {
      target: { checked: false },
      stopPropagation: () => { }
    }
    const wrapper = factory({ title: 'Event' })
    wrapper.find('.ob-switch .ob-switch__switch').trigger('change', { mockEvent })
    expect(wrapper.emitted()).toHaveProperty('change')
    expect(wrapper.vm.isChecked).toBeFalsy()
  })


})
