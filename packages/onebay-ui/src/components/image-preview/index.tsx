import ImagePreviewContainer from './ImagePreviewContainer'
import withContainer, { Config, WithContainerType } from '../../plugins/withContainer'

const IMAGE_PREVIEW_CONTAINER_CLASS = 'image-preview-container'

export enum MessageStatus {
  Success = 'success',
  Error = 'error',
  Loading = 'loading'
}

export interface ImagePreviewConfig extends Config {
  startPosition?: number
  paginationVisible?: boolean
  images?: string[]
}

const modal = (config: ImagePreviewConfig = {}): WithContainerType => {
  return withContainer(ImagePreviewContainer, IMAGE_PREVIEW_CONTAINER_CLASS, config)
}

export default modal
