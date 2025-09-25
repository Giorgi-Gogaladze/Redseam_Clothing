'use client'
import CartModal from '@/components/CartModal';
import SuccessPage from '@/components/pages/SuccessPage';
import CardProducts from '@/components/reusabel_components/CardProducts';
import CartCheckoutInfo from '@/components/reusabel_components/CartCheckoutInfo';
import Input from '@/components/reusabel_components/Input'
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import React, { useState } from 'react'

const page = () => {
  const {savedProducts, setSavedProducts, isLoading, handleProdRemove } = useCart();
  const {isCartOpen} = useAuth();
  const [succModal, setSuccModal] = useState(false);
  const [formDat, setFromDat] = useState({
    name: '',
    surname: '',
    email: '',
    address: '',
    zip_code: ''
  });
  const handleSubmit = ()=> {
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
                    <Input value={formDat.name} onChange={(e) => setFromDat({...formDat, name: e.target.value})} background='white' width={277}  placeholder='Name' />
                    <Input value={formDat.surname} onChange={(e) => setFromDat({...formDat, surname: e.target.value})} background='white' width={277}  placeholder='Surname'/>
                  </div>
                  <Input value={formDat.email} onChange={(e) => setFromDat({...formDat, email: e.target.value})} background='white' icon={true} placeholder='Email' width={578}  />
                  <div className='flex justify-between'>
                    <Input value={formDat.address} onChange={(e) => setFromDat({...formDat, address: e.target.value})} background='white' width={277}  placeholder='Address' />
                    <Input value={formDat.zip_code} onChange={(e) => setFromDat({...formDat, zip_code: e.target.value})} background='white' width={277}  placeholder='Zip code' type='number'/>
                  </div>
              </div>
            </div>

            <div className='w-[460px] h-[635px] flex flex-col gap-[81px]'>
              <div className='h-[304px] w-[460px] overflow-y-scroll'>
                <CardProducts setSavedProducts={setSavedProducts} savedProducts={savedProducts || []} onRemove={handleProdRemove} />
              </div>
              <div>
                <CartCheckoutInfo savedProducts={savedProducts || []}  text="Pay" link={false}/>
              </div>
            </div>
          </main>
        </div>
        {isCartOpen && <CartModal />}
        {succModal && (
          <SuccessPage setSuccModal={setSuccModal} />
        )}
    </section>
  )}

export default page