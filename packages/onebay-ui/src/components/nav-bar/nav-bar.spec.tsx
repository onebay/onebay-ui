import { mount } from '@vue/test-utils'
import NavBar from './index'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(NavBar, {
    components: {},
    slots,
    props: { ...values },
  })
}

describe('NavBar Snap', () => {
  it('render initial NavBar', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render NavBar -- props className', () => {
    const wrapper = factory({ className: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render NavBar -- props style', () => {
    const wrapper = factory({ style: 'color:red;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render NavBar -- props fixed', () => {
    const wrapper = factory({ fixed: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render NavBar -- props color', () => {
    const wrapper = factory({ color: '#fff' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render NavBar -- props leftContent', () => {
    const wrapper = factory({
      color: '#fff',
      leftContent: <div class="ob-icon ob-icon-chevron-left"></div>
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render NavBar -- props title', () => {
    const wrapper = mount({
      render() {
        return (
          <NavBar>
            <span>test</span>
          </NavBar>
        )
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('NavBar Behavior ', () => {
  it('NavBar onClickLeftIcon', () => {
    const onClickLeftIcon = jest.fn()
    const wrapper = factory({
      leftContent: <div class="ob-icon ob-icon-chevron-left"></div>
    })
    wrapper.find('.ob-nav-bar__left-view div').trigger('click')
    expect(wrapper.element).toMatchSnapshot()
  })

  it('NavBar click right first icon', () => {
    const wrapper = factory({
      rightContent: <>
        <div class="ob-icon ob-icon-bullet-list"></div>
        <div class="ob-icon ob-icon-user"></div>
      </>
    })
    wrapper.find('.ob-nav-bar__right-view div:first-child').trigger('click')
    expect(wrapper.element).toMatchSnapshot()
  })

  it('NavBar click right second icon', () => {
    const wrapper = factory({
      rightContent: <>
        <div class="ob-icon ob-icon-bullet-list"></div>
        <div class="ob-icon ob-icon-user"></div>
      </>
    })
    wrapper.find('.ob-nav-bar__right-view div:last-child').trigger('click')
    expect(wrapper.element).toMatchSnapshot()
  })
})
