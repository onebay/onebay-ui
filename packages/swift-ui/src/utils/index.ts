import baseToString from './baseToString'
const objectToString = (style: string | unknown): string => {
  if (style && typeof style === 'object') {
    let styleStr = ''
    Object.keys(style).forEach((key) => {
      const lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
      styleStr += `${lowerCaseKey}:${style[key]};`
    })
    return styleStr
  } else if (style && typeof style === 'string') {
    return style
  }
  return ''
}
export function mergeStyle(style1: string | unknown, style2: string | unknown): string | unknown {
  if (style1 && typeof style1 === 'object' && style2 && typeof style2 === 'object') {
    return Object.assign({}, style1, style2)
  }
  return objectToString(style1) + objectToString(style2)
}

let scrollTop = 0
export function handleTouchScroll(flag: boolean): void {
  if (flag) {
    scrollTop = document.documentElement.scrollTop

    // 使body脱离文档流
    document.body.classList.add('at-frozen')

    // 把脱离文档流的body拉上去！否则页面会回到顶部！
    document.body.style.top = `${-scrollTop}px`
  } else {
    document.body.style.top = ''
    document.body.classList.remove('at-frozen')

    document.documentElement.scrollTop = scrollTop
  }
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (value: unknown): value is Function => typeof value === 'function'

interface EventDetail {
  pageX: number
  pageY: number
  clientX: number
  clientY: number
  offsetX: number
  offsetY: number
  x: number
  y: number
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getEventDetail(event: any): EventDetail {
  const detail: EventDetail = {
    pageX: event.pageX,
    pageY: event.pageY,
    clientX: event.clientX,
    clientY: event.clientY,
    offsetX: event.offsetX,
    offsetY: event.offsetY,
    x: event.x,
    y: event.y
  }
  return detail
}

export function shouleBeObject(target) {
  if (target && typeof target === 'object') return { res: true }
  return {
    res: false,
    msg: getParameterError({
      correct: 'Object',
      wrong: target
    })
  }
}

export function getParameterError({ name = '', para, correct, wrong }) {
  const parameter = para ? `parameter.${para}` : 'parameter'
  const errorType = upperCaseFirstLetter(wrong === null ? 'Null' : typeof wrong)
  return `${name}:fail parameter error: ${parameter} should be ${correct} instead of ${errorType}`
}

function upperCaseFirstLetter(string: unknown) {
  if (typeof string !== 'string') return string
  string = string.replace(/^./, (match) => match.toUpperCase())
  return string
}

/**
 * return a uuid
 */
export const uuid = ((id: number) => () => `uuid-${id++}`)(1000)

export { baseToString }
