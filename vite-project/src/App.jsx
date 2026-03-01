import React from 'react'
import Card from './components/card'
import Navbar from './components/navbar'

const App = () => {
  return (
    <>
      <div id='dad'>
        <h1 id='child1'> hello</h1>
        <h2 id='child2'> welcome</h2>
      </div>
      <div id='chacha'>
        {Card()}
      </div>
      <Card/>
      <Navbar/>
    </>
  )
}
export default App

