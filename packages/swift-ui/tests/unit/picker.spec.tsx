import { mount } from '@vue/test-utils'
import { Picker } from '../../src/index'
import { sleep } from '../helper'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(Picker, {
    components: {},
    slots,
    props: { ...values },
  })
}

const cities = ['Beijing', 'London', 'New York']

const language = ['java', 'python', 'typescript']

const multiSelector = [
  ['vue', 'typescript'],
  ['scss', 'less']
]

describe('Picker Snap', () => {
  it('render Picker -- props range & selector', async () => {
    const wrapper = factory({ range: cities, mode: "selector" })
    wrapper.find('.weui-picker__action:last-child').trigger('click')
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Picker -- props range & multiSelector', () => {
    const wrapper = factory({ range: multiSelector, mode: "multiSelector" })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Picker -- props range & multiSelector change value', async () => {
    const wrapper = factory({ range: multiSelector, mode: "multiSelector" })
    await wrapper.setProps({ value: ['0', '1'] })

    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Picker -- props mode === time', () => {
    const wrapper = factory({ mode: "time" })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Picker -- props mode === date', () => {
    const wrapper = factory({ mode: "date" })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Picker -- props fields === month', () => {
    const wrapper = factory({ mode: "date", fields: 'month' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Picker -- props fields === year', () => {
    const wrapper = factory({ mode: "date", fields: 'year' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Picker -- change mode', async () => {
    const wrapper = factory({ mode: "date" })
    await wrapper.setProps({ mode: 'time', value: '24:60' })
    await wrapper.setProps({ value: '22:60' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Picker -- change start & end & value', async () => {
    const wrapper = factory({ mode: "date" })
    await wrapper.setProps({ start: '2000-10-01', end: '2020-10-19', value: '2020-10-19' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Picker -- change range', async () => {
    const wrapper = factory({ mode: "selector", range: cities })
    await wrapper.setProps({ range: language })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Picker -- props change value ', async () => {
    const wrapper = factory({ mode: "date", value: '2020-04-01' })
    await wrapper.setProps({ value: '2020-04-01' })
    await wrapper.setProps({ value: '2020-02-01' })
    await wrapper.setProps({ value: '2019-02-01', fields: 'day' })
    wrapper.find('.weui-picker__action:last-child').trigger('click')
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Picker -- mode time start is greter than end', async () => {
    const wrapper = factory({ mode: "time", start: '22:30', end: '20:20' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Picker -- props mode === date last-child', async () => {
    const wrapper = factory({ mode: "date" })
    wrapper.find('.weui-picker__group:last-child').trigger('touchstart', { changedTouches: [{ clientX: 50, clientY: 10 }] })
    wrapper.find('.weui-picker__group:last-child').trigger('touchmove', { changedTouches: [{ clientX: 50, clientY: 100 }] })
    wrapper.find('.weui-picker__group:last-child').trigger('touchend', { changedTouches: [{ clientX: 50, clientY: 100 }] })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Picker -- props mode === date :nth-child(2)', async () => {
    const wrapper = factory({ mode: "date" })
    wrapper.find('.weui-picker__group:nth-child(2)').trigger('touchstart', { changedTouches: [{ clientX: 50, clientY: 10 }] })
    wrapper.find('.weui-picker__group:nth-child(2)').trigger('touchmove', { changedTouches: [{ clientX: 50, clientY: 100 }] })
    wrapper.find('.weui-picker__group:nth-child(2)').trigger('touchend', { changedTouches: [{ clientX: 50, clientY: 100 }] })
    expect(wrapper.element).toMatchSnapshot()
  })

})

describe('Piker Event', () => {
  it('Piker onClick open picker', async () => {
    const wrapper = mount(
      <Picker disabled>
        <div>select date</div>
      </Picker>
    )
    wrapper.find('.picker-inner').trigger('click')
    await wrapper.setProps({ disabled: false })
    wrapper.find('.picker-inner').trigger('click')
  })

  it('Piker close picker', async () => {
    const wrapper = mount(
      <Picker mode="date">
        <div>select date</div>
      </Picker>
    )
    wrapper.find('.picker-inner').trigger('click')
    wrapper.find('.weui-mask').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('cancel')
    await sleep(350)
  })

  it('Piker onClick confirm button', async () => {
    const wrapper = mount(
      <Picker mode="date" fields='year'>
        <div>select date</div>
      </Picker>
    )
    wrapper.find('.weui-picker__action:last-child').trigger('click')
    await wrapper.setProps({ fields: 'month' })
    wrapper.find('.weui-picker__action:last-child').trigger('click')
    await wrapper.setProps({ fields: 'day' })
    wrapper.find('.weui-picker__action:last-child').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('change')
  })

  it('Piker onClick confirm button & mode = time', async () => {
    const wrapper = mount(
      <Picker mode="time">
        <div>select time</div>
      </Picker>
    )
    wrapper.find('.weui-picker__action:last-child').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('change')
  })

  it('Picker onTouch event mode = date', () => {
    const wrapper = mount(
      <Picker mode="date">
        <div>select date</div>
      </Picker>
    )
    wrapper.find('.weui-picker__group').trigger('touchstart', { changedTouches: [{ clientX: 50, clientY: 10 }] })
    wrapper.find('.weui-picker__group').trigger('touchmove', { changedTouches: [{ clientX: 50, clientY: 100 }] })
    wrapper.find('.weui-picker__group').trigger('touchend', { changedTouches: [{ clientX: 50, clientY: 100 }] })
  })

  it('Picker onTouch event mode = time', async () => {
    const wrapper = mount(
      <Picker mode="time">
        <div>select time</div>
      </Picker>
    )
    wrapper.find('.picker-inner').trigger('click')
    wrapper.find('.weui-picker__group').trigger('touchstart', { changedTouches: [{ clientX: 50, clientY: 10 }] })
    wrapper.find('.weui-picker__group').trigger('touchmove', { changedTouches: [{ clientX: 50, clientY: 100 }] })
    wrapper.find('.weui-picker__group').trigger('touchend', { changedTouches: [{ clientX: 50, clientY: 100 }] })
    // await wrapper.setProps({ columnId: '1' })
    wrapper.find('.weui-picker__group:last-child').trigger('touchstart', { changedTouches: [{ clientX: 250, clientY: 10 }] })
    wrapper.find('.weui-picker__group:last-child').trigger('touchmove', { changedTouches: [{ clientX: 250, clientY: 100 }] })
    wrapper.find('.weui-picker__group:last-child').trigger('touchend', { changedTouches: [{ clientX: 250, clientY: 100 }] })
  })

  it('Picker onTouch event mode time formulaUnlimitedScroll', async () => {
    const wrapper = mount(
      <Picker mode="time">
        <div>select time</div>
      </Picker>
    )
    wrapper.find('.picker-inner').trigger('click')
    wrapper.find('.weui-picker__group').trigger('touchstart', { changedTouches: [{ clientX: 50, clientY: 10 }] })
    wrapper.find('.weui-picker__group').trigger('touchmove', { changedTouches: [{ clientX: 50, clientY: 18 }] })
    wrapper.find('.weui-picker__group').trigger('touchend', { changedTouches: [{ clientX: 50, clientY: 18 }] })
    await sleep(10)
    wrapper.find('.weui-picker__group:last-child').trigger('touchstart', { changedTouches: [{ clientX: 50, clientY: 10 }] })
    wrapper.find('.weui-picker__group:last-child').trigger('touchmove', { changedTouches: [{ clientX: 50, clientY: 18 }] })
    wrapper.find('.weui-picker__group:last-child').trigger('touchend', { changedTouches: [{ clientX: 50, clientY: 18 }] })
    await sleep(10)
    wrapper.find('.weui-picker__group').trigger('touchstart', { changedTouches: [{ clientX: 50, clientY: 10 }] })
    wrapper.find('.weui-picker__group').trigger('touchmove', { changedTouches: [{ clientX: 50, clientY: -1300 }] })
    wrapper.find('.weui-picker__group').trigger('touchend', { changedTouches: [{ clientX: 50, clientY: -1300 }] })
    wrapper.find('.weui-picker__group:last-child').trigger('touchstart', { changedTouches: [{ clientX: 50, clientY: 10 }] })
    wrapper.find('.weui-picker__group:last-child').trigger('touchmove', { changedTouches: [{ clientX: 50, clientY: -1300 }] })
    wrapper.find('.weui-picker__group:last-child').trigger('touchend', { changedTouches: [{ clientX: 50, clientY: -1300 }] })
    await sleep(10)
  })

  it(' Picker -- props range & multiSelector onColumnChange', () => {
    const wrapper = mount(
      <Picker mode="multiSelector" range={multiSelector}>
      </Picker>
    )
    wrapper.find('.weui-picker__action:last-child').trigger('click')
    wrapper.find('.weui-picker__group').trigger('touchstart', { changedTouches: [{ clientX: 50, clientY: 10 }] })
    wrapper.find('.weui-picker__group').trigger('touchmove', { changedTouches: [{ clientX: 50, clientY: 18 }] })
    wrapper.find('.weui-picker__group').trigger('touchend', { changedTouches: [{ clientX: 50, clientY: 18 }] })
  })
})

