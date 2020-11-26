import { mount } from '@vue/test-utils'
import ImagePreview from './index'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(ImagePreview, {
    slots,
    props: { ...values },
  })
}

const files = [
  'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
  'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
]
describe('ImagePreview Snap', () => {

  it('render initial ImagePreview', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render ImagePreview props images', () => {
    const wrapper = factory({ images: files })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render ImagePreview props show', () => {
    const wrapper = factory({ images: files, show: true })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('ImagePreview Event', () => {
  it('ImagePreview click mask', async () => {
    const wrapper = factory({ images: files, show: true })
    expect(wrapper.vm.visible).toBe(true)
    await wrapper.find('.ob-image-preview-mask').trigger('click')
    expect(wrapper.vm.visible).toBe(false)
    expect(wrapper.emitted()).toHaveProperty('close')
  })

  it('ImagePreview emit open event', async () => {
    const wrapper = factory({ images: files })
    await wrapper.setProps({ show: true })
    expect(wrapper.emitted()).toHaveProperty('open')
  })

  it('ImagePreview dblclick event', () => {
    const wrapper = factory({ images: files, show: true })
    wrapper.trigger('dblclick')
    expect(wrapper.vm.scale).toEqual(1.5)
    wrapper.trigger('dblclick')
    expect(wrapper.vm.scale).toEqual(1)
  })

  it('ImagePreview test touch event', () => {
    const wrapper = factory({ images: files, show: true })
    wrapper.trigger('touchstart', {
      targetTouches: [
        { identifier: 0, clientX: 50, clientY: 50 },
        { identifier: 1, clientX: 100, clientY: 100 },
      ]
    })
    // test minScale
    wrapper.trigger('touchmove', {
      changedTouches: [
        { identifier: 0, clientX: 40, clientY: 40 },
        { identifier: 1, clientX: 60, clientY: 60 }
      ]
    })
    wrapper.trigger('touchmove', {
      changedTouches: [
        { identifier: 0, clientX: 40, clientY: 40 },
        { identifier: 1, clientX: 120, clientY: 120 },
        { identifier: 2, clientX: 120, clientY: 120 }
      ]
    })
    // test maxScale
    wrapper.trigger('touchmove', {
      changedTouches: [
        { identifier: 0, clientX: 40, clientY: 40 },
        { identifier: 1, clientX: 320, clientY: 320 }
      ]
    })
    wrapper.trigger('touchend', {
      changedTouches: [
        { identifier: 0, clientX: 40, clientY: 40 },
        { identifier: 1, clientX: 120, clientY: 120 },
      ]
    })
  })
})