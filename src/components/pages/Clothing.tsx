'use client'
import React from 'react'

const Clothing = () => {
    const arr = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className='w-full h-auto grid grid-cols-4 gap-[24px]'>
        {arr.map((el,i) => (
            <div
            className='flex w-full h-[614px] bg-red-400' 
            key={i}>{el}</div>
        ))}
    </div>
  )
}

export default Clothing