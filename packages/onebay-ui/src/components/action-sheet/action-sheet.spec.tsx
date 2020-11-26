import { mount } from '@vue/test-utils'
import ActionSheet from './index'
import ActionSheetItem from './components/item'
import ActionSheetHeader from './components/header'
import ActionSheetFooter from './components/footer'

const factory = (
  values = {},
  slots = {
    default: [<ActionSheetItem>Button A</ActionSheetItem>, <ActionSheetItem>Button B</ActionSheetItem>]
  }
) => {
  return mount(ActionSheet, {
    slots,
    components: {
      ActionSheetHeader,
      ActionSheetFooter,
      ActionSheetItem
    },
    props: { ...values }
  })
}

describe('ActionSheet Snap', () => {
  it('render initial ActionSheet', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened ActionSheet', () => {
    const wrapper = factory({
      isOpened: true
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened ActionSheet -- props cancelText', () => {
    const wrapper = factory({
      isOpened: true,
      cancelText: 'Cancel'
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened ActionSheet -- props title', () => {
    const wrapper = factory({
      isOpened: true,
      title: 'After clearing the location information, others will not be able to see you\r\nLine breaks can be escaped'
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened ActionSheet -- props completed', () => {
    const wrapper = factory({
      isOpened: true,
      cancelText: 'Cancel',
      title: 'After clearing the location information, others will not be able to see you\r\nLine breaks can be escaped'
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('Change ActionSheet -- props isOpened', async () => {
    const wrapper = factory({
      cancelText: 'Cancel',
      title: 'After clearing the location information, others will not be able to see you\r\nLine breaks can be escaped'
    })
    await wrapper.setProps({ isOpened: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('Change ActionSheet -- props isOpened', async () => {
    const wrapper = factory({
      isOpened: true,
      cancelText: 'Cancel',
      title: 'After clearing the location information, others will not be able to see you\r\nLine breaks can be escaped'
    })
    await wrapper.setProps({ isOpened: false })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('ActionSheet Behavior ', () => {
  beforeEach(() => { })
  it('ActionSheet onCancel & onClose', () => {
    const wrapper = factory(
      {
        isOpened: true,
        cancelText: 'Cancel',
        title: 'After clearing the location information, others will not be able to see you\r\nLine breaks can be escaped'
      },
      {
        default: [<ActionSheetItem>Button A</ActionSheetItem>]
      }
    )
    wrapper.find('.ob-action-sheet__footer').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('cancel')

    wrapper.find('.ob-action-sheet__overlay').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('close')
  })

  it('ActionSheet click event on ActionSheetItem', () => {
    const wrapper = mount(
      <ActionSheet>
        <ActionSheetItem>Button A</ActionSheetItem>
      </ActionSheet>
    )

    expect(wrapper.element).toMatchSnapshot()
    wrapper.trigger('touchmove')
    wrapper.find('.ob-action-sheet__item').trigger('click')

    const comp = wrapper.findComponent({ name: 'ActionSheetItem' })
    expect(comp.emitted()).toHaveProperty('click')
  })
})
