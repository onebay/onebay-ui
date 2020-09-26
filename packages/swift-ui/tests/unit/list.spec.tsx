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
        <ListItem title='Title text' />
        <ListItem title='Title text' arrow='right' />
        <ListItem title='Title text' note='Description' />
        <ListItem title='Disabled state' disabled extraText='details' />
        <ListItem title='Title text' note='Description' arrow='right' />
        <ListItem title='Title text' extraText='details' arrow='right' />
        <ListItem
          arrow='right'
          note='Description'
          title='Title textTitle textTitle textTitle textTitle text'
          extraText='details details details details'
        />
        <ListItem
          title='Title text'
          note='Description'
          extraText='details'
          arrow='right'
          thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
        />
        <ListItem
          arrow='right'
          note='Description'
          :iconInfo="iconInfo"
          title='Title text'
          extraText='details'
          thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
        />
        <ListItem title='Title text' isSwitch />
        <ListItem title='Title text' isSwitch disabled />
        <ListItem title='Title text' switchIsCheck isSwitch />
        <ListItem title='Title text' switchIsCheck isSwitch disabled />
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
        <ListItem title='Title text' :hasBorder="false" />
        <ListItem title='Title text' :hasBorder="false" />
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
            title='Title text'
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
            title='Title text'
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
            title='Title text'
            is-switch
          />
        </List>
      `,
    })
    const switchEl = wrapper.find('.at-list .at-list__item .item-extra__switch switch')
    expect(switchEl.attributes('checked')).toBe(undefined)
  }) */
})
