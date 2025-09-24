'use client'
import { useAuth } from '@/context/AuthContext'
import Image from 'next/image';
import React, { useEffect } from 'react'
import CartImage from '../../public/images/cart.png'
import Button from './reusabel_components/Button';
import CardProducts from './reusabel_components/CardProducts';
import CartCheckoutInfo from './reusabel_components/CartCheckoutInfo';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';

const CartModal = () => {
    const { setIsCartOpen} = useAuth();
    const pathname = usePathname();
    const route = useRouter();
    const {savedProducts, setSavedProducts, isLoading, fetchCart, handleProdRemove } = useCart();

    const handleRedirect = ()=> {
        setIsCartOpen(false);
        if(pathname === '/products'){
            return
        }else{
        route.push('/products');
        }
    }
    const productCount = savedProducts?.length;

  return (
    <div className='w-[1920px] h-[1080px] fixed top-0 left-0'>
        <div 
        onClick={() => setIsCartOpen(false)}
        className='relative top-0 left-0 w-screen h-screen dark-blue-blur'>
            <aside 
            onClick={(e) => e.stopPropagation()}
            className='absolute top-0 right-0 h-[1080px] w-[540px] bg-[var(--grey)] border border-[var(--grey-2)] '>
                {savedProducts && savedProducts.length > 0 ? 
                (
                <section className='inset-0 bg-transparent px-[40px] py-[41px]'>
                    <div className='flex justify-between h-[32px]'>
                        <p className='font-medium text-[20px] leading-[20px] tracking-[0px] text-[var(--dark-blue)]'>Shopping Cart ({productCount})</p>
                        <div 
                        onClick={() => setIsCartOpen(false)}
                        className='size-8 cursor-pointer'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L9 7.58579L16.2929 0.292894C16.6834 -0.09763 17.3166 -0.09763 17.7071 0.292894C18.0976 0.683419 18.0976 1.31658 17.7071 1.70711L10.4142 9L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L9 10.4142L1.70711 17.7071C1.31658 18.0976 0.683418 18.0976 0.292893 17.7071C-0.097631 17.3166 -0.097631 16.6834 0.292893 16.2929L7.58579 9L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#10151F"/>
                            </svg>
                        </div>
                    </div>

                    <main className='w-[460px] absolute top-[134px] left-[40px]'>
                        <CardProducts setSavedProducts={setSavedProducts} savedProducts={savedProducts} onRemove={handleProdRemove} />
                    </main>

                    <div className='absolute bottom-[41px] left-[40px] w-[460px] h-[271px]'>
                        <CartCheckoutInfo savedProducts={savedProducts} text='Go to checkout' link={true}/>
                    </div>
                </section>
                ) : (
                <div className='relative inset-0 bg-transparent px-[40px] py-[41px]'>
                    {isLoading ? 
                    (
                        <div className='inset-0 flex items-center justify-center text-6xl font-medium text-[var(--dark-blue)]'>Loading...</div>
                    ) : (
                    <>
                    <div className='flex justify-between h-[32px]'>
                        <p className='font-medium text-[20px] leading-[20px] tracking-[0px] text-[var(--dark-blue)]'>Shopping Cart (0)</p>
                        <div 
                        onClick={() => setIsCartOpen(false)}
                        className='size-8 cursor-pointer'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L9 7.58579L16.2929 0.292894C16.6834 -0.09763 17.3166 -0.09763 17.7071 0.292894C18.0976 0.683419 18.0976 1.31658 17.7071 1.70711L10.4142 9L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L9 10.4142L1.70711 17.7071C1.31658 18.0976 0.683418 18.0976 0.292893 17.7071C-0.097631 17.3166 -0.097631 16.6834 0.292893 16.2929L7.58579 9L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#10151F"/>
                            </svg>
                        </div>
                    </div>
                    <div className='absolute top-[222px] left-[185px] w-[170px] h-[135px] overflow-hidden'>
                        <Image
                        src={CartImage}
                        alt='cart'
                        width={800}
                        height={800}
                        className='object-center' />
                    </div>
                    <div className='absolute top-[381px] left-[226px] w-[88px] h-[36px]'>
                        <p className='text-[24px] font-semibold leading-[24px] text-[var(--dark-blue)]'>Ooops!</p>
                    </div>
                    <div className='absolute top-[427px] left-[132px] w-[277px] h-[21px] text-center'>
                        <p className='text-[14px] font-normal leading-[14px] text-[var(--dark-blue-2)]'>You’ve got nothing in your cart just yet...</p>
                    </div>
                    <div className='absolute top-[506px] left-[163px] w-[214px] h-[41px]'>
                        <Button text='Start shopping' width={214} font='normal' textSz={14} onClick={handleRedirect} />
                    </div>
                </>)}     
                </div>
                )}
            </aside>
        </div>
    </div>
  )
}

export default CartModal