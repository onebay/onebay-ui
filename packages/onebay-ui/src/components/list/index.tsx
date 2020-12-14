import { defineComponent, computed } from 'vue'
import classNames from 'classnames'
import ListItem from './item/index'

const List = defineComponent({
  name: 'List',
  props: {
    hasBorder: {
      type: Boolean,
      default: true
    },
    className: {
      type: [Array, String],
      default: ''
    }
  },
  setup(props) {
    const rootClass = computed(() => {
      return classNames(
        'ob-list',
        {
          'ob-list--no-border': !props.hasBorder
        },
        props.className
      )
    })
    return {
      rootClass
    }
  },
  render(): JSX.Element {
    const { rootClass, $slots } = this
    return <div class={rootClass}>{$slots.default && $slots.default()}</div>
  }
})

List.ListItem = ListItem
export default List
