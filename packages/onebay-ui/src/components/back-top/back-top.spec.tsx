import { mount } from '@vue/test-utils'
import BackTop from './index'

describe('BackTop Snap', () => {
  it('render initial BackTop', () => {
    const wrapper = mount(<BackTop />)
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('BackTop Event', () => {
  it('render initial BackTop', () => {
    const wrapper = mount(<BackTop />)
    wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
})
