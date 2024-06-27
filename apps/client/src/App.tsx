import './App.css'

import { MyComponent, RocBadge, RocClock, defineCustomElements } from 'stencil-react'

import React from 'react'

defineCustomElements()

function App() {
  const person = {
    first: 'Rob',
    last: 'Taylor',
  }

  return (
    <>
      <div>You are here</div>
      <MyComponent first="Rob" last="Taylor" onClick={console.log} />
      <MyComponent {...person} />
      <RocBadge type='danger'>Hello</RocBadge>
      <RocClock onTimeChange={e => console.log(e.detail)}></RocClock>
    </>
  )
}

export default App
