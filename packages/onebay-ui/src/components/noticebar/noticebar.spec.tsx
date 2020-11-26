import { mount } from '@vue/test-utils'
import Noticebar from './index'
import { sleep } from '../../utils/helper'

const factory = (values = {}, slots = { default: ['这是内容'] }) => {
  return mount(Noticebar, {
    slots,
    props: { ...values },
  })
}

describe('Noticebar Snap', () => {
  it('render Noticebar -- props show', () => {
    const wrapper = factory({ close: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Noticebar -- props single', () => {
    const wrapper = factory({ single: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Noticebar -- props speed', () => {
    const wrapper = factory({ speed: 200 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Noticebar -- props moreText & showMore', () => {
    // showMore work only when single is true
    const wrapper = factory({ moreText: 'see details', showMore: true, single: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Noticebar -- props icon', () => {
    const wrapper = factory({ icon: 'volume-plus' })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('Noticebar Event', () => {
  it('Noticebar onClose', async () => {
    const onClose = jest.fn()
    const wrapper = factory({
      marquee: true,
      close: true,
      onClose: onClose,
    })
    await sleep(100)
    expect(wrapper.element).toMatchSnapshot()
    wrapper.find('.ob-noticebar__close').trigger('click')
    expect(onClose).toBeCalled()
  })

  it('Noticebar onGotoMore', () => {
    const onGotoMore = jest.fn()
    const wrapper = factory({
      icon: 'volume-plus',
      single: true,
      showMore: true,
      onGotoMore: onGotoMore,
      moreText: 'more',
    })
    wrapper.find('.ob-noticebar__more').trigger('click')
    expect(onGotoMore).toBeCalled()
  })
  it('Noticebar default onGotoMore', () => {
    const wrapper = factory({
      icon: 'volume-plus',
      single: true,
      showMore: true,
      moreText: 'more',
    })
    wrapper.find('.ob-noticebar__more').trigger('click')
  })
})
