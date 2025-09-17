import Image from 'next/image'
import React from 'react'
import UserImage from '@/../public/images/userImage.jpg'
import Button from '@/components/Button'

const page = () => {
  return (
    <div className='flex flex-col gap-12 absolute top-[152px] left-[173px] w-[554px]'>
     <h1 className='font-semibold text-[45px] leading-[63px] tracking-[0] flex justify-center w-[261px] h-[63px] items-center'>
      Registration
    </h1>
      <div className='w-[554px] h-[518px] flex flex-col gap-[46px]'>
        <div className='w-[272px] h-[100px] flex gap-[15px] items-center'>
          <div className='w-[100px] h-[100px] rounded-full overflow-hidden flex items-center justify-center'>
            <Image
              src={UserImage} 
              alt='user image'
              width={1000}
              height={1000}
              className='object-cover w-full h-full '/>
          </div>
          <div className=' bg-white w-[157px] h-[21px] flex gap-[15px] justify-center items-center  font-normal text-[15px] tracking-[0]  leading-[16px] text-[var(--dark-blue-2)]'>
             <h1 className='cursor-pointer'>Upload new</h1>
            <h1 className='cursor-pointer'>Remove</h1>
          </div>
        </div>

        <div className='w-[554px] h-[240px] bg-red-200'>
          sometning
        </div>

        <div className='w-[554px] h-[86px] flex flex-col justify-between items-center'>
          <Button width={554} text='Register' />
          <div className='w-[176px] h-[21px] font-normal leading-[20px] text-[14px] text-[var(--dark-blue-2)] flex gap-[8px] items-center'>
          <span> Already member?</span>
          <span className='font-semibold text-[14px] leading-[100%] text-[var(--orange-button)]'>Log in</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page