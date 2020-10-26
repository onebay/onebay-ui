import { mount } from '@vue/test-utils'
import { ImagePicker } from '../../src/index'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(ImagePicker, {
    slots,
    props: { ...values },
  })
}

const files = [
  {
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
  },
  {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    id: '2122',
  },
  {
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
  },
  {
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
  },
  {
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
  },
]
describe('ImagePicker Snap', () => {

  it('render initial ImagePicker', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render ImagePicker -- props className', () => {
    const wrapper = factory({ className: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render ImagePicker -- props customStyle', () => {
    const wrapper = factory({ customStyle: 'color:red;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render ImagePicker -- props files', () => {
    const wrapper = factory({ files: files })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render ImagePicker -- props length', () => {
    const wrapper = factory({ files: files, length: 5 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render ImagePicker -- props mode', () => {
    const wrapper = factory({ files: files, mode: 'top' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render ImagePicker -- props showAddBtn', () => {
    const wrapper = factory({ files: files, showAddBtn: false })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render ImagePicker -- props multiple', () => {
    const wrapper = factory({ files: files, multiple: true })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('ImagePicker Event', () => {
  it('ImagePicker onImageClick', async () => {
    const onImageClick = jest.fn()
    const wrapper = factory({ files: files })
    wrapper.find('.at-image-picker__preview-img').trigger('click')
    await wrapper.setProps({ onImageClick })
    wrapper.find('.at-image-picker__preview-img').trigger('click')
    expect(onImageClick).toBeCalled()
  })
  it('ImagePicker remove image', () => {
    window.URL.revokeObjectURL = () => { }
    const wrapper = factory({ files: files })
    wrapper.find('.at-image-picker__remove-btn').trigger('click')
  })
  it('ImagePicker choose File', () => {
    const wrapper = factory({ files: files, multiple: true })
    wrapper.find('.at-image-picker__choose-btn').trigger('click')
  })
})