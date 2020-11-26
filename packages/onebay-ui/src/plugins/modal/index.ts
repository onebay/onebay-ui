import ModalContainer from './ModalContainer'
import withContainer, { Config, WithContainerType } from '../withContainer'

const MODAL_CONTAINER_CLASS = 'modal-container'

export enum MessageStatus {
  Success = 'success',
  Error = 'error',
  Loading = 'loading'
}

export interface ModalConfig extends Config {
  title?: string | JSX.Element
  content?: string | JSX.Element
  isOpened?: boolean
  'cancel-text'?: string
  'confirm-text'?: string
  onClose?: () => void
  onCancel?: () => void
  onConfirm?: (e: Event) => unknown
}

const modal = (config: ModalConfig = {}): WithContainerType => {
  return withContainer(ModalContainer, MODAL_CONTAINER_CLASS, config)
}

export default modal
