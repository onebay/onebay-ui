import { mount } from '@vue/test-utils'
import Steps from './index'

const factory = (values = {}, slots = { default: [''] }) => {
  return mount(Steps, {
    slots,
    props: { ...values },
  })
}

const items1 = [
  {
    title: 'step1',
    desc: 'Here is additional information, up to two lines',
    icon: {
      value: 'sound',
      activeColor: '#fff',
      inactiveColor: '#78A4FA',
      size: '14',
    },
  },
  {
    title: 'step2',
    desc: 'Here is additional information, up to two lines',
    icon: {
      value: 'shopping-cart',
      activeColor: '#fff',
      inactiveColor: '#78A4FA',
      size: '14',
    },
  },
  {
    title: 'step3',
    desc: 'Here is additional information, up to two lines',
    icon: {
      value: 'camera',
      activeColor: '#fff',
      inactiveColor: '#78A4FA',
      size: '14',
    },
  },
]

describe('Steps Snap', () => {
  const items2 = [
    {
      title: 'step1',
      desc: 'Here is additional information, up to two lines',
      status: 'success'
    },
    {
      title: 'step2',
      desc: 'Here is additional information, up to two lines',
    },
    {
      title: 'step3',
      desc: 'Here is additional information, up to two lines',
      error: true,
    },
  ]

  it('render initial Steps', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Steps -- props style', () => {
    const wrapper = factory({ style: 'color:red;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Steps -- props className', () => {
    const wrapper = factory({ className: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Steps -- props items', () => {
    const wrapper1 = factory({ items: items1 })
    expect(wrapper1.element).toMatchSnapshot()
    const wrapper2 = factory({ items: items2 })
    expect(wrapper2.element).toMatchSnapshot()
  })

  it('render Steps -- props current', () => {
    const wrapper = factory({ items: items1, current: 1 })
    expect(wrapper.element).toMatchSnapshot()
  })
})
describe('Steps Event', () => {
  it('Steps onChange', async () => {
    const onChange = jest.fn()
    const wrapper = factory({ items: items1, onChange })
    wrapper.find('.ob-steps__item').trigger('click')
    expect(onChange).toBeCalled()
  })
})
