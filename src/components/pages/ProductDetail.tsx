'use client'
import React from 'react'
import { IClothing } from '../utils/interfaces/Iclothing'
import Image from 'next/image'
import PlaceholderImg from '../../../public/images/imagePlaceholder.png'
import brandPlaceholder from '../../../public/images/brandPlaceholder.jpg'
import Button from '../reusabel_components/Button'

interface DetailPageProp {
    product: IClothing
}
const ProductDetail:React.FC<DetailPageProp> = ({product}) => {

  return (
    <section className='mx-[100px] mt-[30px] h-auto flex flex-col gap-[50px] mb-[110px]'>
        <div className='text-[14px] font-light leading-[14px] tracking-[0px] text-black'>Listing / Product</div>
        <main className='h-[937px] w-full flex gap-[168px]'>
            <div className='flex gap-[24px]'>
                <div className='w-[121px] h-full flex flex-col gap-[9px]'>
                    {product.images?.map((imgSrc, i) => (
                        <div 
                        key={imgSrc}
                        className='w-full h-[161px]'>
                        <Image
                        src={imgSrc ?? PlaceholderImg}
                        alt='product image'
                        width={1500}
                        height={1500}
                        className='object-center cursor-pointer'
                         />   
                        </div>
                    ))}
                </div>
                <figure className='w-[703px] h-full overflow-hidden'>
                    <Image
                    src={product.cover_image ?? PlaceholderImg}
                    alt='product image'
                    width={1500}
                    height={1500}
                    className='object-center'
                     />
                </figure>
            </div>

            <div className='w-full flex flex-col gap-[56px]'>

                    <div className='w-full h-[117px] flex flex-col gap-[21px]'>
                        <div className='h-[48px] flex items-center'>
                            <h1 className='font-semibold text-[32px] leading-[32px] tracking-[0px] text-[var(--dark-blue)]'>{product.name}</h1>
                        </div>
                        <div className='h-[48px] flex items-center'>
                            <h1 className='font-semibold text-[32px] leading-[32px] tracking-[0px] text-[var(--dark-blue)]'>$ {product.price}</h1>
                        </div>
                    </div>

                    <div className='w-[382px] h-[348px] flex flex-col gap-[48px]'>
                        <div className='w-[150px] h-[88px] flex flex-col gap-[16px]'>
                            <div className='flex items-center h-[24px]'>
                                <h1 className='text-[16px] font-normal leading-[16px] tracking-[0px] text-[var(--dark-blue)]'>Color: {product.available_colors?.[0] ?? 'no color'}</h1>
                            </div>
                            <div className='h-[48px] w-full flex gap-[13px] justify-start'>
                                {product.available_colors?.map((col,i) => (
                                    <div 
                                    key={i} 
                                    className='w-[38px] h-[38px] rounded-full border border-[var(--grey)] cursor-pointer'
                                    style={{backgroundColor: col.toLocaleLowerCase()}}></div>
                                ))}
                            </div>
                        </div>
                        <div className='w-full h-[82px] flex flex-col gap-[16px]'>
                            <div className='flex items-center h-[24px]'>
                                <h1 className='text-[16px] font-normal leading-[16px] tracking-[0px] text-[var(--dark-blue)]'>Size: {product.available_sizes?.[0] ?? 'no size'}</h1>
                            </div>
                            <div className='w-full h-[42px] flex gap-[8px] justify-start'>
                                {product.available_sizes?.map((size, i) => (
                                    <div 
                                    key={i}
                                    className='h-full w-[70px] rounded-[10px] border border-[var(--grey-2)] flex items-center justify-center cursor-pointer'>
                                        <p className='text-[16px] font-normal leading-[16px] tracking-[0px] text-[var(--dark-blue)]'>{size}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='w-[70px] h-[82px] flex flex-col gap-4'>
                            <div className='h-[24px]'>
                                <h1 className='text-[16px] font-normal leading-[16px] tracking-[0px] text-[var(--dark-blue)]'>Quantity</h1>
                            </div>
                            <div className='rounded-[10px] h-[42px] w-[70px] border border-[var(--grey-2)] cursor-pointer'>
                                helo
                            </div>
                        </div>
                    </div>

                    <div>
                        <Button width={704} text='Add to cart' icon={true} textSz={18} font='medium'/>
                    </div>

                    <div className='w-full h-[1px] bg-[var(--grey-2)]'/>

                    <div className='w-full h-[159px] flex flex-col gap-[7px]'>
                        <div className='h-[61px] w-full flex items-center justify-between'>
                            <p className='text-[20px] font-medium leading-[20px] tracking-[0px] text-[var(--dark-blue)]'>Details</p>
                            <div className='h-full w-[105px] overflow-hidden'>
                                <Image
                                src={product.brand?.image ?? brandPlaceholder}
                                alt='brandImage'
                                width={500}
                                height={500}
                                className='object-center object-contain' />
                            </div>
                        </div>
                        <div className='h-[91px] w-full felx flex-col gap-[19px]'>
                            <div className='w-full h-[24px] flex items-center justify-start'>
                                <h1 className='text-[16px] font-normal leading-[16px] tracking-[0px] text-[var(--dark-blue-2)]'>Brand: {product.brand?.name}</h1>
                            </div>
                            <div className='w-full h-[48px] flex items-center justify-start'>
                                <h1 className='text-[16px] font-normal leading-[16px] tracking-[0px] text-[var(--dark-blue-2)]'>{product.description}</h1>
                            </div>
                        </div>
                    </div>
            </div>
        </main>
    </section>
  )
}

export default ProductDetail