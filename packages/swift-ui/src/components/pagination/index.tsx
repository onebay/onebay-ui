import classNames from 'classnames'
import { defineComponent, computed, reactive } from 'vue'
import Button from '../button'

const MIN_MAXPAGE = 1
/**
 *
 * @param {number} maxPage
 */
const getMaxPage = (maxPage = 0) => {
  if (maxPage <= 0) return MIN_MAXPAGE
  return maxPage
}
/**
 *
 * @param {number} maxPage
 */
const createPickerRange = (max: number) => {
  const range = new Array(max).fill(0).map((_, index) => index + 1)
  return range
}

export default defineComponent({
  name: 'Pagination',
  components: {
    Button
  },
  props: {
    customStyle: {
      type: [Object, String],
      default: () => ''
    },
    className: {
      type: [Array, String],
      default: () => ''
    },
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 20
    },
    icon: {
      type: Boolean,
      default: false
    },
    onPageChange: {
      type: Function,
      default: () => {
        /* */
      }
    },
    preText: {
      type: String,
      default: 'pre'
    },
    nextText: {
      type: String,
      default: 'next'
    }
  },
  setup(props) {
    const state = (() => {
      const { current, pageSize, total } = props
      const maxPage = getMaxPage(Math.ceil(total / pageSize))
      return reactive({
        currentPage: current || 1,
        maxPage,
        pickerRange: createPickerRange(maxPage)
      })
    })()
    const rootCls = computed(() => {
      const rootClassName = ['at-pagination']
      const classObject = {
        'at-pagination--icon': props.icon
      }
      return classNames(rootClassName, classObject, props.className)
    })

    const prevDisabled = computed(() => {
      const { maxPage, currentPage } = state
      return maxPage === MIN_MAXPAGE || currentPage === 1
    })

    const nextDisabled = computed(() => {
      const { maxPage, currentPage } = state
      return maxPage === MIN_MAXPAGE || currentPage === maxPage
    })

    return {
      state,
      rootCls,
      prevDisabled,
      nextDisabled
    }
  },
  watch: {
    total() {
      const { pageSize, total } = this
      this.state.maxPage = getMaxPage(Math.ceil(total / pageSize))
    }
  },
  methods: {
    onPrev() {
      let { currentPage } = this.state
      const originCur = currentPage
      currentPage -= 1
      currentPage = Math.max(1, currentPage)
      if (originCur === currentPage) return
      this.onPageChange && this.onPageChange({ type: 'prev', current: currentPage })
      this.state.currentPage = currentPage
    },
    onNext() {
      let { currentPage } = this.state
      const originCur = currentPage
      const { maxPage } = this.state
      currentPage += 1
      currentPage = Math.min(maxPage, currentPage)
      if (originCur === currentPage) return
      this.onPageChange && this.onPageChange({ type: 'next', current: currentPage })
      this.state.currentPage = currentPage
    }
  },
  render(): JSX.Element {
    const { rootCls, onPrev, onNext, prevDisabled, nextDisabled, state } = this
    const { customStyle, icon, preText, nextText } = this.$props
    return (
      <div class={rootCls} style={customStyle}>
        <div class="at-pagination__btn-prev">
          {icon ? (
            <Button onClick={onPrev} size="small" disabled={prevDisabled}>
              <div class="at-icon at-icon-chevron-left text" />
            </Button>
          ) : (
            <Button onClick={onPrev} size="small" disabled={prevDisabled}>
              {preText}
            </Button>
          )}
        </div>
        <div class="at-pagination__number">
          <span class="at-pagination__number-current text">{state.currentPage}</span>/
          {state.maxPage}
        </div>
        <div class="at-pagination__btn-next">
          {icon ? (
            <Button onClick={onNext} size="small" disabled={nextDisabled}>
              <div class="at-icon at-icon-chevron-right text" />
            </Button>
          ) : (
            <Button onClick={onNext} size="small" disabled={nextDisabled}>
              {nextText}
            </Button>
          )}
        </div>
      </div>
    )
  }
})
