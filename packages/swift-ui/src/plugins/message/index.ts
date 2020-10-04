import MessageContainer from './MessageContainer'
import withContainer, { Config, WithContainerType } from '../withContainer'

const MESSAGE_CONTAINER_CLASS = 'message-container'

export enum MessageType {
  Info = 'info',
  Success = 'success',
  Error = 'error',
  Loading = 'loading'
}

export interface MessageConfig extends Config {
  message?: string
  type?: MessageType
  duration?: number
  isOpened?: boolean
  onClose?: () => void
  onClick?: (e: MouseEvent) => unknown
}

const message = (config: MessageConfig = {}): WithContainerType => {
  return withContainer(MessageContainer, MESSAGE_CONTAINER_CLASS, config)
}

message.info = (config: MessageConfig = {}) => {
  config.type = MessageType.Info
  return message(config)
}

message.success = (config: MessageConfig = {}) => {
  config.type = MessageType.Success
  return message(config)
}

message.error = (config: MessageConfig = {}) => {
  config.type = MessageType.Error
  return message(config)
}

message.loading = (config: MessageConfig = {}) => {
  config.type = MessageType.Loading
  return message(config)
}

export default message
