import { createApp } from 'vue'
import { isFunction } from '../utils'

export type ContainerCallback = () => HTMLElement | Promise<HTMLElement>

export interface Config {
  container?: HTMLElement | ContainerCallback
}

export default function withContainer(
  component: unknown,
  containerClass: string,
  config: Config
): { close: () => void } {
  let { container = document.body } = config

  const getContainer = async () => {
    if (isFunction(container)) {
      container = await container()
    }
  }
  getContainer()

  if (!(container instanceof HTMLElement)) {
    console.error(`${container} is not an instance of HTMLElement`)
    return
  }

  const compContainer = document.createElement('div')
  compContainer.classList.add(containerClass)
  container.appendChild(compContainer)

  const close = () => {
    if (compContainer.parentNode) {
      compContainer.parentNode.removeChild(compContainer)
    }
  }

  const app = createApp(component, {
    config,
    close
  })

  app.mount(compContainer)

  return { close }
}

export type WithContainerType = ReturnType<typeof withContainer>
