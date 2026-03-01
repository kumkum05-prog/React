import React from 'react'
import LeftText from './leftText'
import Image1container from './image1container'



const Center = (props) => {
  return (
    <div className='pb-10 pt-10 px-18 flex items-center gap-10 h-[90vh]'>
      <LeftText />
      <Image1container users={props.users}/>
    </div>
  )
}

export default Center
