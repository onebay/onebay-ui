import { mount } from '@vue/test-utils'
import Range from './index'

describe('Range Snap', () => {
  it('render initial Range', () => {
    const wrapper = mount(<Range />)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Range -- props className', () => {
    const wrapper = mount(<Range className='test' />)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Range -- props style', () => {
    const wrapper = mount(<Range style='color:red;' />)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Range -- props sliderStyle', () => {
    const wrapper = mount(<Range sliderStyle='color:red;' />)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Range -- props railStyle', () => {
    const wrapper = mount(<Range railStyle='color:red;' />)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Range -- props blockSize', () => {
    const wrapper = mount(<Range blockSize={3} />)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Range -- props trackStyle', () => {
    const wrapper = mount(<Range railStyle='color:red;' />)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Range -- props value', () => {
    const wrapper = mount(<Range value={[0, 30]} />)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Range -- props min', () => {
    const wrapper = mount(<Range min={10} value={[10, 30]} />)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Range -- props max', () => {
    const wrapper = mount(<Range max={50} value={[10, 30]} />)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Range -- props disabled', () => {
    const wrapper = mount(<Range disabled />)
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('Range Event', () => {
  it('Rate onChange Event disabled', () => {
    const wrapper = mount(<Range disabled />)
    wrapper.find('.ob-range__slider').trigger('touchmove', { x: 50 })
    wrapper.find('.ob-range__slider').trigger('touchend', { x: 100 })
  })

  it('Rate onChange Event', () => {
    const wrapper = mount(<Range />)
    wrapper.find('.ob-range__slider').trigger('touchmove', { x: 50, touches: [{ clientX: 50 }] })
    wrapper.find('.ob-range__slider').trigger('touchend', { x: 100 })
    expect(wrapper.emitted()).toHaveProperty('change')
  })

  it('Rate onChange Event', () => {
    const wrapper = mount(<Range />)
    wrapper.find('.ob-range__slider').trigger('touchmove', { x: 50, touches: [{ clientX: 50 }] })
    wrapper.find('.ob-range__slider').trigger('touchend', { x: 100 })
    wrapper.trigger('click', { x: 100 })
    expect(wrapper.emitted()).toHaveProperty('change')
  })

  it('Rate onChange Event', () => {
    const wrapper = mount(<Range />)
    wrapper.find('.ob-range__slider:last-child').trigger('touchmove', { x: 50, touches: [{ clientX: 50 }] })
    wrapper.find('.ob-range__slider:last-child').trigger('touchend', { x: 100 })
    wrapper.trigger('click', { x: 100 })
    expect(wrapper.emitted()).toHaveProperty('change')
  })
})