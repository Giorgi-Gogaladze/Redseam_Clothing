'use client'
import React from 'react'
import Button from '../reusabel_components/Button'
import { useRouter } from 'next/navigation'

interface ISuccPgProps {
    setSuccModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SuccessPage:React.FC<ISuccPgProps> = ({setSuccModal}) => {
    const router = useRouter();
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-start justify-center z-50 py-[30px]">
        <div className="bg-white w-[875px] h-[590px] relative">
            <div 
            onClick={() => setSuccModal(false)}
            className='absolute top-[40px] right-[26px] size-[40px] cursor-pointer'>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.56066 0.43934C1.97487 -0.146447 1.02513 -0.146447 0.43934 0.43934C-0.146447 1.02513 -0.146447 1.97487 0.43934 2.56066L7.87868 10L0.43934 17.4393C-0.146447 18.0251 -0.146447 18.9749 0.43934 19.5607C1.02513 20.1464 1.97487 20.1464 2.56066 19.5607L10 12.1213L17.4393 19.5607C18.0251 20.1464 18.9749 20.1464 19.5607 19.5607C20.1464 18.9749 20.1464 18.0251 19.5607 17.4393L12.1213 10L19.5607 2.56066C20.1464 1.97487 20.1464 1.02513 19.5607 0.43934C18.9749 -0.146447 18.0251 -0.146447 17.4393 0.43934L10 7.87868L2.56066 0.43934Z" fill="#3E424A"/>
            </svg>
            </div>
            <div className='absolute top-[114px] left-[322px] w-[233px] h-[216px] flex flex-col gap-[40px] items-center'>
            <div className='flex justify-center'>
                <svg width="77" height="76" viewBox="0 0 77 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38.5 76C59.4868 76 76.5 58.9868 76.5 38C76.5 17.0132 59.4868 0 38.5 0C17.5132 0 0.5 17.0132 0.5 38C0.5 58.9868 17.5132 76 38.5 76Z" fill="#F8F6F7"/>
                <path d="M33.3129 53C32.7414 53 32.2413 52.7775 31.8841 52.3641L20.8761 42.6813C20.2689 41.9819 20.4118 40.9963 21.1976 40.4558C21.9834 39.9154 23.0907 40.0426 23.6979 40.742L33.2414 48.7398L53.2796 24.641C53.8511 23.9415 54.994 23.7826 55.7799 24.3231C56.5657 24.8317 56.7443 25.8491 56.137 26.5485L34.7059 52.3324C34.4201 52.7457 33.8844 53 33.3129 53Z" fill="#318A1D"/>
                </svg>
            </div>

            <div className='w-full h-[100px] flex flex-col items-center gap-4'>
                <div className='w-full h-[63px] flex items-center justify-center'>
                <h1 className='text-[42px] leading-[42px] font-semibold tracking-[0px] text-[var(--dark-blue)]'>Congrats!</h1>
                </div>
                <div className='flex items-center w-full h-[21px] justify-center'>
                <p className='text-[14px] leading-[14pxpx] font-normal tracking-[0px] text-[var(--dark-blue-2)]'>Your order is placed successfully!</p>
                </div>
            </div>
            </div>
            <div className='absolute top-[404px] left-[331px] w-[214px] h-[41px]'>
            <Button text='Continue Shopping' width={214} onClick={() =>router.replace('/products') }/>
            </div>
        </div>
    </div>
)
}

export default SuccessPage