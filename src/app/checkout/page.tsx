'use client'
import CartModal from '@/components/CartModal';
import SuccessPage from '@/components/pages/SuccessPage';
import CardProducts from '@/components/reusabel_components/CardProducts';
import CartCheckoutInfo from '@/components/reusabel_components/CartCheckoutInfo';
import Input from '@/components/reusabel_components/Input'
import { cartCheckout } from '@/components/utils/cartCheckout';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import EmptyCart from '@/components/reusabel_components/EmptyCart';

const Page = () => {
  const {savedProducts, setSavedProducts, isLoading, handleProdRemove } = useCart();
  const {isCartOpen} = useAuth();
  const [succModal, setSuccModal] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string[]}>({})
  const [formDat, setFromDat] = useState({
    name: '',
        surname: '',
        email: '',
        address: '',
        zip_code: ''
  });
  const router = useRouter();
  const {setIsCartOpen} = useAuth();

    const handlesubmit = async () => {
      const token = Cookies.get('token');
      if(!token){
      alert('user is not authenticated');
      router.push('/auth/login');
      return
    }
    try {
      await cartCheckout(token, formDat);
      setSuccModal(true);
      setErrors({});
      setSuccModal(true);
      setSavedProducts([]);
      setFromDat({
        name: '',
        surname: '',
        email: '',
        address: '',
        zip_code: ''
      });
    } catch (error: any) {
      if(error.errors){
        setErrors(error.errors && error.errors ? error.errors : {})
      } else {
        alert('checkout failed')
      }
    }
  }
  const handleRedirect = ()=> {
    router.replace('/products')
  }

  return (
    <section className='relative mx-[100px]'>
      <div className='absolute top-[72px] left-0 inset-0 flex flex-col gap-[42px]'>
          <div className='h-[63px] flex items-center justify-start'>
            <h1 className='text-[42px] font-semibold leading-[42px] trakcing-[0px] text-[var(--dark-blue)] '>Checkout</h1>
          </div>
          <main className='h-[635px] flex gap-[131px]'>
            <div className='w-[1129px] h-[635px] rounded-2xl bg-[var(--grey)] px-[47px] py-[72px] flex flex-col gap-[47px]'>
              <div className=' h-[33px] flex items-center justify-start'>
                <h1 className='font-medium text-[22px] leading-[22px] text-[var(--dark-blue-2)]'>Order detaild</h1>
              </div>
              <div className='w-[578px] flex flex-col gap-[33px]'>
                  <div className='flex justify-between'>
                    <div className='flex flex-col gap-2'>
                      <Input value={formDat.name} onChange={(e) => setFromDat({...formDat, name: e.target.value})} background='white' extraStyle={errors.name ? 'border border-red-500' : ''} width={277}  placeholder='Name' />
                      {errors.name && (
                        <div>
                          {errors.name.map((err: string, i: number) => <p className='font-light text-[var(--orange-button)] text-[10px]' key={i}>{err}</p>)}
                        </div>
                      )}
                    </div>
                    <div className='flex flex-col gap-2'>
                          <Input value={formDat.surname} onChange={(e) => setFromDat({...formDat, surname: e.target.value})} extraStyle={errors.surname ? 'border border-red-500' : ''} background='white' width={277}  placeholder='Surname'/>
                            {errors.surname && (
                            <div>
                              {errors.surname.map((err: string, i: number) => <p className='font-light text-[var(--orange-button)] text-[10px]' key={i}>{err}</p>)}
                            </div>
                          )}
                        </div>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <Input value={formDat.email} onChange={(e) => setFromDat({...formDat, email: e.target.value})} background='white' extraStyle={errors.email ? 'border border-red-500' : ''} icon={true} placeholder='Email' width={578}  />
                    {errors.email && (
                        <div>
                          {errors.email.map((err: string, i: number) => <p className='font-light text-[var(--orange-button)] text-[10px]' key={i}>{err}</p>)}
                        </div>
                      )}
                  </div>  
                  <div className='flex justify-between'>
                    <div className='flex flex-col gap-2'>
                      <Input value={formDat.address} onChange={(e) => setFromDat({...formDat, address: e.target.value})} background='white' width={277} extraStyle={errors.address ? 'border border-red-500' : ''}  placeholder='Address' />
                      {errors.address && (
                        <div>
                          {errors.address.map((err: string, i: number) => <p className='font-light text-[var(--orange-button)] text-[10px]' key={i}>{err}</p>)}
                        </div>
                      )}
                    </div>
                    <div className='flex flex-col gap-2'>
                      <Input value={formDat.zip_code} onChange={(e) => setFromDat({...formDat, zip_code: e.target.value})} background='white' width={277} extraStyle={errors.zip_code ? 'border border-red-500' : ''}  placeholder='Zip code' type='number'/>
                      {errors.zip_code && (
                        <div>
                          {errors.zip_code.map((err: string, i: number) => <p className='font-light text-[var(--orange-button)] text-[10px]' key={i}>{err}</p>)}
                        </div>
                      )}
                    </div>
                  </div>
              </div>
            </div>

            <div className='w-[460px] h-[635px] flex flex-col gap-[81px]'>
              {savedProducts  && savedProducts?.length > 0  ? (
                <>
                <div className='h-[304px] w-[460px] overflow-y-scroll'>
                <CardProducts setSavedProducts={setSavedProducts} savedProducts={savedProducts || []} onRemove={handleProdRemove} />
              </div>
              <div>
                <CartCheckoutInfo savedProducts={savedProducts || []}  text="Pay" link={false} func={handlesubmit}/>
              </div>
              </>
              ) : (
                <div className='relative bg-[var(--grey)] h-[635px] p-[2rem]'>
                  <div>
                    <EmptyCart setIsCartOpen={setIsCartOpen} handleclick={handleRedirect} chekcout={true}/>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
        {isCartOpen && <CartModal />}
        {succModal && (
          <SuccessPage setSuccModal={setSuccModal} />
        )}
    </section>
  )}

export default Page