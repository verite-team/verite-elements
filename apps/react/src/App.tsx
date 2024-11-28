import './App.css'

import React, { useRef, useState } from 'react'
import {
  VeriteConnector,
  VuiAuthCard,
  VuiAuthForm,
  VuiButton,
  VuiDivider,
  VuiFlex,
  VuiI18n,
  VuiLogo,
  VuiThemeToggle,
  VuiToast,
  VuiUserMenu,
  initialize,
} from 'stencil-react'

// defineCustomElements()
initialize({
  i18n: {
    translationsPath: '/locales/{locale}.json',
    translations: {
      hello: 'Hello, world! :: {time}',
    },
  },
})

// const i18nStore = vui.getI18nStore()

// console.log(i18nStore.t('hello'))
function App() {
  const toastRef = useRef<HTMLVuiToastElement>(null)

  // useEffect(() => {
  //   console.log('init--->')
  //   init({
  //     i18n: {
  //       locale: 'sp',
  //       translations: {
  //         hello: 'Hello, world!',
  //       },
  //     },
  //   }).then(() => {
  //     console.log(getI18nStore().t('hello'))
  //   })
  // }, [])

  const [counter, setCounter] = useState(1)

  function showToast() {
    // const toast = document.querySelector('VuiToast')
    toastRef.current?.show({
      title: 'Hello, world! lorem ipsum dolor sit amet lorem ipsum dolor sit amet ::' + counter,
      type: 'success',
    })
    setCounter(counter + 1)
    // const { animate, scroll } = Motion
    // const box = document.querySelector('.box')
    // animate(box, { translateZ: -100, rotate: 90 }, { duration: 0.2, type: 'spring', stiffness: 300 }).then(evt => {
    //   animate(
    //     '.box',
    //     {
    //       zoom: 1,
    //       rotateX: 360,
    //       rotateY: 360,
    //       translateZ: 100,
    //     },
    //     {
    //       duration: 0.5,
    //       easing: 'ease-out',
    //     }
    //   )
    // })
  }

  return (
    <div className="container">
      <VuiButton onClick={showToast}>
        <VuiI18n text="hello" params={{ time: Date.now().toString() }} />
      </VuiButton>
      <div className="fixed flex items-center gap-2 font-semibold top-4 left-4">
        <img src="/assets/react.svg" alt="React Logo" style={{ width: '32px' }} />
        React App Demo
      </div>

      <VuiThemeToggle className="fixed top-4 right-4"></VuiThemeToggle>
      <VuiUserMenu className="fixed top-4 right-16"></VuiUserMenu>
      <VuiToast ref={toastRef} position="top-center" theme="inverted"></VuiToast>

      <VuiFlex direction="row" gap={8} width="full">
        <VeriteConnector className="w-full max-w-[400px]">
          <VuiAuthCard
            elevation="lg"
            heading="$signin.default.title|product:Acme Co"
            description="$signin.default.description"
            prompt="$signin.default.prompt"
            action="$signin.default.action"
          >
            <div slot="providers">
              <VuiFlex direction="column" gap={2} justify="start" items="stretch" width="full">
                <VuiButton className="google-button" variant="outline" style={{ width: '100%' }}>
                  <VuiFlex items="center" gap={2}>
                    <VuiLogo name="apple" size={20}></VuiLogo>
                    <VuiI18n text="signup.with" params={{ provider: 'Apple' }}></VuiI18n>
                  </VuiFlex>
                </VuiButton>

                <VuiButton className="google-button" variant="outline" style={{ width: '100%' }}>
                  <VuiFlex items="center" gap={2}>
                    <VuiLogo name="google" size={20}></VuiLogo>
                    <VuiI18n text="signup.with" params={{ provider: 'Google' }}></VuiI18n>
                  </VuiFlex>
                </VuiButton>
              </VuiFlex>
              <VuiDivider orientation="horizontal" style={{ margin: '16px 0' }}>
                <VuiI18n text="signup.option"></VuiI18n>
              </VuiDivider>
            </div>

            <VuiAuthForm
              action="signin"
              elements='["email", "password", "forgotPassword"]'
              submit-label="$signin.default.submit"
            ></VuiAuthForm>
          </VuiAuthCard>
        </VeriteConnector>

        <VeriteConnector className="w-full max-w-[400px]">
          <VuiAuthCard
            elevation="lg"
            heading="$signup.default.title|product:Acme Co"
            description="$signup.default.description"
            prompt="$signup.default.prompt"
            action="$signup.default.action"
          >
            <div slot="providers">
              <VuiFlex direction="column" gap={2} justify="start" items="stretch" width="full">
                <VuiButton className="google-button" variant="outline">
                  <VuiFlex items="center" gap={2}>
                    <VuiLogo name="apple" size={20}></VuiLogo>
                    <VuiI18n text="signup.with" params={{ provider: 'Apple' }}></VuiI18n>
                  </VuiFlex>
                </VuiButton>

                <VuiButton className="google-button" variant="outline">
                  <VuiFlex items="center" gap={2}>
                    <VuiLogo name="google" size={20}></VuiLogo>
                    <VuiI18n text="signup.with" params={{ provider: 'Google' }}></VuiI18n>
                  </VuiFlex>
                </VuiButton>
              </VuiFlex>
              <VuiDivider orientation="horizontal" style={{ margin: '16px 0' }}>
                <VuiI18n text="signup.option"></VuiI18n>
              </VuiDivider>
            </div>
            <VuiAuthForm
              action="signup"
              elements='["name", "email", "password"]'
              submit-label="$signup.default.submit"
            ></VuiAuthForm>
          </VuiAuthCard>
        </VeriteConnector>
      </VuiFlex>
    </div>
  )
}

export default App
