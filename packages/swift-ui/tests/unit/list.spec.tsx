import { mount } from '@vue/test-utils'
import List from '../../src/components/list/index'
import ListItem from '../../src/components/list/item/index'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(List, {
    components: {
      ListItem,
    },
    slots,
    props: { ...values }
  })
}

describe('List Snap', () => {
  it('render completed List', () => {
    const wrapper = mount({
      data() {
        return {
          iconInfo: {
            size: 25,
            color: '#78A4FA',
            value: 'calendar',
          },
        }
      },
      components: {
        List,
        ListItem,
      },
      template: `
      <List>
        <ListItem title='标题文字' />
        <ListItem title='标题文字' arrow='right' />
        <ListItem title='标题文字' note='描述信息' />
        <ListItem title='禁用状态' disabled extraText='详细信息' />
        <ListItem title='标题文字' note='描述信息' arrow='right' />
        <ListItem title='标题文字' extraText='详细信息' arrow='right' />
        <ListItem
          arrow='right'
          note='描述信息'
          title='标题文字标题文字标题文字标题文字标题文字'
          extraText='详细信息详细信息详细信息详细信息'
        />
        <ListItem
          title='标题文字'
          note='描述信息'
          extraText='详细信息'
          arrow='right'
          thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
        />
        <ListItem
          arrow='right'
          note='描述信息'
          :iconInfo="iconInfo"
          title='标题文字'
          extraText='详细信息'
          thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
        />
        <ListItem title='标题文字' isSwitch />
        <ListItem title='标题文字' isSwitch disabled />
        <ListItem title='标题文字' switchIsCheck isSwitch />
        <ListItem title='标题文字' switchIsCheck isSwitch disabled />
      </List>
      `,
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render completed List -- no border', () => {
    const wrapper = mount({
      components: {
        List,
        ListItem,
      },
      template: `
      <List :hasBorder="false">
        <ListItem title='标题文字' :hasBorder="false" />
        <ListItem title='标题文字' :hasBorder="false" />
      </List>
      `,
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('List Behavior ', () => {
  it('ListItem onClick', () => {
    const onClick = jest.fn()
    const wrapper = mount(ListItem, {
      props: {
        title: 'ListItem title'
      }

    })
    expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.emitted()).toHaveProperty('click')
  })

  /* it('ListItem onSwitchChange && onClick', () => {
    const onClick = jest.fn()
    const onChange = jest.fn()
    const wrapper = mount({
      components: {
        List,
        ListItem,
      },
      methods: {
        onClick: onClick,
        onChange: onChange,
      },
      template: `
        <List>
          <ListItem
            title='标题文字'
            is-switch
            :on-click="onClick"
            :on-switch-change="onChange"
          />
        </List>
      `,
    })
    wrapper.find('.at-list .at-list__item .item-extra__switch switch').trigger('tap')
    wrapper.find('.at-list .at-list__item .item-extra__switch switch').trigger('change')
    expect(onClick).toBeCalled()
    expect(onChange).toBeCalled()
  })

  it('ListItem switch was checked', () => {
    const wrapper = mount({
      components: {
        List,
        ListItem,
      },
      template: `
        <List>
          <ListItem
            title='标题文字'
            is-switch
            switch-is-check
          />
        </List>
      `,
    })
    const switchEl = wrapper.find('.at-list .at-list__item .item-extra__switch switch')
    expect(switchEl.attributes('checked')).toBe('checked')
  })

  it('ListItem switch was unchecked', () => {
    const wrapper = mount({
      components: {
        List,
        ListItem,
      },
      template: `
        <List>
          <ListItem
            title='标题文字'
            is-switch
          />
        </List>
      `,
    })
    const switchEl = wrapper.find('.at-list .at-list__item .item-extra__switch switch')
    expect(switchEl.attributes('checked')).toBe(undefined)
  }) */
})
