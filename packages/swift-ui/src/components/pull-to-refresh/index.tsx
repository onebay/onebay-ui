import { CSSProperties, defineComponent, PropType, ref } from 'vue'
import classNames from 'classnames'
import { getLen, Point, getPoint } from '../../utils'
import Icon from '../icon'

export enum Direction {
  Up = 'up',
  Down = 'down'
}
export type DirectionType = 'up' | 'down'

const prefixCls = 'cr-pull-to-refresh'

const getDirection = (point1: Point, point2: Point): Direction => {
  return point1.y > point2.y ? Direction.Up : Direction.Down
}

export default defineComponent({
  name: 'PullToRefresh',
  props: {
    indicator: {
      type: String,
      default: ''
    },
    indicatorText: {
      type: String,
      default: 'loading...'
    },
    className: {
      type: String,
      default: ''
    },
    direction: {
      type: String as PropType<DirectionType>,
      default: Direction.Down
    },
    distanceToRefresh: {
      type: Number,
      default: 25
    },
    refreshing: {
      type: Boolean,
      default: false
    },
    style: {
      type: String as PropType<CSSProperties>,
      default: ''
    },
    onRefresh: {
      type: Function,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      default: () => {}
    }
  },
  emits: ['refresh'],
  setup(props, { slots, emit }) {
    const trackStyle = ref({})
    const moving = ref(false)
    let startPoint: Point
    const onTouchStart = (event: TouchEvent) => {
      if (!startPoint) {
        startPoint = getPoint(event.targetTouches[0])
      }
    }
    const onTouchMove = (event: TouchEvent) => {
      /* istanbul ignore else */
      if (startPoint) {
        const { direction } = props
        const movepoint = getPoint(event.changedTouches[0])
        const distance = getLen([startPoint, movepoint])
        const moveDirection = getDirection(startPoint, movepoint)
        /* istanbul ignore else */
        if (moveDirection === direction) {
          moving.value = true
          trackStyle.value = {
            transform: `translate3d(0px, ${direction === Direction.Up ? '-' : ''}${Math.floor(
              distance / 5
            )}px, 0px)`,
            'transition-duration': '0ms'
          }
        }
      }
    }
    const resetStyle = () => {
      trackStyle.value = { 'transition-duration': '300ms' }
    }
    const onTouchEnd = (event: TouchEvent) => {
      const { direction, distanceToRefresh } = props
      const endPoint = getPoint(event.changedTouches[0])
      const isStartPoint = endPoint.index === startPoint.index
      /* istanbul ignore else */
      if (!isStartPoint) {
        return
      }
      const moveDirection = getDirection(startPoint, endPoint)
      /* istanbul ignore else */
      if (moveDirection === direction) {
        trackStyle.value = {
          transform: `translate3d(0px, ${direction === Direction.Up ? '-' : ''}36px, 0px)`,
          'transition-duration': '0ms'
        }
      }
      /* istanbul ignore else */
      if (moving.value) {
        emit('refresh')
      }
      /* istanbul ignore else */
      if (distanceToRefresh < getLen([startPoint, endPoint])) {
        setTimeout(resetStyle, 500)
      }
      moving.value = false
      startPoint = null
    }

    const loadingContent = () => {
      const { indicator, indicatorText } = props
      return (
        <div class={`${prefixCls}-indicator`}>
          {indicator || (
            <>
              <Icon
                width={24}
                height={24}
                iconName="loading"
                style="vertical-align: -6px; margin-right: 4px;">
                <g>
                  <path
                    d="M512 512m-426.666667 0a426.666667 426.666667 0 1 0 853.333334 0 426.666667 426.666667 0 1 0-853.333334 0Z"
                    fill="#959BA7"
                    fill-opacity=".3"
                    p-id="740"></path>
                  <path
                    d="M938.666667 512c0-235.648-191.018667-426.666667-426.666667-426.666667v426.666667h426.666667z"
                    fill="#008CD1"
                    p-id="741"></path>
                  <path
                    d="M512 512m-320 0a320 320 0 1 0 640 0 320 320 0 1 0-640 0Z"
                    fill="#FFFFFF"
                    p-id="742"></path>
                </g>
              </Icon>
              {indicatorText}
            </>
          )}
        </div>
      )
    }

    return () => {
      const { direction, style, className } = props
      return (
        <div class={classNames(prefixCls, `${prefixCls}-${direction}`, className)} style={style}>
          <div class={`${prefixCls}-wrapper`}>
            <div
              class={`${prefixCls}__track`}
              style={trackStyle.value}
              onTouchstart={onTouchStart}
              onTouchmove={onTouchMove}
              onTouchend={onTouchEnd}>
              {direction === Direction.Down && loadingContent()}
              {slots.default?.()}
              {direction === Direction.Up && loadingContent()}
            </div>
          </div>
        </div>
      )
    }
  }
})
