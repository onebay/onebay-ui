import { mount } from '@vue/test-utils'
import Drawer from '../../src/components/drawer'
import { sleep } from '../helper'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(Drawer, {
    slots,
    props: { ...values },
  })
}

describe('Drawer Snap', () => {
  it('render initial Drawer', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Drawer -- props show', () => {
    const wrapper = factory({ show: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Drawer -- props width', () => {
    const wrapper = factory({ show: true, width: 50 })
    expect(wrapper.element).toMatchSnapshot()
  })
  it('render Drawer -- props items', () => {
    const wrapper = factory({ show: true, items: ['菜单1', '菜单2'] })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('Drawer Event', () => {
  it('Drawer onItemClick & onClose', async () => {
    const onItemClick = jest.fn()
    const wrapper = factory({
      show: true,
      onItemClick: onItemClick,
      items: ['菜单1', '菜单2'],
    })
    await sleep(300)
    wrapper.find('.at-drawer .at-list__item').trigger('click')
    expect(onItemClick).toBeCalled()
    await sleep(350)
    expect(wrapper.emitted()).toHaveProperty('close')
  })

  it('Drawer item NO.0 & NO.1 click, onItemClick(index) index should be 0 and 1', async () => {
    const onItemClick = jest.fn()
    const wrapper = factory({
      show: true,
      onItemClick: onItemClick,
      items: ['菜单1', '菜单2'],
    })
    await sleep(300)
    console.log('at-list__item :>> ', wrapper.find('.at-drawer .at-list__item'));
    wrapper.find('.at-drawer .at-list__item').trigger('click')
    wrapper.find('.at-drawer .at-list__item[data-index="1"]').trigger('click')
    await sleep(0)
    expect(onItemClick.mock.calls[0][0]).toBe(0)
    expect(onItemClick.mock.calls[1][0]).toBe(1)
  })
  it('Drawer click mask onClose', async () => {
    const onClose = jest.fn()
    const wrapper = factory({
      show: true,
      onClose: onClose,
      items: ['菜单1', '菜单2'],
    })
    await sleep(300)
    wrapper.find('.at-drawer .at-drawer__mask').trigger('click')
    await sleep(350)
    expect(onClose).toBeCalled()
  })
})
