import Image from 'next/image'
import React from 'react'
import Button from './Button'
import CartImage from '../../../public/images/cart.png'

interface IEmptyCart {
    setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleclick?: () => void;
    chekcout?: boolean;
}

const EmptyCart: React.FC<IEmptyCart> = ({setIsCartOpen, handleclick, chekcout}) => {
  return (
    <>
    <div className='flex justify-between h-[32px]'>
         {chekcout ? (<></>) : (
        <>
            <p className='font-medium text-[20px] leading-[20px] tracking-[0px] text-[var(--dark-blue)]'>Shopping Cart (0)</p>
            <div 
            onClick={() => setIsCartOpen(false)}
            className='size-8 cursor-pointer'>
            
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L9 7.58579L16.2929 0.292894C16.6834 -0.09763 17.3166 -0.09763 17.7071 0.292894C18.0976 0.683419 18.0976 1.31658 17.7071 1.70711L10.4142 9L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L9 10.4142L1.70711 17.7071C1.31658 18.0976 0.683418 18.0976 0.292893 17.7071C-0.097631 17.3166 -0.097631 16.6834 0.292893 16.2929L7.58579 9L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#10151F"/>
                </svg>
            
            </div>
        </>
        )}
    </div>
    <div>
    <div className={`${chekcout ? 'absolute top-[150px] left-[150px]  w-[170px] h-[135px] overflow-hidden' : 'absolute top-[222px] left-[185px] w-[170px] h-[135px] overflow-hidden'}`}>
        <Image
        src={CartImage}
        alt='cart'
        width={800}
        height={800}
        className='object-center' />
    </div>
    <div className={`${chekcout ? 'absolute top-[331px] left-[190px] w-[88px] h-[36px]' : 'absolute top-[381px] left-[226px] w-[88px] h-[36px]'}`}>
        <p className='text-[24px] font-semibold leading-[24px] text-[var(--dark-blue)]'>Ooops!</p>
    </div>
    <div className={`${chekcout ? 'absolute top-[371px] left-[90px] w-[290px] h-[36px]' : 'absolute top-[427px] left-[132px] w-[277px] h-[21px] text-center'}`}>
        <p className='text-[14px] font-normal leading-[14px] text-[var(--dark-blue-2)]'>You’ve got nothing in your cart just yet...</p>
    </div>
    <div className={`${chekcout ? 'absolute top-[440px] left-[120px] w-[88px] h-[36px]' : 'absolute top-[506px] left-[163px] w-[214px] h-[41px]'}`}>
        <Button text='Start shopping' width={214} font='normal' textSz={14} onClick={handleclick} />
    </div>
    </div>
</>
)
}

export default EmptyCart