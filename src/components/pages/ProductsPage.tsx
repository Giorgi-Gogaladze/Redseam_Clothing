'use client'
import React, { useState } from 'react'
import Input from '../reusabel_components/Input';
import Button from '../reusabel_components/Button';
import Clothing from './Clothing';


const ProductsPage = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [isFiltModalOpen, setIsFiltModalOpen] = useState<boolean>(false);
    const [sortBy, setSortBy] = useState<string>('');
    const [priceFrom, setPriceFrom] = useState<number | null>(null);
    const [priceTo, setPriceTo] = useState<number |  null>(null);
    const [page, setPage] = useState<number>(1);

    const sortOptions = [
      { value: '', label: 'Sort by' },
      { value: 'created_at', label: 'New products first' },
      { value: 'price', label: 'Price, low to High' },
      { value: '-price', label: 'Price, high to low' },
    ]
    const sortedBy = sortOptions.find(option => option.value === sortBy)?.label || 'Sort By';
    const handleSorting = (val: string) => {
        setSortBy(val);
        setIsDropdownOpen(false);
    }
    const handleSearch = () => {

    }

  return (
    <section className='mx-[100px] mt-[72px] relative'>
        <div className='flex flex-col gap-8 w-full'>
            <header className=' h-[63px] flex justify-between items-center'>
                <div className='font-semibold text-[42px] leding-[42px] tracking-[0px] text-[var(--dark-blue)]'>Products</div>
                <div className='h-[24px] flex justify-between items-center gap-[32px]'>
                    <div className='text-[12px] font-normal leading-[12px] tracking-[0px] text-[var(--dark-blue-2)]'>Showing 1–10 of 100 results</div>

                    <div className='text-[14px] text-[var(--grey-2)]'>|</div>

                    <div
                    onClick={() => setIsFiltModalOpen(!isFiltModalOpen)} 
                    className='relative w-[70px] h-full flex justify-between items-center cursor-pointer text-[16px] font-normal leading-[16px] tracking-[0px] text-[var(--dark-blue)]'>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 6.5L20.25 6.5M10.5 6.5C10.5 7.32843 9.82843 8 9 8C8.17157 8 7.5 7.32843 7.5 6.5M10.5 6.5C10.5 5.67157 9.82843 5 9 5C8.17157 5 7.5 5.67157 7.5 6.5M3.75 6.5H7.5M10.5 18.5H20.25M10.5 18.5C10.5 19.3284 9.82843 20 9 20C8.17157 20 7.5 19.3284 7.5 18.5M10.5 18.5C10.5 17.6716 9.82843 17 9 17C8.17157 17 7.5 17.6716 7.5 18.5M3.75 18.5L7.5 18.5M16.5 12.5L20.25 12.5M16.5 12.5C16.5 13.3284 15.8284 14 15 14C14.1716 14 13.5 13.3284 13.5 12.5M16.5 12.5C16.5 11.6716 15.8284 11 15 11C14.1716 11 13.5 11.6716 13.5 12.5M3.75 12.5H13.5" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p className='mt-[2px]'>Filter</p>
                        {isFiltModalOpen && (
                            <div
                            onClick={(e) => e.stopPropagation()} 
                            className='z-10 absolute top-[34px] flex flex-col gap-[20px] right-[-16px] w-[392px] h-[169px] bg-white border border-[var(--grey-2)] rounded-[8px] p-4'>
                                <div className='h-[24px] font-semibold text-[16px] text-[var(--dark-blue)] leading-[16px] tracking-[0px]'>Select price</div>
                                <div className='w-full h-[93px] flex flex-col gap-[10px] justify-between'>
                                    <div className='h-[42px] flex gap-[10px]'>
                                        <Input onChange={(e) => setPriceFrom(Number(e.target.value))} width={175}  placeholder='From *' type='number' />
                                        <Input onChange={(e) => setPriceTo(Number(e.target.value))} width={175} placeholder='To *' type='number' />
                                    </div>
                                    <div className='w-full flex justify-end'>
                                        <Button width={124} text='Apply' onClick={handleSearch} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* sortireba */}
                    <div className='max-w-[169px] flex items-center gap-1 text-[16px] font-normal leading-[16px] tracking-[0px] text-[var(--dark-blue)]'>
                        <div className='max-w-[169px]'>
                            <div 
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className='flex items-center gap-1 text-[16px] font-normal leading-[16px] tracking-[0px] text-[var(--dark-blue)] cursor-pointer' >
                                <span>{sortedBy}</span>
                                <svg className='w-4 h-4' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                            {isDropdownOpen && (
                                <div className='absolute top-[43px] flex flex-col justify-between py-4 right-[-5px] mt-2 bg-white border border-[var(--grey-2)] rounded-[8px]  z-10 h-[184px] w-[223px]'>
                                    {sortOptions.map(option => (
                                    <div 
                                        key={option.value}
                                        className='px-4 cursor-pointer'
                                        onClick={() => handleSorting(option.value)}>
                                        {option.label}
                                    </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    {/* sortireba end */}

                </div>
            </header>
            <main>
                <Clothing />
            </main>
        </div>
    </section>
  )
}

export default ProductsPage