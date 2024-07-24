import './App.css'

import { DateSelector, MyComponent, RocBadge, RocClock, TodoList, defineCustomElements } from 'stencil-react'

import React from 'react'

defineCustomElements()

function App() {
  const person = {
    first: 'Rob',
    last: 'Taylor',
  }

  return (
    <div>
      <div>You are here</div>
      <MyComponent first="Rob" last="Taylor" onClick={console.log} />
      <MyComponent {...person} />
      <RocBadge type='danger'>Hello</RocBadge>
      {/* <RocClock onTimeChange={e => console.log(e.detail)}></RocClock> */}
      <DateSelector onValueChange={e => console.log(e.detail)} />
      <TodoList id='todos' todos={["one", "two", "three"]} />
    </div>
  )
}

export default App
