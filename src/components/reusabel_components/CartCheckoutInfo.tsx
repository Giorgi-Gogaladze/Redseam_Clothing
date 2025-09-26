'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Button from './Button'
import { useAuth } from '@/context/AuthContext'
import { IClothing } from '../utils/interfaces/Iclothing'

interface ICartInfoProp {
    savedProducts:  IClothing[];
    text: string;
    link: boolean;
    func?: () => void;
}

const CartCheckoutInfo:React.FC<ICartInfoProp> = ({savedProducts, text, link, func}) => {
    const [total, setTotal] = useState<number>(0);
    const [subTotal, setSubTotal] = useState<number>(0)
    useEffect(() => {
        if(!savedProducts || savedProducts.length === 0) return;

        const itemsSubtotal = savedProducts.reduce((ac, prod) => {return ac + (prod.price ?? 0) * (prod.quantity ?? 0)}, 0);
        const total = itemsSubtotal + 5;
        setTotal(total);
        setSubTotal(itemsSubtotal);
    },[savedProducts]);

  return (
    <div className='inset-0 relative'>
        <div className='w-full h-[110px] absolute top-0 left-0  flex flex-col gap-4'>
            <div className='w-full h-[24px] flex items-center justify-between font-normal text-[16px] leading-[16px] text-[var(--dark-blue-2)]'>
                <h1>Items subtotal</h1>
                <h1>$ {subTotal}</h1>
            </div>
            <div className='w-full h-[24px] flex items-center justify-between font-normal text-[16px] leading-[16px] text-[var(--dark-blue-2)]'>
                <h1>Delivery</h1>
                <h1>$ 5</h1>
            </div>
            <div className='w-full h-[30px] flex items-center justify-between font-medium text-[20px] leading-[20px] text-[var(--dark-blue)]'>
                <h1>Total</h1>
                <h1>$ {total}</h1>
            </div>
        </div>
        <div className='w-full h-[59px] absolute top-[212px] left-0'>
            {link ? (
                <Link 
            href="/checkout">
                <Button text={text} width={460} font='medium' height={59} textSz={18} onClick={func}/>
            </Link>
            ) : (
            <div>
                <Button text={text} width={460} font='medium' height={59} textSz={18} onClick={func}/>
            </div>
            )}
        </div>
    </div>
  )
}

export default CartCheckoutInfo