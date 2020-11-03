import { mount } from '@vue/test-utils'
import { ImagePreview } from '../../src/index'

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
})