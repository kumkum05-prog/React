import React, { useState} from 'react'

const App = () => {

  const [num,setNum] = useState({user:"kumkum",age:20})

  const btnClicked =() =>{
    const newNum={...num};
    newNum.user='Aman'
    setNum(newNum)
  }

  const click =() =>{
    setNum(prev=>({...num,age:50}))
  }

  const mouseover =() =>{
    const newAge={...num}
    newAge.age=num.age+1
    setNum(newAge)
  }

  const [news,setNews] =useState([10,20,30])

  const mouseleave = ()=>{
    const newNews=[...news]
    newNews.push(99)
    setNews(newNews)
  }

  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <h2>{news}</h2>
      <button onClick={btnClicked} 
      onMouseOver={mouseover}>click</button>

      <button onClick={mouseleave}
      onMouseOver={click}>use me</button>
    </div>
  )
}

export default App
