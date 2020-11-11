import classnames from 'classnames'
import { FlexItemPropsType } from './PropsType'
import { CSSProperties } from '../../../global'
import { defineComponent } from 'vue'

export interface FlexItemProps extends FlexItemPropsType {
  prefixCls?: string
  className?: string
  style?: CSSProperties
}

const FlexItem = defineComponent({
  name: 'FlexItem',
  props: {
    style: {
      type: String,
      default: ''
    },
    prefixCls: {
      type: String,
      default: 'cr-flexbox'
    },
    className: {
      type: String,
      default: ''
    }
  },
  render() {
    const { className, prefixCls, style, ...restProps } = this.$props
    const wrapCls = classnames(`${prefixCls}-item`, className)
    return (
      <div class={wrapCls} style={style} {...restProps}>
        {this.$slots.default?.()}
      </div>
    )
  }
})

export default FlexItem
