import React from 'react'
import { MoveRight } from 'lucide-react';

const Rightcardcontent = (props) => {
  return (
    <div className="absolute p-5 flex flex-col justify-between top-0 left-0 h-full w-full">
        <h2 className='bg-white text-xl rounded-full h-12 w-12 flex justify-center items-center font-semibold '>
            {props.id+1}
        </h2>
        <div>
          <p className='text-shadow-3xs text-lg leading-normal text-white mb-14'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod labore corporis commodi reiciendis. Ipsa, earum?
          </p>
          <div className='flex justify-between'>
            <button className='bg-blue-500 rounded-full text-white font-medium px-6 py-3'>
                {props.tag}</button>
            <button className='bg-blue-600 rounded-full text-white font-medium px-3 py-3'><MoveRight /></button>
          </div>
        </div>
      </div>
  )
}

export default Rightcardcontent
