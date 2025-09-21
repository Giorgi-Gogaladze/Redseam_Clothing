'use client'
import React, { useState } from 'react'
import { IClothing } from '../utils/interfaces/Iclothing'
import Image from 'next/image'
import PlaceholderImg from '../../../public/images/imagePlaceholder.png'
import brandPlaceholder from '../../../public/images/brandPlaceholder.jpg'
import Button from '../reusabel_components/Button'

interface DetailPageProp {
    product: IClothing
}
const ProductDetail:React.FC<DetailPageProp> = ({product}) => {
    const [selectedSize, setSelectedSize] = useState<string>();
    const [quantity, setQuantity] = useState<number>(1);
    const [selectedImgCol, setSelectedImgCol] = useState<number >(0);
    const [isQuantModalOpen, setIsQuantModalOpen] = useState<boolean>(false);

    const convertCol = (colorName: string) => {
        return colorName.replace(/\s+/g, "-")
    }
    const handleQuantchoose = (num: number)=> {
        setQuantity(num);
        setIsQuantModalOpen(false);
    }
    const QunatArr = [1,2,3,4,5,6,7,8,9,10]

  return (
    <section className='mx-[100px] mt-[30px] h-auto flex flex-col gap-[50px] mb-[110px]'>
        <div className='text-[14px] font-light leading-[14px] tracking-[0px] text-black'>Listing / Product</div>
        <main className='h-[937px] w-full flex gap-[168px]'>
            <div className='flex gap-[24px]'>
                <div className='w-[121px] h-full flex flex-col gap-[9px]'>
                    {product.images?.map((imgSrc, i) => (
                        <div 
                        key={imgSrc}
                        className='w-full h-[161px]'
                        onClick={() => setSelectedImgCol(i)}>
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
                    src={ selectedImgCol === undefined ? product.cover_image ?? PlaceholderImg : product.images?.[selectedImgCol] ?? PlaceholderImg }
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
                        <div className=' h-[88px] flex flex-col gap-[16px]'>
                            <div className='flex items-center h-[24px]'>
                                <h1 className='text-[16px] font-normal leading-[16px] tracking-[0px] text-[var(--dark-blue)]'>Color: {product.available_colors?.[selectedImgCol] ?? 'no color'}</h1>
                            </div>
                            <div className='h-[48px] w-full flex gap-[13px] justify-start'>
                                {product.available_colors?.map((col,i) => (
                                   <div
                                    key={i} 
                                    className={` rounded-full w-[48px] h-[48px] flex items-center justify-center bg-transparent ${ selectedImgCol === i ? 'border border-[var(--grey-2)]' : ''}`}>
                                        <div 
                                        onClick={() => setSelectedImgCol(i)}
                                        className='w-[38px] h-[38px] rounded-full cursor-pointer border border-[var(--grey)]'
                                        style={{background: `var(--${convertCol(col)})`}}></div>
                                    </div> 
                                ))}
                            </div>
                        </div>
                        <div className='w-full h-[82px] flex flex-col gap-[16px]'>
                            <div className='flex items-center h-[24px]'>
                                <h1 className='text-[16px] font-normal leading-[16px] tracking-[0px] text-[var(--dark-blue)]'>Size: {selectedSize ?? '+'}</h1>
                            </div>
                            <div className='w-full h-[42px] flex gap-[8px] justify-start'>
                                {product.available_sizes?.map((size, i) => (
                                    <div 
                                    key={i}
                                    onClick={() => setSelectedSize(size)}
                                    className={`h-full w-[70px] rounded-[10px] flex items-center justify-center cursor-pointer 
                                    ${selectedSize === size ? 'border border-[var(--dark-blue)] bg-[var(--grey)]' :'border border-[var(--grey-2)]'} `}>
                                        <p className='text-[16px] font-normal leading-[16px] tracking-[0px] text-[var(--dark-blue)]'>{size}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='w-[70px] h-[82px] flex flex-col gap-4'>
                            <div className='h-[24px]'>
                                <h1 className='text-[16px] font-normal leading-[16px] tracking-[0px] text-[var(--dark-blue)]'>Quantity</h1>
                            </div>
                            <div 
                            onClick={() => setIsQuantModalOpen(!isQuantModalOpen)}
                            className='relative rounded-[10px] h-[42px] w-[70px] border border-[var(--grey-2)] cursor-pointer px-[14px] py-[9px] flex gap-[10px] items-center justify-center'>
                                <p className='font-normal text-[16px] text-[var(--dark-blue)] leading-[16px] tracking-[0px]'>{quantity}</p>
                                <div>
                                    {isQuantModalOpen ? (
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.78033 5.78033C9.48744 6.07322 9.01256 6.07322 8.71967 5.78033L5 2.06066L1.28033 5.78033C0.987437 6.07322 0.512563 6.07322 0.21967 5.78033C-0.0732233 5.48744 -0.0732233 5.01256 0.21967 4.71967L4.46967 0.46967C4.61032 0.329018 4.80109 0.25 5 0.25C5.19891 0.25 5.38968 0.329018 5.53033 0.46967L9.78033 4.71967C10.0732 5.01256 10.0732 5.48744 9.78033 5.78033Z" fill="#10151F"/>
                                        </svg>
                                    ) : (
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.21967 0.21967C0.512563 -0.0732233 0.987437 -0.0732233 1.28033 0.21967L5 3.93934L8.71967 0.219671C9.01256 -0.0732226 9.48744 -0.0732225 9.78033 0.219671C10.0732 0.512564 10.0732 0.987438 9.78033 1.28033L5.53033 5.53033C5.38968 5.67098 5.19891 5.75 5 5.75C4.80109 5.75 4.61032 5.67098 4.46967 5.53033L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z" fill="#10151F"/>
                                        </svg>
                                    )}
                                </div>
                                {isQuantModalOpen && (
                                    <div className='absolute top-[43px] left-0 w-[70px] h-[100px] border border-[var(--grey-2)] rounded-[10px] bg-white z-0 flex flex-col px-4 py-[9px] gap-[10px] overflow-y-scroll'>
                                    {QunatArr.map((num, i) => (
                                        <div 
                                        key={i} 
                                        onClick={() => handleQuantchoose(num)}
                                        className='font-normal text-[16px] text-[var(--dark-blue)] leading-[16px] tracking-[0px] z-10'>{num}</div>
                                    ))}
                                </div>
                                )}
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
                                <h1 className='text-[16px] font-normal leading-[19px] tracking-[0px] text-[var(--dark-blue-2)]'>{product.description}</h1>
                            </div>
                        </div>
                    </div>
            </div>
        </main>
    </section>
  )
}

export default ProductDetail