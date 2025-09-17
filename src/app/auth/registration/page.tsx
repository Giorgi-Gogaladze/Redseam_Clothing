import Image from 'next/image'
import React from 'react'
import UserImage from '@/../public/images/userImage.jpg'

const page = () => {
  return (
    <div className='flex flex-col gap-12 absolute top-[152px] left-[173px] w-[554px]'>
     <h1 className='font-semibold text-[45px] leading-[63px] tracking-[0] flex justify-center w-[261px] h-[63px] items-center'>
      Registration
    </h1>
      <div className='w-[554px] h-[518px] bg-yellow-200'>
        <div className='w-[272px] h-[100px]'>
          <div className='w-[100px] h-[100px] rounded-full overflow-hidden flex items-center justify-center'>
            <Image
              src={UserImage} 
              alt='user image'
              width={1000}
              height={1000}
              className='object-cover w-full h-full '/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page