import { mount } from '@vue/test-utils'
import { Pagination } from '../../src/index'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(Pagination, {
    components: {},
    slots,
    props: { ...values },
  })
}

describe('Pagination Snap', () => {
  it('render Pagination -- props current', () => {
    const wrapper = factory({ current: 2 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Pagination -- props total', () => {
    const wrapper = factory({ total: 100 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Pagination -- props pageSize', () => {
    const wrapper = factory({ pageSize: 40 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Pagination -- props icon', () => {
    const wrapper = factory({ icon: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Pagination -- props total change', async () => {
    const wrapper = factory({ icon: true })
    await wrapper.setProps({ total: 30 })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('Pagination Event', () => {
  it('Pagination onPageChange - prev', () => {
    const onPageChange = jest.fn()
    const wrapper = factory({
      total: 100,
      current: 2,
      onPageChange,
    })
    expect(wrapper.element).toMatchSnapshot()
    wrapper.find('.at-pagination .at-pagination__btn-prev .at-button').trigger('click')
    expect(onPageChange).toBeCalled()
    expect(wrapper.vm.state.currentPage).toBe(1)
    wrapper.find('.at-pagination .at-pagination__btn-prev .at-button').trigger('click')
    expect(wrapper.vm.state.currentPage).toBe(1)
  })

  it('Pagination onPageChange - next', () => {
    const onPageChange = jest.fn()
    const wrapper = factory({
      total: 60,
      current: 2,
      onPageChange,
    })
    expect(wrapper.element).toMatchSnapshot()
    wrapper.find('.at-pagination .at-pagination__btn-next .at-button').trigger('click')
    expect(onPageChange).toBeCalled()
    expect(wrapper.vm.state.currentPage).toBe(3)
    wrapper.find('.at-pagination .at-pagination__btn-next .at-button').trigger('click')
    expect(wrapper.vm.state.currentPage).toBe(3)
  })

  it('Pagination onPageChange not to be called(disabled prev or next)', () => {
    const onPageChange = jest.fn()
    const wrapper = factory({
      total: 20,
      onPageChange,
    })
    expect(wrapper.element).toMatchSnapshot()
    wrapper.find('.at-pagination .at-pagination__btn-prev .at-button').trigger('click')
    wrapper.find('.at-pagination .at-pagination__btn-next .at-button').trigger('click')
    expect(onPageChange).not.toBeCalled()
  })

  it('Pagination onPageChange params {type, current} - prev', () => {
    const onPageChange = jest.fn()
    const wrapper = factory({
      current: 2,
      total: 100,
      onPageChange,
    })
    wrapper.find('.at-pagination .at-pagination__btn-prev .at-button').trigger('click')
    expect(onPageChange.mock.calls[0][0].type).toEqual('prev')
    expect(onPageChange.mock.calls[0][0].current).toEqual(1)
  })

  it('Pagination onPageChange params {type, current} - next', () => {
    const onPageChange = jest.fn()
    const wrapper = factory({
      total: 100,
      onPageChange,
    })
    wrapper.find('.at-pagination .at-pagination__btn-next .at-button').trigger('click')
    expect(onPageChange.mock.calls[0][0].type).toEqual('next')
    expect(onPageChange.mock.calls[0][0].current).toEqual(2)
  })
})
