import { defineComponent, ref } from 'vue'
import classNames from 'classnames'

// const VERTICAL = 'vertical'
const HORIZONTAL = 'horizontal'
export default defineComponent({
  name: 'Swiper',
  props: {
    direction: {
      type: String,
      default: HORIZONTAL
      // validator: (value) => [VERTICAL, HORIZONTAL].indexOf(value) > -1
    },
    paginationVisible: {
      type: Boolean,
      default: false
    },
    paginationClickable: {
      type: Boolean,
      default: false
    },
    loop: {
      type: Boolean,
      default: false
    },
    speed: {
      type: Number,
      default: 500
    },
    canDragging: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Number,
      default: 0
    },
    initPage: {
      type: Number,
      default: 1
    },
    lazyLoad: {
      type: Boolean,
      default: false
    },
    lazyLoadUrl: {
      type: String,
      default: ''
    },
    swiperData: {
      type: [Array],
      default: () => []
    },
    onSlideChangeEnd: {
      type: Function,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      default: () => {}
    },
    onSlideChangeStart: {
      type: Function,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      default: () => {}
    },
    onSlideChangeMove: {
      type: Function,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      default: () => {}
    }
  },
  emits: [
    'slide-move',
    'slide-change-start',
    'slide-change-end',
    'slide-revert-start',
    'slide-revert-end',
    'change'
  ],
  setup(props) {
    const state = {
      dragging: false,
      currentPage: props.initPage,
      lastPage: 1,
      translateX: 0,
      translateY: 0,
      startTranslate: 0,
      slideEls: [],
      translateOffset: 0, //当前偏移初始位置距离
      transitionDuration: 0, //切换动画时间
      startPos: null,
      delta: 0, //拖动距离
      startTime: null,
      isLoop: props.loop,
      timer: null, //自动播放定时器
      domTimer: null, //渲染延迟查找
      stopAutoPlay: false, //停止自动播放
      swiperWrap: null,
      oneSlideTranslate: 0 //一个slide的大小
    }
    Object.keys(state).forEach((k) => {
      state[k] = ref(state[k])
    })
    return state
  },
  watch: {
    swiperData() {
      this.updateEvent()
    },
    currentPage(val, oldVal) {
      this.$emit('change', val, oldVal)
    }
  },
  mounted() {
    this._onTouchMove = this._onTouchMove.bind(this)
    this._onTouchEnd = this._onTouchEnd.bind(this)
    this.updateEvent()
  },
  unmounted() {
    this.timer && clearInterval(this.timer)
    this.domTimer && clearTimeout(this.domTimer)
  },
  /* istanbul ignore next */
  activated() {
    if (this.keepAlive) {
      this.keepAlive = false
      this.updateEvent()
    }
  },
  /* istanbul ignore next */
  deactivated() {
    this.keepAlive = true
    this.timer && clearInterval(this.timer)
    this.domTimer && clearTimeout(this.domTimer)
  },
  methods: {
    //下一张
    next() {
      const page = this.currentPage
      if (page < this.slideEls.length || this.isLoop) {
        this.setPage(page + 1, true, 'NEXT')
      } else {
        this._revert()
      }
    },
    //上一张
    prev() {
      const page = this.currentPage
      if (page > 1 || this.isLoop) {
        this.setPage(page - 1, true, 'PREV')
      } else {
        this._revert()
      }
    },
    setPage(page, isHasAnimation, type) {
      if (page === 0) {
        this.currentPage = this.slideEls.length
      } else if (page === this.slideEls.length + 1) {
        this.currentPage = 1
      } else {
        this.currentPage = page
      }
      this._setTranslate(this._getTranslateOfPage(page))
      if (!isHasAnimation) {
        this._slideClassHandle()
      } else {
        this._onTransitionStart(type)
      }
    },
    isHorizontal() {
      return this.direction === HORIZONTAL
    },
    renderLazyDom(slideEls) {
      slideEls.forEach((item) => {
        if (item.className != 'ob-swiper-slide ob-swiper-slide-selected') {
          const dom = document.createElement('div')
          //jd 图片占位图)
          if (this.lazyLoadUrl) {
            dom.style.backgroundImage = `url('${this.lazyLoadUrl}')`
            dom.className = 'ob-lazy img'
          } else {
            dom.className = 'ob-lazy preloader'
          }
          item.appendChild(dom)
        }
      })
      return true
    },
    updateEvent() {
      this.$nextTick(() => {
        this.domTimer = setTimeout(() => {
          this.swiperWrap = this.$el.querySelector('.ob-swiper-wrap')
          this.slideEls = [...this.swiperWrap.children]
          if (this.slideEls.length === 0) return
          this._getSlideDistance(this.slideEls[0])
          if (this.autoPlay != 0) {
            this.isLoop = true
            this._createAutoPlay()
          }
          this.isLoop && this._createLoop()
          this.setPage(this.currentPage, false)
          this.lazyLoad && this.renderLazyDom(this.slideEls) && this._imgLazyLoad()
        }, 0)
      })
    },
    _slideClassHandle() {
      const selectedSlide = this.$el.querySelector('.ob-swiper-slide-selected')
      selectedSlide && selectedSlide.classList.remove('ob-swiper-slide-selected')
      this.slideEls[this.currentPage - 1].classList.add('ob-swiper-slide-selected')
      this.lastPage = this.currentPage
    },
    _getSlideDistance(el: HTMLElement) {
      const styleArr = getComputedStyle(el)
      const marginTop = +styleArr['marginTop'].replace('px', '') - 0
      const marginBottom = +styleArr['marginBottom'].replace('px', '') - 0
      const marginRight = +styleArr['marginRight'].replace('px', '') - 0
      const marginLeft = +styleArr['marginLeft'].replace('px', '') - 0
      if (this.isHorizontal()) {
        this.oneSlideTranslate = marginRight + marginLeft + el['offsetWidth']
      } else {
        this.oneSlideTranslate = marginTop + marginBottom + el['offsetHeight']
      }
    },
    _onTouchStart(e) {
      this.swiperWrap.addEventListener('touchmove', this._onTouchMove, false)
      this.swiperWrap.addEventListener('touchend', this._onTouchEnd, false)
      this.swiperWrap.addEventListener('mousemove', this._onTouchMove, false)
      this.swiperWrap.addEventListener('mouseup', this._onTouchEnd, false)
      this.startPos = this._getTouchPos(e)
      this.delta = 0
      this.startTranslate = this._getTranslateOfPage(this.currentPage)
      if (this.isLoop) {
        this._setTranslate(this.startTranslate)
      }
      this.startTime = new Date().getTime()
      this.dragging = true
      this.transitionDuration = 0
      this.stopAutoPlay = true
    },
    _onTouchMove(e) {
      if (!this.dragging) return
      if (this.isHorizontal()) {
        this.delta = this._getTouchPos(e).x - this.startPos.x
      } else {
        this.delta = this._getTouchPos(e).y - this.startPos.y
      }
      //let  isQuickAction = (new Date().getTime() - this.startTime) < 200;
      if (this.canDragging && this._computePreventDefault(e)) {
        e.preventDefault()
        this._setTranslate(this.startTranslate + this.delta)
        this.$emit('slide-move', this._getTranslate(), this.$el)
      }
    },
    _onTouchEnd() {
      if (!this.dragging) return
      this.dragging = false
      this.transitionDuration = this.speed
      const isQuickAction = new Date().getTime() - this.startTime < 1000
      if (this.delta < -this.oneSlideTranslate / 2 || (isQuickAction && this.delta < -15)) {
        this.next()
      } else if (this.delta > this.oneSlideTranslate / 2 || (isQuickAction && this.delta > 15)) {
        this.prev()
      } else {
        this._revert()
      }
      this.swiperWrap.removeEventListener('touchmove', this._onTouchMove, false)
      this.swiperWrap.removeEventListener('touchend', this._onTouchEnd, false)
      this.swiperWrap.removeEventListener('mousemove', this._onTouchMove, false)
      this.swiperWrap.removeEventListener('mouseup', this._onTouchEnd, false)
    },
    _revert() {
      this.setPage(this.currentPage, true)
    },
    _computePreventDefault(e) {
      const pos = this._getTouchPos(e)
      const xDis = Math.abs(this.startPos.x - pos.x)
      const yDis = Math.abs(this.startPos.y - pos.y)
      if (xDis <= 5 && xDis >= 0) {
        return false
      } else if (yDis > 5 && yDis / xDis > 0.5) {
        return false
      } else {
        return true
      }
    },
    _getTouchPos(e) {
      const x = e.changedTouches ? e.changedTouches[0]['pageX'] : e['pageX']
      const y = e.changedTouches ? e.changedTouches[0]['pageY'] : e['pageY']
      return { x, y }
    },
    _onTransitionStart(type) {
      this.transitionDuration = this.speed
      this.lazyLoad && this._imgLazyLoad(1)
      if (this._isPageChanged()) {
        this.$emit('slide-change-start', this.currentPage, this.$el, type)
      } else {
        this.$emit('slide-revert-start', this.currentPage, this.$el, type)
      }
    },
    _onTransitionEnd() {
      if (this._isPageChanged()) {
        this.$emit('slide-change-end', this.currentPage, this.$el)
      } else {
        this.$emit('slide-revert-end', this.currentPage, this.$el)
      }
      this.transitionDuration = 0
      this.delta = 0
      this.lastPage = this.currentPage

      this._slideClassHandle()
      if (this.isLoop) {
        this._setTranslate(this._getTranslateOfPage(this.currentPage))
      }
      this.stopAutoPlay = false
    },
    _isPageChanged() {
      return this.lastPage !== this.currentPage
    },
    _setTranslate(value) {
      const translateName = this.isHorizontal() ? 'translateX' : 'translateY'
      this[translateName] = value
    },
    _getTranslate() {
      const translateName = this.isHorizontal() ? 'translateX' : 'translateY'
      return this[translateName]
    },
    _getTranslateOfPage(page) {
      if (page === 0) return 0
      return (
        -[].reduce.call(
          this.slideEls,
          (total, el, i) => {
            return i > page - 2 ? total : total + this.oneSlideTranslate
          },
          0
        ) + this.translateOffset
      )
    },
    _createLoop() {
      const swiperWrapEl = this.$el.querySelector('.ob-swiper-wrap')
      const duplicateFirstChild = swiperWrapEl.firstElementChild.cloneNode(true)
      const duplicateLastChild = swiperWrapEl.lastElementChild.cloneNode(true)
      swiperWrapEl.insertBefore(duplicateLastChild, swiperWrapEl.firstElementChild)
      swiperWrapEl.appendChild(duplicateFirstChild)
      this.translateOffset = -this.oneSlideTranslate
    },
    _createAutoPlay() {
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        if (!this.stopAutoPlay) {
          this.next()
        }
      }, this.autoPlay)
    },
    _requestAniFrame() {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60)
        }
      )
    },
    _imgLazyLoad(type) {
      const requestAniFrame = this._requestAniFrame()
      let imgLazyLoadEl
      requestAniFrame(() => {
        imgLazyLoadEl = this.swiperWrap.querySelectorAll('.ob-img-lazyload')
        if (type == 1) {
          imgLazyLoadEl = this.slideEls[this.currentPage - 1].querySelectorAll('.ob-img-lazyload')
        }

        imgLazyLoadEl.forEach((item) => {
          if (!this._checkInView(item) && type != 1) return
          const src = item.getAttribute('data-src')
          const img = new Image()
          img.src = src
          /* istanbul ignore next */
          img.onload = () => {
            const lazyLoadingEle = item.parentElement.querySelector('.ob-lazy')
            if (lazyLoadingEle) {
              item.parentElement.removeChild(lazyLoadingEle)
            }
            item.src = src
            item.classList.remove('ob-img-lazyload')
          }
          /* istanbul ignore next */
          img.onerror = () => {
            item.src = this.lazyLoadUrl
            item.classList.remove('ob-img-lazyload')
          }
        })
      })
    },
    _checkInView(imgItem) {
      const imgRect = imgItem.getBoundingClientRect()
      const swiperRect = this.$el.getBoundingClientRect()
      const imgTop = imgRect.top
      const imgLeft = imgRect.left
      const swiperWidth = this.$el.clientWidth
      const swiperHeight = this.$el.clientHeight
      const swiperTop = swiperRect.top
      const swiperLeft = swiperRect.left
      let isInView = true
      if (imgTop > swiperTop + swiperHeight || imgLeft > swiperLeft + swiperWidth) {
        isInView = false
      }
      return isInView
    }
  },
  render() {
    const { direction, paginationClickable, paginationVisible } = this.$props
    const {
      setPage,
      dragging,
      _onTouchStart,
      translateX,
      translateY,
      transitionDuration,
      _onTransitionEnd,
      slideEls,
      currentPage,
      $slots
    } = this
    return (
      <div
        class={classNames('ob-swiper', direction, { dragging: dragging })}
        onTouchstart={_onTouchStart}
        onMousedown={_onTouchStart}>
        <div
          class="ob-swiper-wrap"
          style={{
            transform: 'translate3d(' + translateX + 'px,' + translateY + 'px,0)',
            transitionDuration: transitionDuration + 'ms',
            transitionTimingFunction: 'ease'
          }}
          onTransitionend={_onTransitionEnd}>
          {$slots.default && $slots.default()}
        </div>
        {paginationVisible && (
          <div class="ob-swiper-pagination">
            {slideEls.map((slide, index) => (
              <span
                class={classNames('swiper-pagination-bullet', {
                  active: index + 1 === currentPage
                })}
                key={index}
                onClick={paginationClickable && setPage(index + 1, true)}></span>
            ))}
          </div>
        )}
      </div>
    )
  }
})
