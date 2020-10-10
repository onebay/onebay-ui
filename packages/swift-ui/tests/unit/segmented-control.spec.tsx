import { mount } from '@vue/test-utils'
import { SegmentedControl } from '../../src/index'

const factory = (values = {}, slots = { default: [''] }) => {
  return mount(SegmentedControl, {
    slots,
    props: { ...values },
  })
}

describe('SegmentedControl Snap', () => {
  const values = ['tab1', 'tab2', 'tab3']

  it('render initial SegmentedControl', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render SegmentedControl -- props customStyle', () => {
    const wrapper = factory({ customStyle: 'color:red;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render SegmentedControl -- props className', () => {
    const wrapper = factory({ className: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render SegmentedControl -- props values', () => {
    const wrapper = factory({ values: values })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render SegmentedControl -- props current', () => {
    const wrapper = factory({ current: 2, values: values })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render SegmentedControl -- props fontSize', () => {
    const wrapper = factory({ fontSize: '30', values: values })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render SegmentedControl -- props disabled', () => {
    const wrapper = factory({ disabled: true, values: values })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render SegmentedControl -- props selectedColor', () => {
    const wrapper = factory({ selectedColor: '#fff', values: values })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('SegmentedControl Event', () => {
  const values = ['tab1', 'tab2', 'tab3']
  it('SegmentedControl click Event', () => {
    const onClick = jest.fn()
    const wrapper = factory({ values, onClick: onClick })
    wrapper.find('.at-segmented-control__item').trigger('click')
    expect(onClick).toBeCalled()
  })

  it('SegmentedControl click Event disabled: true', () => {
    const onClick = jest.fn()
    const wrapper = factory({ values, disabled: true, onClick: onClick })
    wrapper.find('.at-segmented-control__item').trigger('click')
    expect(onClick).not.toBeCalled()
  })
})
