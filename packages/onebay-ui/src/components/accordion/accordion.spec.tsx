import { mount } from '@vue/test-utils'
import Accordion from './index'
import { sleep } from '../../utils/helper'

const factory = (values = {}, slots = { default: ['按钮'] }) => {
  return mount(Accordion, {
    slots,
    props: { ...values }
  })
}

describe('Accordion Snap', () => {
  it('render initial Accordion', () => {
    const wrapper = mount(Accordion)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Accordion -- props title', () => {
    const wrapper = mount(<Accordion title="title" />)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Accordion -- props open', () => {
    const wrapper = mount(<Accordion open={true} />)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Accordion -- props isAnimation', async () => {
    const wrapper = mount(<Accordion isAnimation={false} />)
    await wrapper.setProps({ open: true })
    await sleep(0)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Accordion -- props icon', () => {
    const wrapper = factory(
      {
        icon: { value: 'chevron-down', color: 'red' }
      },
      {
        default: ['<div></div>']
      }
    )
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Accordion -- props icon prefixClass', () => {
    const wrapper = factory(
      {
        icon: { prefixClass: 'prefixClass', value: 'star', color: 'red' }
      },
      {
        default: ['<div></div>']
      }
    )
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Accordion -- props note', () => {
    const wrapper = factory(
      {
        note: 'note'
      },
      {
        default: ['<div></div>']
      }
    )
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Accordion -- props note', () => {
    const wrapper = factory(
      {
        note: 'note'
      },
      {
        default: ['<div></div>']
      }
    )
    expect(wrapper.element).toMatchSnapshot()
  })

  it('test change props open', async () => {
    const wrapper = factory()
    await wrapper.setProps({ open: true })
    expect(wrapper.vm.open).toBeTruthy()
    expect(wrapper.element).toMatchSnapshot()
    await sleep(700)
  })
})

describe('Accordion Event', () => {
  it('toggle accordion', () => {
    const wrapper = factory()
    wrapper.find('.ob-accordion__header').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('toggle accordion animation is not completed', async () => {
    const wrapper = factory()
    await wrapper.setProps({ open: true })
    wrapper.find('.ob-accordion__header').trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('click')
  })
})
