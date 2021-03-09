import { defineComponent, computed, ref, watch, onMounted, PropType, CSSProperties } from 'vue'
import classNames from 'classnames'
import List from '../list/index'
import ListItem from '../list/item/index'

const Drawer = defineComponent({
  components: {
    List,
    ListItem
  },
  props: {
    style: {
      type: String as PropType<CSSProperties>,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    },
    mask: {
      type: Boolean,
      default: true
    },
    right: {
      type: Boolean,
      default: false
    },
    width: {
      type: [Number, String],
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    },
    className: {
      type: String,
      default: ''
    },
    onItemClick: {
      type: Function,
      default: () => {
        /* */
      }
    },
    onClose: {
      type: Function,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      default: () => {}
    }
  },
  emits: ['close'],
  setup(props, { emit, slots }) {
    const animShow = ref(false)
    const visible = ref(props.show)

    const inimationShow = () => {
      visible.value = true
      setTimeout(() => {
        animShow.value = true
      }, 200)
    }

    watch(
      () => props.show,
      (val) => {
        visible.value = val
        if (val) {
          inimationShow()
        }
      },
      { immediate: true }
    )

    const maskStyle = computed(() => {
      return {
        display: props.mask ? 'block' : 'none',
        opacity: animShow.value ? 1 : 0
      }
    })

    const classObject = computed(() => {
      const { right } = props
      return {
        'ob-drawer--show': animShow.value,
        'ob-drawer--right': right,
        'ob-drawer--left': !right
      }
    })

    const listStyle = computed(() => {
      const { width } = props
      return {
        width,
        opacity: animShow.value ? 1 : 0,
        transition: animShow.value
          ? 'all 225ms cubic-bezier(0, 0, 0.2, 1)'
          : 'all 195ms cubic-bezier(0.4, 0, 0.6, 1)'
      }
    })

    const rootCls = computed(() => {
      const rootClassName = ['ob-drawer']
      return classNames(rootClassName, classObject.value, props.className)
    })

    const onHide = (): void => {
      visible.value = false
      emit('close')
    }

    const animHide = (): void => {
      animShow.value = false
      setTimeout(() => {
        onHide()
      }, 300)
    }

    const handleItemClick = (index: number): void => {
      props.onItemClick(index)
      animHide()
    }

    const onMaskClick = (): void => {
      animHide()
    }

    onMounted(() => {
      if (visible.value) inimationShow()
    })

    return () => {
      const { items, style } = props
      if (visible.value) {
        return (
          <div class={rootCls.value} style={style}>
            <div class="ob-drawer__mask" style={maskStyle.value} onClick={onMaskClick}></div>
            <div class="ob-drawer__content" style={listStyle.value}>
              {!!items &&
                items.length &&
                items.map((name, index) => (
                  <List key={index}>
                    <ListItem
                      key={`${name}-${index}`}
                      onClick={() => {
                        handleItemClick(index)
                      }}
                      title={name as string}
                      arrow="right"></ListItem>
                  </List>
                ))}
              {items.length === 0 && slots?.default()}
            </div>
          </div>
        )
      }
      return null
    }
  }
})

export default Drawer
