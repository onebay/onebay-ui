import { mount } from '@vue/test-utils'
import { Row, Col } from '../../src/index'

describe('Row Snap', () => {
  it('render initial Row', () => {
    const wrapper = mount(<Row />)
    expect(wrapper.element).toMatchSnapshot()
  })
  it('render Row with Col', () => {
    const wrapper = mount(
      <Row>
        <Col>column 1</Col>
        <Col>column 2</Col>
      </Row>,
      {
        components: { Col }
      }
    )
    expect(wrapper.element).toMatchSnapshot()
  })
  it('render Row props gutter', () => {
    const wrapper = mount(
      <Row gutter={20}>
        <Col>column 1</Col>
        <Col>column 2</Col>
      </Row>,
      {
        components: { Col }
      }
    )
    expect(wrapper.element).toMatchSnapshot()
  })
})
describe('Row Event', () => {
  it('emit onClick', () => {
    const wrapper = mount(<Row />)
    wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
})