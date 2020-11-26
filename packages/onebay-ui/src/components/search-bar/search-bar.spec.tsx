import { mount } from '@vue/test-utils'
import SearchBar from './index'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(SearchBar, {
    slots,
    props: { ...values },
  })
}

describe('SearchBar Snap', () => {
  it('render initial SearchBar', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render SearchBar -- props customStyle', () => {
    const wrapper = factory({ customStyle: 'color:red;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render SearchBar -- props className', () => {
    const wrapper = factory({ className: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render SearchBar -- props value', () => {
    const wrapper = factory({ value: 'value' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render SearchBar -- props placeholder', () => {
    const wrapper = factory({ placeholder: 'placeholder' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render SearchBar -- props maxLength', () => {
    const wrapper = factory({ maxLength: 120 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render SearchBar -- props fixed', () => {
    const wrapper = factory({ fixed: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render SearchBar -- props focus', () => {
    const wrapper = factory({ focus: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render SearchBar -- props disabled', () => {
    const wrapper = factory({ disabled: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render SearchBar -- props showActionButton', () => {
    const wrapper = factory({ showActionButton: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render SearchBar -- props actionName', () => {
    const wrapper = factory({ actionName: 'actionName' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render SearchBar -- props inputType number', () => {
    const wrapper = factory({ inputType: 'number' })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('SearchBar Event', () => {
  it('SearchBar onChange', () => {
    const onChange = jest.fn()
    const wrapper = factory({ onChange: onChange })
    wrapper.find('.ob-search-bar .ob-search-bar__input').trigger('input')
    expect(onChange).toBeCalled()
  })

  it('SearchBar onChange', () => {
    const onFocus = jest.fn()
    const wrapper = factory({ onFocus: onFocus })
    wrapper.find('.ob-search-bar .ob-search-bar__input').trigger('focus')
    expect(onFocus).toBeCalled()
  })

  it('SearchBar onBlur', () => {
    const onBlur = jest.fn()
    const wrapper = factory({ onBlur: onBlur })
    wrapper.find('.ob-search-bar .ob-search-bar__input').trigger('blur')
    expect(onBlur).toBeCalled()
  })

  it('SearchBar onActionClick', async () => {
    const onActionClick = jest.fn()
    const wrapper = factory()
    wrapper.find('.ob-search-bar .ob-search-bar__action').trigger('click')
    await wrapper.setProps({ onActionClick: onActionClick })
    wrapper.find('.ob-search-bar .ob-search-bar__action').trigger('click')
    expect(onActionClick).toBeCalled()
  })

  it('SearchBar onClear', async () => {
    const wrapper = factory({ value: '123' })
    wrapper.find('.ob-search-bar .ob-search-bar__clear').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('change')
    await wrapper.setProps({ onClear: () => { } })
    wrapper.find('.ob-search-bar .ob-search-bar__clear').trigger('click')
  })
})
