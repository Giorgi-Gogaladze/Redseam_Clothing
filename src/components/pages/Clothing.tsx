'use client'
import React from 'react'
import { IClothing } from '../utils/interfaces/Iclothing'

interface ClothingProps {
  data: IClothing[];
}

const Clothing: React.FC<ClothingProps> = ({ data }) => {
    if(data === undefined) return <div>no data</div>
  return (
    <div className='w-full h-auto grid grid-cols-4 gap-[24px]'>
        {data.map((clothing, i) => (
            <div
            className='flex w-full h-[614px] bg-red-400' 
            key={i}>{clothing.name}</div>
        ))}
    </div>
  )
}

export default Clothing