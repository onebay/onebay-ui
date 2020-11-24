import ToastContainer from './ToastContainer'
import withContainer, { Config, WithContainerType } from '../withContainer'

const TOAST_CONTAINER_CLASS = 'toast-container'

export enum ToastStatus {
  Success = 'success',
  Error = 'error',
  Loading = 'loading'
}

export interface ToastConfig extends Config {
  text?: string
  status?: 'success' | 'error' | 'loading'
  duration?: number
  isOpened?: boolean
  hasMask?: boolean
  onClose?: () => void
  onClick?: (e: MouseEvent) => unknown
}

const toast = (config: ToastConfig = {}): WithContainerType => {
  return withContainer(ToastContainer, TOAST_CONTAINER_CLASS, config)
}

toast.success = (config: ToastConfig = {}) => {
  config.status = ToastStatus.Success
  return toast(config)
}

toast.error = (config: ToastConfig = {}) => {
  config.status = ToastStatus.Error
  return toast(config)
}

toast.loading = (config: ToastConfig = {}) => {
  config.status = ToastStatus.Loading
  return toast(config)
}

export default toast
