import React from 'react'

const App = () => {

  function btnClicked() {
    console.log("botton was clicked");
  }

  function mouseEnter() {
    console.log("mouse entered");
  }



  return (
    <div>
      <h1>Hello guys!</h1>
      <button onMouseEnter={mouseEnter} onClick={btnClicked}>click here</button>
      <button onClick={() => {
        console.log("button 2 was clicked");
      }}>click me!</button>

      <input onChange={
          (elem) => {
            console.log("user is typing...")
            console.log(elem);
            console.log(elem.target.value);
          }
        } type="text" placeholder="enter your name" />

        <div 
        onMouseMove={(elem) =>{
          console.log('nacho');
          console.log(elem.clientX);
        }} 
        className='box'>
          hi
        </div>


        <div onWheel={(elem) =>{
          if(elem.deltaY>0){
            console.log("scrolling downwards at speed"+elem.deltaY);
          }else{
            console.log("scrolling upwards at speed"+elem.deltaY);
          }
        }}>
          <div className="page1">s</div>
          <div className="page2">dd</div>
          <div className="page3">dg</div>
        </div>
    </div>
  )
}

export default App
