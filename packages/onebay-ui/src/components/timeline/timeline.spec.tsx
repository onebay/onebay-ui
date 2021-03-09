import { mount } from '@vue/test-utils'
import Timeline from './index'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(Timeline, {
    slots,
    props: { ...values }
  })
}

describe('Timeline Snap', () => {
  it('render initial Timeline', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Timeline -- props style', () => {
    const wrapper = factory({ style: 'color:red;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Timeline -- props pending', () => {
    const wrapper = factory()
    wrapper.setProps({ pending: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Timeline -- props items', () => {
    const wrapper = factory({
      items: [
        { title: 'Eat breakfast', content: ['8:00'] },
        { title: 'Go to work', color: 'yellow' },
        { title: 'Sleep', icon: 'clock' }
      ]
    })
    expect(wrapper.element).toMatchSnapshot()
  })

})
