import React from 'react'
import Card from './Card'

const Image1container = (props) => {
  return (
    <div id='right' className=' h-full w-2/3 flex gap-10 p-6 overflow-x-auto'>
      {props.users.map(function(elem,idx){
        return <Card key={idx} id={idx} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default Image1container
