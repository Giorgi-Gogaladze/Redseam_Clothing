'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import astrounot from '../../public/images/astro-removebg-preview.png'

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        const timer = setTimeout(() => {
           router.push('/products') 
        }, 2000);
        return () => clearTimeout(timer)
    },[router])
  return (
    <section className='w-[1920px] h-[1080px] bg-black flex'>
        <div className='relative w-full h-ull'>
            <div className='absolute bottom-0 left-0 w-[800px] h-auto overflow-hidden'>
                <Image
                src={astrounot}
                alt='notfoundiamge'
                width={1500}
                height={1500}
                className='object-cover w-full h-full' />
            </div>
        </div>
        <div className='w-full h-full flex justify-start items-center p-[300px]'>
            <div className='flex flex-col gap-[30px]'>
                <h1 className='text-white font-bold leaidng-[200px] text-[200px] trackin-[10px]'>404</h1>
                <p className='text-white text-[40px] leading-[40px] tracking-wide font-mono'>page not found</p>
            </div>
        </div>
    </section>
  )
}

export default NotFound