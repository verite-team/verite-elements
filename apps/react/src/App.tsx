import './App.css'

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
  VuiUserMenu,
  initialize,
} from 'stencil-react'

import React from 'react'

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

  return (
    <div className="container">
      <VuiButton onClick={() => console.log('clicked')}>
        <VuiI18n text="hello" params={{ time: Date.now().toString() }} />
      </VuiButton>
      <div className="fixed flex items-center gap-2 font-semibold top-4 left-4">
        <img src="/assets/react.svg" alt="React Logo" style={{ width: '32px' }} />
        React App Demo
      </div>

      <VuiThemeToggle className="fixed top-4 right-4"></VuiThemeToggle>
      <VuiUserMenu className="fixed top-4 right-16"></VuiUserMenu>

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
