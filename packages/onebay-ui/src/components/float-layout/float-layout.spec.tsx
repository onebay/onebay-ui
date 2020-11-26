import { mount } from '@vue/test-utils'
import FloatLayout from './index'
import { sleep } from '../../utils/helper'

const factory = (
  values = {},
  slots = {
    default: [
      `This is the content area, write as you like
      This is the content area, write as you like
      This is the content area, write as you like`,
    ],
  }
) => {
  return mount(FloatLayout, {
    components: {},
    slots,
    props: { ...values },
  })
}

describe('FloatLayout Snap', () => {
  it('render initial FloatLayout', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render FloatLayout -- props isOpened', () => {
    const wrapper = factory({ isOpened: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render FloatLayout -- props title', () => {
    const wrapper = factory({ title: 'This is a Title', isOpened: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('Change FloatLayout -- props isOpened', async () => {
    const wrapper = factory()
    await wrapper.setProps({ isOpened: true })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('FloatLayout Behavior ', () => {
  it('FloatLayout onClose', async () => {
    const onClose = jest.fn()
    const wrapper = factory({
      title: 'This is a Title',
      isOpened: true,
      onClose: onClose,
    })
    wrapper.trigger('touchmove')
    wrapper.find('.ob-float-layout__overlay').trigger('click')
    await sleep(0)
    expect(onClose).toBeCalled()
  })
})
