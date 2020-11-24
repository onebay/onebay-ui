import { defineComponent, reactive, ref } from 'vue'
import { Input, Form } from 'swift-ui/src/index'
import toast from 'swift-ui/src/plugins/toast'
import DocsHeader from '../../../components/DocHeader/DocsHeader'
import verification_code from '../../../assets/images/verification_code.png'

export default defineComponent({
  name: 'InputPage',
  components: {
    Input,
    Form
  },
  setup() {
    const disabled = ref(false)
    const second = ref(60)
    const state = reactive({
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
      value17: ''
    })

    const showTipText = () => {
      return disabled.value ? `Retry in ${second.value} seconds` : 'Send the verification code'
    }

    const sendCode = () => {
      if (disabled.value) return
      disabled.value = true
      const timer = setInterval(() => {
        if (second.value > 0) {
          second.value -= 1
        } else {
          second.value = 60
          disabled.value = false
          clearInterval(timer)
        }
      }, 1000)
    }

    type State = keyof typeof state

    const handleInput = (stateName: State, value: string) => {
      state[stateName] = value
      console.log(stateName, value)
    }

    const onClickErrorIcon = () => {
      toast({
        text: 'Please enter the numbers',
        status: 'error',
        duration: 2000
      })
    }
    return () => {
      return (
        <div class="page">
          {/* <!-- S Header --> */}
          <DocsHeader title="Input"></DocsHeader>
          {/* <!-- E Header --> */}

          {/* <!-- S Body --> */}
          <div class="doc-body">
            {/* <!-- Basic usage --> */}
            <div class="panel">
              <div class="panel__title">Basic usage</div>
              <div class="panel__content no-padding">
                <div class="component-item">
                  <Form>
                    <Input
                      name="value1"
                      title="Standard"
                      type="text"
                      placeholder="Standard"
                      value={state.value1}
                      onChange={(v: string) => handleInput('value1', v)}
                    />
                    <Input
                      name="value2"
                      title="The title is really long, just wrap"
                      placeholder="Keep other columns with normal spacing"
                      value={state.value2}
                      onChange={(v: string) => handleInput('value2', v)}
                    />
                    <Input
                      name="value3"
                      border={false}
                      placeholder="Untitled"
                      value={state.value3}
                      onChange={(v: string) => handleInput('value3', v)}
                    />
                  </Form>
                </div>
              </div>
            </div>

            {/* <!-- Input type --> */}
            <div class="panel">
              <div class="panel__title">Input type</div>
              <div class="panel__content no-padding">
                <div class="component-item">
                  <Form>
                    <Input
                      name="value4"
                      title="text"
                      type="text"
                      placeholder="Single line text"
                      value={state.value4}
                      onChange={(v: string) => handleInput('value4', v)}
                    />
                    <Input
                      name="value5"
                      title="digital"
                      type="number"
                      placeholder="Please enter the digits"
                      value={state.value5}
                      onChange={(v: string) => handleInput('value5', v)}
                    />
                    <Input
                      name="value6"
                      title="password"
                      type="password"
                      placeholder="Password cannot be less than 10 digits"
                      value={state.value6}
                      onChange={(v: string) => handleInput('value6', v)}
                    />
                    <Input
                      name="value7"
                      title="ID card"
                      type="idcard"
                      placeholder="identification number"
                      value={state.value7}
                      onChange={(v: string) => handleInput('value7', v)}
                    />
                    <Input
                      name="value8"
                      title="Decimal"
                      type="digit"
                      placeholder="Please enter a decimal"
                      value={state.value8}
                      onChange={(v: string) => handleInput('value8', v)}
                    />
                    <Input
                      name="value9"
                      border={false}
                      title="mobile phone number"
                      type="phone"
                      placeholder="mobile phone number"
                      value={state.value9}
                      onChange={(v: string) => handleInput('value9', v)}
                    />
                  </Form>
                </div>
              </div>
            </div>

            {/* <!-- status --> */}
            <div class="panel">
              <div class="panel__title">status</div>
              <div class="panel__content no-padding">
                <div class="component-item">
                  <Form>
                    <Input
                      name="value10"
                      disabled
                      title="disabled"
                      type="text"
                      placeholder="disabled input"
                      value={state.value10}
                      onChange={(v: string) => handleInput('value10', v)}
                    />
                    <Input
                      name="value11"
                      error
                      title="An error occurred"
                      type="text"
                      placeholder="Click the button to trigger the callback"
                      value={state.value11}
                      onChange={(v: string) => handleInput('value11', v)}
                      onErrorClick={onClickErrorIcon}
                    />
                    <Input
                      name="value12"
                      editable={false}
                      title="Not editable"
                      type="text"
                      placeholder="Not editable"
                      value="Uneditable content"
                    />
                    <Input
                      name="value13"
                      border={false}
                      clear
                      title="Clear button"
                      type="text"
                      placeholder="Click the clear button to empty the content"
                      value={state.value13}
                      onChange={(v: string) => handleInput('value13', v)}
                    />
                    <Input
                      name="value16"
                      border={false}
                      required
                      title="Required"
                      type="text"
                      placeholder="Required"
                      value={state.value16}
                      onChange={(v: string) => handleInput('value16', v)}
                    />
                  </Form>
                </div>
              </div>
            </div>

            {/* <!-- Customize the right sidebar --> */}
            <div class="panel">
              <div class="panel__title">Customize the right sidebar</div>
              <div class="panel__content no-padding">
                <div class="component-item">
                  <Form>
                    <Input
                      name="value14"
                      title="code"
                      type="text"
                      maxLength={4}
                      clear
                      placeholder="Verification code"
                      value={state.value14}
                      onChange={(v: string) => handleInput('value4', v)}
                    >
                      <img src={verification_code} />
                    </Input>
                    <Input
                      name="value15"
                      border={false}
                      type="phone"
                      clear
                      placeholder="Please enter the phone number"
                      value={state.value15}
                      onChange={(v: string) => handleInput('value15', v)}
                    >
                      <div
                        style={{
                          color: disabled.value ? '#FF4949' : '',
                          fontSize: '12px',
                          width: '90px'
                        }}
                        onClick={sendCode}
                      >
                        {showTipText()}
                      </div>
                    </Input>
                  </Form>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- E Body --> */}
        </div>
      )
    }
  }
})