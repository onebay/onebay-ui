import classnames from 'classnames'
import { FlexPropsType as BasePropsType } from './PropsType'
import { defineComponent } from 'vue'
import { CSSProperties } from '../../../global'

export interface FlexProps extends BasePropsType {
  alignContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch'
  onClick?: (e: MouseEvent) => void
  prefixCls?: string
  className?: string
  role?: string
  style?: CSSProperties
}

const Flex = defineComponent({
  props: {
    style: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    },
    prefixCls: {
      type: String,
      default: 'ob-flexbox'
    },
    align: {
      type: String,
      default: 'center'
    },
    direction: {
      type: String,
      default: ''
    },
    wrap: {
      type: String,
      default: ''
    },
    justify: {
      type: String,
      default: ''
    },
    alignContent: {
      type: String,
      default: ''
    }
  },

  render() {
    const {
      direction,
      wrap,
      justify,
      align,
      alignContent,
      className,
      prefixCls,
      style,
      ...restProps
    } = this.$props

    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-dir-row`]: direction === 'row',
      [`${prefixCls}-dir-row-reverse`]: direction === 'row-reverse',
      [`${prefixCls}-dir-column`]: direction === 'column',
      [`${prefixCls}-dir-column-reverse`]: direction === 'column-reverse',

      [`${prefixCls}-nowrap`]: wrap === 'nowrap',
      [`${prefixCls}-wrap`]: wrap === 'wrap',
      [`${prefixCls}-wrap-reverse`]: wrap === 'wrap-reverse',

      [`${prefixCls}-justify-start`]: justify === 'start',
      [`${prefixCls}-justify-end`]: justify === 'end',
      [`${prefixCls}-justify-center`]: justify === 'center',
      [`${prefixCls}-justify-between`]: justify === 'between',
      [`${prefixCls}-justify-around`]: justify === 'around',

      [`${prefixCls}-align-start`]: align === 'start',
      [`${prefixCls}-align-center`]: align === 'center',
      [`${prefixCls}-align-end`]: align === 'end',
      [`${prefixCls}-align-baseline`]: align === 'baseline',
      [`${prefixCls}-align-stretch`]: align === 'stretch',

      [`${prefixCls}-align-content-start`]: alignContent === 'start',
      [`${prefixCls}-align-content-end`]: alignContent === 'end',
      [`${prefixCls}-align-content-center`]: alignContent === 'center',
      [`${prefixCls}-align-content-between`]: alignContent === 'between',
      [`${prefixCls}-align-content-around`]: alignContent === 'around',
      [`${prefixCls}-align-content-stretch`]: alignContent === 'stretch'
    })

    return (
      <div className={wrapCls} style={style} {...restProps}>
        {this.$slots.default?.()}
      </div>
    )
  }
})

export default Flex
