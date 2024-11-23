import './App.css'

import React from 'react'
import { VuiButton, defineCustomElements } from 'stencil-react'

defineCustomElements()

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
      <VuiButton onClick={() => console.log('clicked')}>Click me</VuiButton>
      <div className="fixed flex items-center gap-2 font-semibold top-4 left-4">
        <img src="/assets/react.svg" alt="React Logo" style={{ width: '32px' }} />
        React App Demo
      </div>

      {/* <VuiThemeToggle className="fixed top-4 right-4"></VuiThemeToggle>
      <VuiUserMenu className="fixed top-4 right-16"></VuiUserMenu> */}
    </div>
  )
}

export default App
