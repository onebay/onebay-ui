import { mount } from '@vue/test-utils'
import Loading from '../../src/components/loading/index'

describe('Loading Snap', () => {
  it('render initial AtLoading', () => {
    const wrapper = mount(Loading)
    expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Loading -- props size', () => {
    const wrapper = mount(<Loading size="15"></Loading>)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Loading -- props color', () => {
    const wrapper = mount(<Loading color="#fff"></Loading>)
    expect(wrapper.element).toMatchSnapshot()
  })
})
