import { mount } from '@vue/test-utils'
import Divider from '../../src/components/divider'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(Divider, {
    components: {},
    slots,
    props: { ...values },
  })
}

describe('Divider Snap', () => {
  it('render initial Divider', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Divider -- props className', () => {
    const wrapper = factory({ className: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Divider -- props customStyle', () => {
    const wrapper = factory({ customStyle: 'color:red;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Divider -- props content', () => {
    const wrapper = factory({ content: 'content' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Divider -- props height', () => {
    const wrapper = factory({ height: '120' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Divider -- props fontColor', () => {
    const wrapper = factory({ fontColor: '#fff' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Divider -- props fontSize', () => {
    const wrapper = factory({ fontSize: '56' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Divider -- props lineColor', () => {
    const wrapper = factory({ lineColor: '#fff' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Divider -- props childen', () => {
    const wrapper = factory({ childen: 'content' }, { default: ['test'] })
    expect(wrapper.element).toMatchSnapshot()
  })
})
