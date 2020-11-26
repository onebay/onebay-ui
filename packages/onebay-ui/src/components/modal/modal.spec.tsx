import { mount } from '@vue/test-utils'
import { Button, Modal, ModalAction, ModalHeader, ModalContent } from '../../index'
import { sleep } from '../../utils/helper'

const components = {
  Modal,
  ModalAction,
  ModalHeader,
  ModalContent,
}

describe('Modal Snap', () => {
  it('render initial Modal', () => {
    const wrapper = mount({
      components,
      render() {
        return (
          <Modal>
            <ModalHeader>This is Title </ModalHeader>
            <ModalContent>
              This is Modal Content  This is Modal Content
              This is Modal Content
            </ModalContent>
            <ModalAction>
              <Button>Cancel</Button>
              <Button>Confirm</Button>
            </ModalAction>
          </Modal>
        )
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened Modal', () => {
    const wrapper = mount({
      components,
      render() {
        return (
          <Modal isOpened>
            <ModalHeader>This is Title </ModalHeader>
            <ModalContent>
              This is Modal Content  This is Modal Content
              This is Modal Content
            </ModalContent>
            <ModalAction>
              <Button>Cancel</Button>
              <Button>Confirm</Button>
            </ModalAction>
          </Modal>
        )
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened Modal -- not header', () => {
    const wrapper = mount({
      components,
      render() {
        return (
          <Modal isOpened>
            <ModalContent>
              This is Modal Content  This is Modal Content
              This is Modal Content
            </ModalContent>
            <ModalAction>
              <Button>Cancel</Button>
              <Button>Confirm</Button>
            </ModalAction>
          </Modal>
        )
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened Modal -- single button', () => {
    const wrapper = mount({
      components,
      render() {
        return (
          <Modal isOpened>
            <ModalContent>
              This is Modal Content  This is Modal Content
              This is Modal Content
            </ModalContent>
            <ModalAction>
              <Button>Confirm</Button>
            </ModalAction>
          </Modal>
        )
      },
    })
    wrapper.find('.ob-modal').trigger('touchmove')
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened  Modal -- simple', () => {
    const wrapper = mount({
      components,
      render() {
        return (
          <Modal
            isOpened
            title="This is Title "
            confirmText="Confirm"
            content="This is Modal Content \n\r This is Modal Content"
          />
        )
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('Change Modal props -- isOpened', async () => {
    const wrapper = mount(Modal, {
      props: {
        title: "This is Title ",
        cancelText: "Cancel",
        confirmText: "Confirm",
        content: "This is Modal Content \n\r This is Modal Content",
      }
    })

    wrapper.setProps({ isOpened: true })
    await sleep(0)
    expect(wrapper.vm.visible).toBeTruthy()
  })
})

describe('Modal Behavior ', () => {
  it('Modal onClose & onCancel & onClick', async () => {
    const onCancel = jest.fn()
    const onConfirm = jest.fn()
    const onClose = jest.fn()
    const wrapper = mount({
      components,
      render() {
        return (
          <Modal
            isOpened
            title="This is Title "
            cancelText="Cancel"
            confirmText="Confirm"
            closeOnClickOverlay
            onClose={onClose}
            onCancel={onCancel}
            onConfirm={onConfirm}
            content="This is Modal Content \n\r This is Modal Content"
          />
        )
      },
    })
    const confirmDom = wrapper.find(
      '.ob-modal .ob-modal__footer .ob-modal__action button:last-child'
    )

    confirmDom.trigger('click')

    expect(onConfirm).toBeCalled()
    await sleep(10)

    const cancelDom = wrapper.find(
      '.ob-modal .ob-modal__footer .ob-modal__action button:first-child'
    )
    cancelDom.trigger('click')
    expect(onCancel).toBeCalled()
    await sleep(10)

    const overlayDom = wrapper.find('.ob-modal .ob-modal__overlay')
    overlayDom.trigger('click')
    await sleep(10)
    expect(onClose).toBeCalled()
  })
})
