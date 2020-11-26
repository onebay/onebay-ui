import { mount } from '@vue/test-utils'
import Toast from './index'
import { sleep } from '../../utils/helper'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(Toast, {
    slots,
    props: { ...values },
  })
}

const ICON = 'loading'
const TEXT = 'test data'
const IMAGE = 'http://storage.360buyimg.com/mtd/home/group-21533885306540.png'

const STATUS_ERROR = 'error'
const STATUS_SUCCESS = 'success'
const STATUS_LOADING = 'loading'

describe('Toast Snap', () => {
  it('render initial Toast', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened Toast', () => {
    const wrapper = factory({ isOpened: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened Toast -- props text', () => {
    const wrapper = factory({ isOpened: true, text: TEXT })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened Toast -- props icon', () => {
    const wrapper = factory({ isOpened: true, icon: ICON })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened  Toast -- props image', () => {
    const wrapper = factory({ isOpened: true, image: IMAGE })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened  Toast -- props hasMask', () => {
    const wrapper = factory({ isOpened: true, hasMask: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened Toast -- props status : success ', () => {
    const wrapper = factory({ isOpened: true, status: STATUS_SUCCESS })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened Toast -- props status : loading ', () => {
    const wrapper = factory({ isOpened: true, status: STATUS_LOADING })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened Toast -- props status : error ', () => {
    const wrapper = factory({ isOpened: true, status: STATUS_ERROR })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened Toast -- props duration : 0 ', async () => {
    const wrapper = factory({ isOpened: true })
    await wrapper.setProps({ duration: 0 })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('Toast Behavior ', () => {
  it('Toast will close when is clicked && onClose will be called', async () => {
    const onClose = jest.fn()
    const wrapper = factory({ isOpened: true, onClose: onClose })
    expect(wrapper.vm.isOpened).toBeTruthy()
    expect(wrapper.vm.status === 'loading').toBeFalsy()
    wrapper.find('.ob-toast .toast-body').trigger('click')
    await sleep(0)
    expect(onClose).toBeCalled()
  })

  it('Toast will close when time over --- default', async () => {
    const wrapper = factory({ isOpened: true })
    expect(wrapper.vm.isOpened).toBeTruthy()
    expect(wrapper.vm.duration).toEqual(3000)
    await sleep(3000)
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.visible).toBeFalsy()
    })
  })

  it('Toast will close when time over', async () => {
    const wrapper = factory({ isOpened: true, duration: 1000 })
    expect(wrapper.vm.isOpened).toBeTruthy()
    expect(wrapper.vm.duration).toEqual(1000)
    await sleep(1000)
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.visible).toBeFalsy()
    })
  })

  it('Toast onClick will be called', async () => {
    const onClick = jest.fn()
    const wrapper = factory({ isOpened: true, onClick: onClick })
    expect(wrapper.vm.isOpened).toBeTruthy()
    wrapper.find('.ob-toast .toast-body').trigger('click')
    await sleep(0)
    expect(onClick).toBeCalled()
    expect(wrapper.vm.visible).toBeTruthy()
  })

  it('Toast onClick will be called when loading', async () => {
    const onClick = jest.fn()
    const wrapper = factory({ isOpened: true, onClick: onClick, status: 'loading' })
    expect(wrapper.vm.isOpened).toBeTruthy()
    wrapper.find('.ob-toast .toast-body').trigger('click')
    await sleep(0)
    expect(onClick).not.toBeCalled()
  })
})
