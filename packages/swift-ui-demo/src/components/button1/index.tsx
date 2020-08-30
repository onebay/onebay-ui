import { defineComponent, computed } from 'vue';
import classnames from 'classnames';
import '../../weui/widget/weui-button/weui-button.less';
import '../../weui/widget/weui-loading/weui-loading.less';

export default defineComponent({
  name: 's-button',
  props: {
    msg: {
      type: String,
      default: ''
    },
    showLoading: {
      type: Boolean,
      default: false,
    },
    plain: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    mini: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'default'
    },
    gradients: {
      type: Array,
      default: () => ([])
    }
  },
  setup(props, context) {
    const { slots } = context
    
    const { disabled, plain, mini, gradients, type, showLoading } = props
    const rootCls = computed(() => {
      const noBorder = gradients.length > 0
      return classnames(
        'weui-btn',
        {
          'weui-btn_disabled': !plain && disabled,
          'weui-btn_plain-disabled': plain && disabled,
          'weui-btn_mini': mini,
          'vux-x-button-no-border': noBorder,
        },
        !plain ? `weui-btn_${type}` : '',
        plain ? `weui-btn_plain-${type}` : '',
        showLoading ? `weui-btn_loading` : ''
      )
    })
    return {
      rootCls
    };
  },
  render() {
    const { rootCls, showLoading, $slots } = this
    return (
      <button class={rootCls}>
        {showLoading && <i class="weui-loading"></i>}
        {$slots.default && $slots.default()}
      </button>
    )
  }
});