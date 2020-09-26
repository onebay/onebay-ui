import { defineComponent, computed, ref, watch } from 'vue'
import classNames from 'classnames'
import List from '../list/index'
import ListItem from '../list/item/index'

export interface DrawerProps {
  show?: boolean
  mask?: boolean
  right?: boolean
  width?: string | number
  items?: any[]
  className: any
}
const Drawer = defineComponent({
  components: {
    List,
    ListItem
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    mask: {
      type: Boolean,
      default: true,
    },
    right: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [Number, String],
      default: '',
    },
    items: {
      type: Array,
      default: function () {
        return []
      },
    },
    className: {
      type: [Object, String],
      default: function () {
        return {}
      },
    },
    onItemClick: {
      type: Function,
      default: function () {
        return () => { }
      },
    },
  },
  setup(props: DrawerProps) {
    const animShow = ref(false)
    const visible = ref(props.show)

    const inimationShow = () => {
      visible.value = true
      setTimeout(() => {
        animShow.value = true
      }, 200)
    }

    watch(() => props.show, (val) => {
      visible.value = val
      if (val) {
        inimationShow()
      }
    }, { immediate: true })

    const maskStyle = computed(() => {
      const { mask } = props
      return {
        display: props.mask ? 'block' : 'none',
        opacity: animShow.value ? 1 : 0
      }
    })

    const classObject = computed(() => {
      const { right } = props
      return {
        'at-drawer--show': animShow.value,
        'at-drawer--right': right,
        'at-drawer--left': !right,
      }
    })

    const listStyle = computed(() => {
      const { width } = props
      return {
        width,
        opacity: animShow.value ? 1 : 0,
        transition: animShow.value
          ? 'all 225ms cubic-bezier(0, 0, 0.2, 1)'
          : 'all 195ms cubic-bezier(0.4, 0, 0.6, 1)',
      }
    })

    const rootCls = computed(() => {
      const rootClassName = ['at-drawer']
      return classNames(rootClassName, classObject.value, props.className)
    })
    return {
      animShow,
      visible,
      inimationShow,
      maskStyle,
      classObject,
      listStyle,
      rootCls
    }
  },
  mounted(): void {
    const { visible } = this
    if (visible) this.inimationShow()
  },
  methods: {
    handleItemClick(index: number): void {
      this.onItemClick && this.onItemClick(index)
      this.animHide()
    },

    onHide(): void {
      this.visible = false
      this.$emit('close')
    },

    animHide(): void {
      this.animShow = false
      setTimeout(() => {
        this.onHide()
      }, 300)
    },

    onMaskClick(): void {
      this.animHide()
    },
  },
  render(): JSX.Element {
    const { items } = this.$props
    const { visible, rootCls, maskStyle, onMaskClick, listStyle, $slots, handleItemClick } = this
    if (visible) {
      return (
        <div class={rootCls}>
          <div class="at-drawer__mask" style={maskStyle} onClick={onMaskClick}></div>
          <div class="at-drawer__content" style={listStyle}>
            {
              !!items && items.length && items.map((name, index) => (
                <List key={index}>
                  <ListItem
                    key={`${name}-${index}`}
                    data-index={index}
                    onClick={handleItemClick.bind(this, index)}
                    title={name}
                    arrow="right"
                  >
                  </ListItem>
                </List>
              )
              )
            }
            {items.length === 0 && $slots.default && $slots.default()}
          </div>
        </div>
      )
    }
  }
})

export default Drawer
