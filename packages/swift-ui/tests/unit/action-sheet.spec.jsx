import { mount } from '@vue/test-utils'
import ActionSheet from '../../src/components/action-sheet/index'
import ActionSheetItem from '../../src/components/action-sheet/components/item.vue'
import ActionSheetHeader from '../../src/components/action-sheet/components/header.vue'
import ActionSheetFooter from '../../src/components/action-sheet/components/footer.vue'


const factory = (
  values = {},
  slots = {
    default: [
      <ActionSheetItem>按钮一</ActionSheetItem>,
      <ActionSheetItem>按钮二</ActionSheetItem>,
    ],
  }
) => {
  return mount(ActionSheet, {
    slots,
    components: {
      ActionSheetHeader,
      ActionSheetFooter,
      ActionSheetItem
    },
    props: { ...values },
  })
}

describe('ActionSheet Snap', () => {
  it('render initial ActionSheet', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened ActionSheet', () => {
    const wrapper = factory({
      isOpened: true,
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened ActionSheet -- props cancelText', () => {
    const wrapper = factory({
      isOpened: true,
      cancelText: '取消',
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened ActionSheet -- props title', () => {
    const wrapper = factory({
      isOpened: true,
      title: '清除位置信息后， 别人将不能查看到你\r\n可以通过转义字符换行',
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened ActionSheet -- props completed', () => {
    const wrapper = factory({
      isOpened: true,
      cancelText: '取消',
      title: '清除位置信息后， 别人将不能查看到你\r\n可以通过转义字符换行',
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('ActionSheet Behavior ', () => {
  beforeEach(() => {})
  it('ActionSheet onCancel & onClose', () => {
    const wrapper = factory(
      {
        isOpened: true,
        cancelText: '取消',
        title: '清除位置信息后， 别人将不能查看到你\r\n可以通过转义字符换行',
      },
      {
        default: [<ActionSheetItem>按钮一</ActionSheetItem>],
      }
    )

    wrapper.find('.at-action-sheet__footer').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('cancel')

    wrapper.find('.at-action-sheet__overlay').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('close')
  })

  it('ActionSheet click event on ActionSheetItem', () => {
    const wrapper = factory()

    expect(wrapper).toMatchSnapshot()
    wrapper.find('.at-action-sheet__item').trigger('click')

    const comp = wrapper.findComponent({name: 'ActionSheetItem'})
    expect(comp.emitted()).toHaveProperty('click')
  })
})
