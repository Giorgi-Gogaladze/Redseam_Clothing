import Link from 'next/link'
import React from 'react'
import Button from './Button'
import { useAuth } from '@/context/AuthContext'

const CartCheckoutInfo = () => {
    const {setIsCartOpen} = useAuth()
  return (
    <div className='inset-0 relative'>
        <div className='w-full h-[110px] absolute top-0 left-0  flex flex-col gap-4'>
            <div className='w-full h-[24px] flex items-center justify-between font-normal text-[16px] leading-[16px] text-[var(--dark-blue-2)]'>
                <h1>Items subtotal</h1>
                <h1>$ price</h1>
            </div>
            <div className='w-full h-[24px] flex items-center justify-between font-normal text-[16px] leading-[16px] text-[var(--dark-blue-2)]'>
                <h1>Delivery</h1>
                <h1>$ 5</h1>
            </div>
            <div className='w-full h-[30px] flex items-center justify-between font-medium text-[20px] leading-[20px] text-[var(--dark-blue)]'>
                <h1>Total</h1>
                <h1>$ price</h1>
            </div>
        </div>
        <div className='w-full h-[59px] absolute top-[212px] left-0'>
            <Link 
            href="/checkout"
            onClick={() => setIsCartOpen(false)}>
                <Button text='Go to checkout' width={460} font='medium' height={59} textSz={18} />
            </Link>
        </div>
    </div>
  )
}

export default CartCheckoutInfo