import classNames from 'classnames'
import { defineComponent, PropType } from 'vue'
import Swiper from '../swiper'

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
      default: true
    }
  },
  render() {
    const { className, images } = this.$props
    return (
      <div class={classNames('at-image-preview', className)}>
        <Swiper swiperData={images} class="at-image-preview-content">
          {images.map((item: string, index: number) => (
            <div key={index} class="at-swiper-slide">
              <img src={item} style="max-width: 100%" />
            </div>
          ))}
        </Swiper>
      </div>
    )
  }
})

export default ImagePreview
