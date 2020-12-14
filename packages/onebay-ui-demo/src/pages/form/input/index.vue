<template>
  <div class="page">
    <!-- S Header -->
    <DocsHeader title="Input 输入框"></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <div class="doc-body">
      <!-- 基础用法 -->
      <div class="panel">
        <div class="panel__title">基础用法</div>
        <div class="panel__content no-padding">
          <div class="component-item">
            <Form>
              <Input
                name="value1"
                title="标准五个字"
                type="text"
                placeholder="标准五个字"
                :value="value1"
                :onChange="handleInput.bind(this, 'value1')"
              />
              <Input
                name="value2"
                title="标题实在特别长就换行"
                placeholder="其他列保持正常间距"
                :value="value2"
                :onChange="handleInput.bind(this, 'value2')"
              />
              <Input
                name="value3"
                :border="false"
                placeholder="无标题"
                :value="value3"
                :onChange="handleInput.bind(this, 'value3')"
              />
            </Form>
          </div>
        </div>
      </div>

      <!-- 输入框类型 -->
      <div class="panel">
        <div class="panel__title">输入框类型</div>
        <div class="panel__content no-padding">
          <div class="component-item">
            <Form>
              <Input
                name="value4"
                title="文本"
                type="text"
                placeholder="单行文本"
                :value="value4"
                :onChange="handleInput.bind(this, 'value4')"
              />
              <Input
                name="value5"
                title="数字"
                type="number"
                placeholder="请输入数字"
                :value="value5"
                :onChange="handleInput.bind(this, 'value5')"
              />
              <Input
                name="value6"
                title="密码"
                type="password"
                placeholder="密码不能少于10位数"
                :value="value6"
                :onChange="handleInput.bind(this, 'value6')"
              />
              <Input
                name="value7"
                title="身份证"
                type="idcard"
                placeholder="身份证号码"
                :value="value7"
                :onChange="handleInput.bind(this, 'value7')"
              />
              <Input
                name="value8"
                title="小数"
                type="digit"
                placeholder="请输入小数"
                :value="value8"
                :onChange="handleInput.bind(this, 'value8')"
              />
              <Input
                name="value9"
                :border="false"
                title="手机号码"
                type="phone"
                placeholder="手机号码"
                :value="value9"
                :onChange="handleInput.bind(this, 'value9')"
              />
            </Form>
          </div>
        </div>
      </div>

      <!-- 状态 -->
      <div class="panel">
        <div class="panel__title">状态</div>
        <div class="panel__content no-padding">
          <div class="component-item">
            <Form>
              <Input
                name="value10"
                disabled
                title="禁用"
                type="text"
                placeholder="禁止输入"
                :value="value10"
                :onChange="handleInput.bind(this, 'value10')"
              />
              <Input
                name="value11"
                error
                title="出现错误"
                type="text"
                placeholder="点击按钮触发回调"
                :value="value11"
                :onChange="handleInput.bind(this, 'value11')"
                :onErrorClick="onClickErrorIcon"
              />
              <Input
                name="value12"
                :editable="false"
                title="不可编辑"
                type="text"
                placeholder="不可编辑"
                value="不可编辑的内容"
              />
              <Input
                name="value13"
                :border="false"
                clear
                title="清除按钮"
                type="text"
                placeholder="点击清除按钮清空内容"
                :value="value13"
                :onChange="handleInput.bind(this, 'value13')"
              />
              <Input
                name="value16"
                :border="false"
                required
                title="必填项"
                type="text"
                placeholder="必填项"
                :value="value16"
                :onChange="handleInput.bind(this, 'value16')"
              />
            </Form>
          </div>
        </div>
      </div>

      <!-- 自定义右边栏 -->
      <div class="panel">
        <div class="panel__title">自定义右边栏</div>
        <div class="panel__content no-padding">
          <div class="component-item">
            <Form>
              <Input
                name="value14"
                title="验证码"
                type="text"
                :maxLength="4"
                clear
                placeholder="验证码"
                :value="value14"
                :onChange="handleInput.bind(this, 'value14')"
              >
                <img :src="verification_code" />
              </Input>
              <Input
                name="value15"
                :border="false"
                type="phone"
                clear
                placeholder="请输入手机号码"
                :value="value15"
                :onChange="handleInput.bind(this, 'value15')"
              >
                <div
                  :style="{
                    color: disabled ? '#FF4949' : '',
                    fontSize: '12px',
                    width: '90px'
                  }"
                  :onClick="sendCode"
                >
                  {{ showTipText() }}
                </div>
              </Input>
            </Form>
          </div>
        </div>
      </div>
    </div>
    <!-- E Body -->
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import verification_code from '../../../assets/images/verification_code.png'
import { Input, Form } from 'onebay-ui'

export default defineComponent({
  name: 'InputPage',
  components: {
    Input,
    Form
  },
  data() {
    return {
      verification_code,
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
      value9: '',
      value10: '',
      value11: '',
      value13: '',
      value14: '',
      value15: '',
      value16: '',
      value17: '',
      disabled: false,
      second: 60
    }
  },
  methods: {
    setState(state) {
      Object.keys(state).forEach((k) => {
        this[k] = state[k]
      })
    },
    showTipText() {
      return this.disabled ? `${this.second}s后重试` : '发送验证码'
    },

    sendCode() {
      if (this.disabled) return
      this.setState({
        disabled: true
      })
      // 倒计时
      const timer = setInterval(() => {
        if (this.second > 0) {
          this.setState({
            second: this.second - 1
          })
        } else {
          this.setState({
            second: 60,
            disabled: false
          })
          clearInterval(timer)
        }
      }, 1000)
    },

    handleInput(stateName, value) {
      this.setState({
        [stateName]: value
      })
      console.log(stateName, value)
    },

    onClickErrorIcon() {
      this.$toast({
        text: '请输入数字',
        status: 'error',
        duration: 2000
      })
    }
  }
})
</script>
