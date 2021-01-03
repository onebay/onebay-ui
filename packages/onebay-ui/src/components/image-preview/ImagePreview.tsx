import classNames from 'classnames'
import { defineComponent, PropType, ref, computed, watch } from 'vue'
import Swiper from '../swiper'
import { getLen } from '../../utils'

const threshold = 10

const ImagePreview = defineComponent({
  name: 'ImagePreview',
  components: {
    Swiper
  },
  props: {
    className: {
      type: String,
      default: ''
    },
    images: {
      type: Array as PropType<string[]>,
      default: () => []
    },
    show: {
      type: Boolean,
      default: false
    },
    startPosition: {
      type: Number,
      default: 1
    },
    paginationVisible: {
      type: Boolean,
      default: true
    },
    maxScale: {
      type: Number,
      default: 3
    },
    minScale: {
      type: Number,
      default: 1
    }
  },
  emits: ['close', 'open'],
  setup(props, { emit }) {
    const touchPoint = []
    let movePoint = []
    const scale = ref(1)
    const visible = ref(props.show)
    watch(
      () => props.show,
      (val) => {
        /* istanbul ignore else */
        if (val !== visible.value) {
          visible.value = val
        }
      }
    )
    watch(
      () => visible.value,
      (val) => {
        if (val) {
          emit('open')
        } else {
          emit('close')
        }
      }
    )
    const toggleVisible = () => {
      visible.value = !visible.value
    }
    const handleTouchstart = (event: TouchEvent) => {
      const touchList = [].slice.call(event.targetTouches)
      /* istanbul ignore else */
      if (touchList.length > 1) {
        touchList.forEach((item: Touch, index: number) => {
          const point = {
            index: item.identifier,
            x: item.clientX,
            y: item.clientY
          }
          touchPoint[index] = point
        })
        movePoint = JSON.parse(JSON.stringify(touchPoint))
      }
    }
    const handleTouchmove = (event: TouchEvent) => {
      const { minScale, maxScale } = props
      const touchList = [].slice.call(event.changedTouches)
      touchList.forEach((item: Touch, index: number) => {
        const point = {
          index: item.identifier,
          x: item.clientX,
          y: item.clientY
        }
        const matchPoint = movePoint.find((item) => item.index === point.index)
        if (matchPoint) {
          matchPoint.x = point.x
          matchPoint.y = point.y
        } else {
          movePoint[index] = point
        }
      })
      /* istanbul ignore else */
      if (movePoint.length > 1) {
        const start = getLen(touchPoint)
        const end = getLen(movePoint)
        /* istanbul ignore else */
        if (threshold < Math.abs(start - end)) {
          const temp = end / start
          if (temp > maxScale) {
            scale.value = maxScale
          } else if (temp < minScale) {
            scale.value = minScale
          } else {
            scale.value = temp
          }
        }
      }
    }
    const handleTouchend = (event: TouchEvent) => {
      const idx1 = touchPoint.findIndex((item) => item.index === event.changedTouches[0].identifier)
      touchPoint.splice(idx1, 1)
      const idx2 = movePoint.findIndex((item) => item.index === event.changedTouches[0].identifier)
      movePoint.splice(idx2, 1)
    }
    const scaleStyle = computed(() => {
      return {
        transform: `scale(${scale.value}, ${scale.value})`
      }
    })
    const handleDbClick = () => {
      if (scale.value > 1) {
        scale.value = 1
      } else {
        scale.value = 1.5
      }
    }

    return {
      handleTouchstart,
      handleTouchmove,
      handleTouchend,
      scaleStyle,
      handleDbClick,
      visible,
      toggleVisible,
      scale
    }
  },
  render() {
    const { className, images, startPosition, paginationVisible } = this.$props
    const {
      handleTouchstart,
      handleTouchmove,
      handleTouchend,
      scaleStyle,
      handleDbClick,
      visible,
      toggleVisible
    } = this
    return (
      <div
        class={classNames('ob-image-preview', className, { 'ob-image-preview-active': visible })}
        onTouchstart={handleTouchstart}
        onTouchmove={handleTouchmove}
        onTouchend={handleTouchend}
        onDblclick={handleDbClick}>
        <div class="ob-image-preview-mask" onClick={toggleVisible}></div>
        {visible && (
          <Swiper
            swiperData={images}
            class="ob-image-preview-content"
            style={scaleStyle}
            initPage={startPosition}
            paginationVisible={paginationVisible}>
            {images.map((item: string, index: number) => (
              <div key={index} class="ob-swiper-slide">
                <img src={item} style="max-width: 100%" />
              </div>
            ))}
          </Swiper>
        )}
      </div>
    )
  }
})

export default ImagePreview
