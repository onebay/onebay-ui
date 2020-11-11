import { mount } from '@vue/test-utils'
import { Flex } from '../../src'

const { Item } = Flex

describe('Flex Snap', () => {
  it('render initial Flex', () => {
    const wrapper = mount(
      <Flex>
        <Item>hello wrold</Item>
      </Flex>
    )
    expect(wrapper.element).toMatchSnapshot()
  })
})
