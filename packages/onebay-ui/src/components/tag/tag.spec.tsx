import { mount } from '@vue/test-utils'
import Tag from './index'

const factory = (values = {}, slots = { default: ['Tag'] }) => {
  return mount(Tag, {
    slots,
    props: { ...values },
  })
}

describe('Tag Snap', () => {
  it('render Tag -- props size', () => {
    const wrapper = factory({ size: 'small' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Tag -- props type', () => {
    const wrapper = factory({ type: 'primary' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Tag -- props name', () => {
    const wrapper = factory({ name: 'tag-01' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Tag -- props circle', () => {
    const wrapper = factory({ circle: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Tag -- props active', () => {
    const wrapper = factory({ active: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Tag -- props disabled', () => {
    const wrapper = factory({ disabled: true })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('Tag Event', () => {
  it('Tag onClick', () => {
    const onClick = jest.fn()
    const wrapper = factory({ onClick: onClick })
    wrapper.find('.ob-tag').trigger('click')
    expect(onClick).toBeCalled()
  })

  it('Tag onClick not to be called(disabled)', () => {
    const onClick = jest.fn()
    const wrapper = factory({ onClick: onClick, disabled: true })
    wrapper.find('.ob-tag').trigger('click')
    expect(onClick).not.toBeCalled()
  })

  it('Tag onClick params {name, active}', () => {
    const onClick = jest.fn()
    const wrapper = factory({ onClick: onClick, name: 'tag-01' })
    wrapper.find('.ob-tag').trigger('click')
    expect(onClick.mock.calls[0][0].name).toEqual('tag-01')
    expect(onClick.mock.calls[0][0].active).toBeFalsy()
  })
})
