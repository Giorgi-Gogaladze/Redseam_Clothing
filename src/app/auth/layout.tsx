import Image from 'next/image'
import React from 'react'
import mainImage from '@/../../public/images/mainImage.png'

const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <div className='w-full flex'>
        <div className='w-[948px] h-[1000px] overflow-hidden'>
            <Image
            src={mainImage}
            alt='Main image'
            width={2000}
            height={2000}
            className='object-cover' />
        </div>
        <div className='flex-1 h-[1000px] relative'>
            {children}
        </div>
    </div>
  )
}

export default layout