import { mount } from '@vue/test-utils'
import Radio from './index'

const options = [
  { label: 'Radio one', value: 'option1' },
  { label: 'Radio two', value: 'option2', desc: 'Radio description two' },
  { label: 'Radio three', value: 'option3', desc: 'Radio description three', disabled: true },
]

describe('Radio Snap', () => {
  it('render Radio', () => {
    const wrapper = mount({
      render() {
        return <Radio options={options} />
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Radio default options', () => {
    const wrapper = mount({
      render() {
        return <Radio />
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('Radio Event', () => {
  it('Radio onClick', () => {
    const onItemClick = jest.fn()
    const wrapper = mount({
      render() {
        return <Radio value="option2" options={options} onClick={onItemClick} />
      },
    })
    wrapper.find('.ob-radio .ob-radio__option').trigger('click')
    expect(onItemClick).toBeCalled()
    expect(onItemClick.mock.calls[0][0]).toBe('option1')
  })

  it('Radio onClick disabled, onClick not to be called', () => {
    const onItemClick = jest.fn()
    const wrapper = mount({
      render() {
        return <Radio value="option2" options={options} onClick={onItemClick} />
      },
    })
    wrapper.find('.ob-radio .ob-radio__option:nth-child(3)').trigger('click')
    expect(onItemClick).not.toBeCalled()
  })
})
