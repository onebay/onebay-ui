import { mount } from '@vue/test-utils'
import { PullToRefresh } from '../../src/index'
import { sleep } from '../helper'
import { Direction } from '../../../swift-ui/src/components/pull-to-refresh'

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

    wrapper.find('.cr-pull-to-refresh__track').trigger('touchstart', {
      targetTouches: [{ clientX: 10, clientY: 10, identifier: 0 }]
    })

    wrapper.find('.cr-pull-to-refresh__track').trigger('touchmove', {
      changedTouches: [{ clientX: 10, clientY: 100, identifier: 0 }]
    })

    wrapper.find('.cr-pull-to-refresh__track').trigger('touchend', {
      changedTouches: [{ clientX: 10, clientY: 100, identifier: 0 }]
    })
    await sleep(600)
    expect(wrapper.emitted()).toHaveProperty('refresh')
  })

  it('PullToRefresh pull up', async () => {
    const wrapper = mount(<PullToRefresh direction={Direction.Up} />)

    wrapper.find('.cr-pull-to-refresh__track').trigger('touchstart', {
      targetTouches: [{ clientX: 10, clientY: 100, identifier: 0 }]
    })
    // test two finger touch
    wrapper.find('.cr-pull-to-refresh__track').trigger('touchstart', {
      targetTouches: [{ clientX: 10, clientY: 100, identifier: 1 }]
    })

    wrapper.find('.cr-pull-to-refresh__track').trigger('touchmove', {
      changedTouches: [{ clientX: 10, clientY: 10, identifier: 0 }]
    })

    wrapper.find('.cr-pull-to-refresh__track').trigger('touchend', {
      changedTouches: [{ clientX: 10, clientY: 10, identifier: 1 }]
    })
    expect(wrapper.emitted()).not.toHaveProperty('refresh')
    wrapper.find('.cr-pull-to-refresh__track').trigger('touchend', {
      changedTouches: [{ clientX: 10, clientY: 10, identifier: 0 }]
    })
    await sleep(600)
    expect(wrapper.emitted()).toHaveProperty('refresh')
  })
})
