'use client'
import React from 'react'
import { IClothing } from '../utils/interfaces/Iclothing';
import Image from 'next/image';

interface ClothingProps {
  data: IClothing[];
}

const Clothing: React.FC<ClothingProps> = ({ data }) => {
    if(data === undefined) return <div>no data</div>
  return (
    <div className='w-full h-auto grid grid-cols-4 gap-[24px] gap-y-[50px]'>
        {data.map((clothing, i) => (
            <div
            className='flex w-full h-[614px] cursor-pointer' 
            key={i}>
              <div className='flex flex-col gap-[12px]'>
                <div className='w-full h-[549px] overflow-hidden'>
                  <Image
                  src={clothing.cover_image}
                  alt='image'
                  width={1000}
                  height={1000}
                  className='object-center rounded-[10px]'
                  />
                </div>
                <div className='w-full h-[53px] flex flex-col gap-[2px]'>
                  <div className='flex items-center h-[27px]'>
                    <h1 className='text-[18px] font-medium leading-[18px] tracking-[0px] text-[var(--dark-blue)]'>{clothing.name}</h1>
                  </div>
                  <div className='flex items-center h-[24px]'>
                  <p className='text-[16px] font-medium leading-[16px] tracking-[0px] text-[var(--dark-blue)]'>$ {clothing.price}</p>
                  </div>
                </div>
              </div>
            </div>
        ))}
    </div>
  )
}

export default Clothing