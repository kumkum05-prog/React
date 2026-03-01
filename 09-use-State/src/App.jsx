import React, { useState } from 'react'

const App = () => {

  const [a, setA] = useState(20)
  const [username, setUsername] = useState('kumkum')
  const [users,setUsers] =useState([10,20,30])
  function changeName(){
    setA(30);
    setUsername('aman')
  }

  return (
    <div>
      app
      <h1>The value of a is {a}!</h1>
      <h1>The name of user is {username}!</h1>
      <button onClick={changeName}>click me</button>
    </div>

  )
}

//export default App


const Count = () => {

  const [count,setCount] =useState(0)
  function increment(){
    setCount(count+1)
  }
  function decrement(){
    setCount(count-1)
  }
  function crement(){
    setCount(count+5)
  }
  return (
    <div>
      <h1>Num is {count}</h1>
      <button onClick={increment}>increment!</button>
      <button onClick={decrement}>decrement!</button>
      <button onClick={crement}>Jump by 5</button>
    </div>
  )
}

//export default Count




const Mode = () => {
  const [mode,setMode]=useState('light')

  function changeBg(){
    if(mode=="light"){
      setMode('Dark')
      document.body.style.backgroundColor='black'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <div>
      <button onClick={changeBg}> {mode} </button>
    </div>
  )
}

export default Mode
