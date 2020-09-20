import { mount } from '@vue/test-utils'
import Accordion from '../../src/components/accordion/index.vue'

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

  it('render AtAccordion -- props title', () => {
    const wrapper = mount(<Accordion title="title" />)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtAccordion -- props open', () => {
    const wrapper = mount(<Accordion open={true} />)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtAccordion -- props icon', () => {
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

  it('render AtAccordion -- props icon prefixClass', () => {
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

  it('render AtAccordion -- props note', () => {
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

  it('render AtAccordion -- props note', () => {
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
})

describe('Accordion Event', () => {
  it('toggle accordion', () => {
    const wrapper = factory()
    wrapper.find('.at-accordion__header').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
})
