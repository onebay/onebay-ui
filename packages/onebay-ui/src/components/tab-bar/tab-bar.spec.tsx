import { mount } from '@vue/test-utils'
import TabBar from './index'

const factory = (values = {}, slots = { default: [''] }) => {
  return mount(TabBar, {
    slots,
    props: { ...values },
  })
}

const tabList = [
  { title: 'bullet-lis', iconType: 'bullet-list', text: 'new' },
  { title: 'camera', iconType: 'camera' },
  { title: 'folder', iconType: 'folder', text: '100', max: '99' },
  {
    title: 'shopping',
    image:
      'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
    selectedImage:
      'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
    text: 'new',
  },
  {
    title: 'information',
    image:
      'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
    text: 'new',
  },
  {
    title: 'message',
    dot: true,
    text: '30',
    max: 9
  },
]
describe('TabBar Snap', () => {

  it('render initial TabBar', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render TabBar -- props customStyle', () => {
    const wrapper = factory({ customStyle: 'color:red;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render TabBar -- props className', () => {
    const wrapper = factory({ className: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render TabBar -- props backgroundColor', () => {
    const wrapper = factory({ fixed: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render TabBar -- props tabList', () => {
    const wrapper = factory({ tabList: tabList })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render TabBar -- props iconSize', () => {
    const wrapper = factory({ iconSize: '26', tabList: tabList })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render TabBar -- props fontSize', () => {
    const wrapper = factory({ fontSize: '26', tabList: tabList })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render TabBar -- props color', () => {
    const wrapper = factory({ color: 'red', tabList: tabList })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render TabBar -- props selectedColor', () => {
    const wrapper = factory({ selectedColor: 'red', tabList: tabList })
    expect(wrapper.element).toMatchSnapshot()
  })
  it('render TabBar -- props scroll', () => {
    const wrapper = factory({ scroll: true, tabList: tabList })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('TabBar Event', () => {
  it('TabBar onClick', () => {
    const onClick = jest.fn()
    const wrapper = factory({ onClick: onClick, tabList: tabList })
    wrapper.find('.ob-tab-bar__item').trigger('click')
    expect(onClick).toBeCalled()
  })
})