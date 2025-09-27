'use client'
import Image from 'next/image'
import React from 'react'
import clothingPlaceholder from '../../../public/images/imagePlaceholder.png'
import { IClothing } from '../utils/interfaces/Iclothing'
import { FiMinus, FiPlus } from 'react-icons/fi';
import Cookies from 'js-cookie'
import { patchProduct } from '../utils/patchProduct'


interface ICardProductsProps {
    savedProducts: IClothing[];
    onRemove: (prod:IClothing) => void;
    setSavedProducts: React.Dispatch<React.SetStateAction<IClothing[] | null>>
}


const CardProducts:React.FC<ICardProductsProps> = ({savedProducts, onRemove, setSavedProducts}) => {

    const handleQuantityChange = async (prod:IClothing, newQuantity: number )=> {
        const token = Cookies.get('token');
        if(!token){
            return
        }
        try {
            await patchProduct(prod.id,token, newQuantity, prod.color ?? '', prod.size ?? '');
            setSavedProducts(prev =>
            prev ? prev.map(p => (p.id === prod.id && p.color === prod.color && p.size === prod.size) ? { ...p, quantity: newQuantity } : p ) : prev );
        } catch (error) {
          console.log('error happaned updating quantity', error)  
        }
    }



  return (
    <div className='inset-0 flex flex-col gap-[36px]'>
        {savedProducts.map((prod) => {
            const selectedImg = prod.images?.[prod.available_colors?.indexOf(prod.color || '') ?? 0] || prod.cover_image;
            return (
            <div
            key={`${prod.id}-${prod.color}-${prod.size}`}
            className=' h-[134px] flex gap-[16px] items-center'>
                <div className='w-[100px] h-full border border-[var(--grey-2)] rounded-[10px] overflow-hidden'>
                    <Image
                    src={selectedImg || clothingPlaceholder}
                    alt='image'
                    width={1200}
                    height={1200}
                    className='object-cover w-full h-full'
                    />
                </div>
                <div className='h-[117px] w-[343px] flex flex-col justify-between'>
                    <div className='flex justify-between'>
                        <div className='w-[285px] h-[78px] flex flex-col gap-2 justify-between'>
                            <div className='h-[21px] flex items-center'>
                                <h1 className='font-medium text-[14px] leading-[14px] tracking-[0px] text-[var(--dark-blue)]'>{prod.name}</h1>
                            </div>
                            <h1 className='font-normal text-[12px] leading-[12px] tracking-[0px] text-[var(--dark-blue-2)]'>{prod.color}</h1>
                            <p className='font-normal text-[12px] leading-[12px] tracking-[0px] text-[var(--dark-blue-2)]'>{prod.size}</p>
                        </div>
                        <div className=' h-[26px] font-medium text-[15px] leading-[15px] tracking-[0px] text-[var(--dark-blue)] whitespace-nowrap'>$ {prod.price}</div>
                    </div>
                    <div className='w-full flex justify-between items-center h-[26px]'>
                        <div className='w-[70px] h-[26px] border border-[var(--grey-2)] rounded-full flex justify-around items-center'>
                            <div 
                            onClick={() =>prod.quantity && prod.quantity > 1 && handleQuantityChange(prod, prod.quantity - 1) }
                            className={`font-normal text-[12px] leading-[15px] tracking-[0px] text-[var(--dark-blue-2)] cursor-pointer`}><FiMinus /></div>
                            <div className={`font-normal text-[12px] leading-[15px] tracking-[0px] text-[var(--dark-blue-2)] `}>{prod.quantity}</div>
                            <div
                            onClick={() =>prod.quantity && handleQuantityChange(prod, prod.quantity + 1)} 
                            className='font-normal text-[12px] leading-[15px] tracking-[0px] text-[var(--dark-blue-2)] cursor-pointer'><FiPlus /></div>
                        </div>
                        <div>
                            <h1 
                            onClick={() => onRemove(prod)}
                            className='font-normal text-[12px] leading-[12px] tracking-[0px] text-[var(--dark-blue-2)] cursor-pointer'>Remove</h1>
                        </div>
                    </div>
                </div>
            </div>
            )
})}
        </div>
  )
}

export default CardProducts