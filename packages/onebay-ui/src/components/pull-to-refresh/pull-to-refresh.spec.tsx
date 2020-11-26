import { mount } from '@vue/test-utils'
import PullToRefresh, { Direction } from './index'
import { sleep } from '../../utils/helper'

describe('PullToRefresh props', () => {
  it('render PullToRefresh init', () => {
    const wrapper = mount(<PullToRefresh />)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('PullToRefresh props - indcatorText', () => {
    const wrapper = mount(<PullToRefresh indicatorText="pull down to refresh" />)
    expect(wrapper.text()).toBe('pull down to refresh')
  })
})

describe('PullToRefresh Event', () => {
  it('PullToRefresh pull down', async () => {
    const wrapper = mount(<PullToRefresh />)

    wrapper.find('.ob-pull-to-refresh__track').trigger('touchstart', {
      targetTouches: [{ clientX: 10, clientY: 10, identifier: 0 }]
    })

    wrapper.find('.ob-pull-to-refresh__track').trigger('touchmove', {
      changedTouches: [{ clientX: 10, clientY: 100, identifier: 0 }]
    })

    wrapper.find('.ob-pull-to-refresh__track').trigger('touchend', {
      changedTouches: [{ clientX: 10, clientY: 100, identifier: 0 }]
    })
    await sleep(600)
    expect(wrapper.emitted()).toHaveProperty('refresh')
  })

  it('PullToRefresh pull up', async () => {
    const wrapper = mount(<PullToRefresh direction={Direction.Up} />)

    wrapper.find('.ob-pull-to-refresh__track').trigger('touchstart', {
      targetTouches: [{ clientX: 10, clientY: 100, identifier: 0 }]
    })
    // test two finger touch
    wrapper.find('.ob-pull-to-refresh__track').trigger('touchstart', {
      targetTouches: [{ clientX: 10, clientY: 100, identifier: 1 }]
    })

    wrapper.find('.ob-pull-to-refresh__track').trigger('touchmove', {
      changedTouches: [{ clientX: 10, clientY: 10, identifier: 0 }]
    })

    wrapper.find('.ob-pull-to-refresh__track').trigger('touchend', {
      changedTouches: [{ clientX: 10, clientY: 10, identifier: 1 }]
    })
    expect(wrapper.emitted()).not.toHaveProperty('refresh')
    wrapper.find('.ob-pull-to-refresh__track').trigger('touchend', {
      changedTouches: [{ clientX: 10, clientY: 10, identifier: 0 }]
    })
    await sleep(600)
    expect(wrapper.emitted()).toHaveProperty('refresh')
  })
})
