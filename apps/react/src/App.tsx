import './App.css'

import { DateSelector, MyComponent, RocBadge, RocClock, TodoList } from 'stencil-library/dist/frameworks/verite-react'

import React from 'react'
import { defineCustomElements } from 'stencil-library/dist/loader'

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
      <RocBadge type="danger">Hello</RocBadge>
      <RocClock onTimeChange={(e: any) => console.log(e.detail)}></RocClock>
      <DateSelector onValueChange={(e: any) => console.log(e.detail)} />
      <TodoList id="todos" todos={['one', 'two', 'three']} />
    </div>
  )
}

export default App
