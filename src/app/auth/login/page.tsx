'use client'
import Button from '@/components/reusabel_components/Button'
import Input from '@/components/reusabel_components/Input'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <section className='w-full h-full'>
      <div className='flex items-center justify-center mt-[241px]'>
        <div className='w-[554px] h-auto flex flex-col gap-[46px]'>

          <h1 className='font-semibold text-[42px] leading-[100%] tracking-[0] flex justify-start w-[261px] h-[63px] items-center'>
            Log in
          </h1>

          <div className='w-full flex flex-col gap-[24px]'>
            <div className='flex flex-col gap-1'>
              <Input  type='email' width={554} placeholder='Email *'  onChange={() => {}} />
            </div>
            <div className='flex flex-col gap-1'>
              <Input  type='password' width={554} placeholder='Password *'  onChange={() => {}} />
            </div>
          </div>

          <div className='w-[554px] h-[86px] flex flex-col justify-between items-center'>
          <Button width={554} text='Log in' />
          <div className='w-[176px] h-[21px] font-normal leading-[14px] text-[14px] text-[var(--dark-blue-2)] flex gap-[8px] items-center'>
            <span>Not a member?</span>
            <Link href={'/auth/registration'}>
            <span className='font-medium text-[14px] leading-[100%] tracking-[0px] text-[var(--orange-button)]'>
              Register
            </span>
            </Link>
          </div>
        </div>
        </div>
      </div>  
    </section>
  )
}

export default page