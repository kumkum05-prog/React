import React from 'react'
import { ArrowUpRight } from 'lucide-react';

const LeftText = () => {
    return (
        <div className='h-full w-1/3  flex flex-col justify-between '>
            <div className='p-6'>
                <h3 className=' mb-7 text-6xl font-bold'>Prospective <br/> 
                <span className='text-gray-600'>Customer</span>
                <br/> Segmentation</h3>

                <p className='text-xl font-medium text-gray-600'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. A repellendus obcaecati voluptas earum repudiandae delectus deleniti id sed quidem sequi.</p>
            </div>
            <div>
                <ArrowUpRight size='70px' />
            </div>
        </div>
    )
}

export default LeftText
