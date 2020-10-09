import { mount } from '@vue/test-utils'
import { Message } from '../../src/index'
import { sleep } from '../helper'


const factory = (values = {}, slots = { default: [] }) => {
  return mount(Message, {
    components: {},
    slots,
    props: { ...values },
  })
}

describe('Message Snap', () => {
  it('render initial Message', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Message -- props className', () => {
    const wrapper = factory({ className: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Message -- props customStyle', () => {
    const wrapper = factory({ customStyle: 'color:red;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('Change Message props -- isOpened', async () => {
    const wrapper = factory()
    wrapper.setProps({ isOpened: true })
    await sleep(100)
    expect(wrapper.vm.isOpened).toBeTruthy()
  })

  it('Change Message props -- duration', async () => {
    const wrapper = factory({ duration: 1000 })
    wrapper.setProps({ isOpened: true })
    await sleep(1500)
    expect(wrapper.emitted()).toHaveProperty('close')
  })
})

describe('Message Behavior ', () => {
  it('Message onClick', () => {
    const wrapper = factory({ isOpened: true })
    wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
})