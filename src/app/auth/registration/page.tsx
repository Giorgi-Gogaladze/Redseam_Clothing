'use client'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import Button from '@/components/reusabel_components/Button'
import Link from 'next/link'
import Input from '@/components/reusabel_components/Input'
import { handleRegistration } from '@/components/api_handler_functions/handleRegistration'
import { useRouter } from 'next/navigation'

const page = () => {
  const [userImage, setUserImage] = useState<string | null>(null);
  const [error, setError] = useState<{[key: string]: string[]}>({});
  const router = useRouter();
  const [formData,setFormData] = useState({
    email: '',
    username: '',
    avatar: null as File | null,
    password: '',
    password_confirmation: ''
  })

  const imageRef = useRef<HTMLInputElement | null>(null);

  const handleImageShow = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files?.length){
      const image = e.target.files[0];
      const imageUrl = URL.createObjectURL(image);
      setUserImage(imageUrl) 
    }
  }

  const handleSubmit = async () => {
    const data = new FormData();
    data.append('email', formData.email);
    data.append('username', formData.username); 
    data.append('password', formData.password);
    data.append('password_confirmation', formData.password_confirmation);
    if(formData.avatar){
      data.append('avatar', formData.avatar);
    }
    try {
      const returnedData = await handleRegistration(data);
      router.replace('/')
      setFormData({
        email: '',
        username: '',
        avatar: null,
        password: '',
        password_confirmation: ''
      })
      setUserImage(null)
      setError({})
      console.log('shevamotsmot', returnedData)
    } catch (error: any) {
      setError(error && error.errors ? error.errors : {});
    }
  }
  
  return (
    <section className='flex flex-col gap-12 absolute top-[152px] left-[173px] w-[554px]'>
     <h1 className='font-semibold text-[42px] leading-[100%] tracking-[0] flex justify-start w-[261px] h-[63px] items-center'>
      Registration
    </h1>
      <div className='w-[554px] flex flex-col gap-[46px]'>
        { userImage ? (
        <div className='w-[272px] h-[100px] flex gap-[15px] items-center'>
          <div className='w-[100px] h-[100px] rounded-full overflow-hidden flex items-center justify-center'>
            <Image
              src={userImage}
              alt='user image'
              width={1000}
              height={1000}
              className='object-cover w-full h-full '/>
          </div>
          <div className='w-[157px] h-[21px] flex gap-[15px] justify-center items-center  font-normal text-[14px] tracking-[0]  leading-[16px] text-[var(--dark-blue-2)]'>
            <h1 
            onClick={() => imageRef.current?.click()}
            className='cursor-pointer whitespace-nowrap'>Upload new</h1>
            <h1
            onClick={() => setUserImage(null)} 
            className='cursor-pointer'>Remove</h1>
          </div>
          <input 
            type="file" 
            ref={imageRef}
            accept='image/*'
            onChange={handleImageShow}
            className='hidden' />
        </div>
        ) : (
          <div className='w-[272px] h-[100px] flex gap-[15px] items-center'>
          <div 
          onClick={() => imageRef.current?.click()}
          className='w-[100px] h-[100px] rounded-full overflow-hidden border border-[var(--grey-2)] flex items-center justify-center cursor-pointer'>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9297 3C12.5984 3.00002 13.2228 3.33424 13.5938 3.89062L14.4062 5.10938C14.7772 5.66576 15.4016 5.99998 16.0703 6H17C18.1046 6 19 6.89543 19 8V15C19 16.1046 18.1046 17 17 17H3C1.89543 17 1 16.1046 1 15V8C1 6.89543 1.89543 6 3 6H3.92969C4.59837 5.99998 5.22283 5.66576 5.59375 5.10938L6.40625 3.89062C6.77717 3.33424 7.40163 3.00002 8.07031 3H11.9297ZM10 6.5C7.51472 6.5 5.5 8.51472 5.5 11C5.5 13.4853 7.51472 15.5 10 15.5C12.4853 15.5 14.5 13.4853 14.5 11C14.5 8.51472 12.4853 6.5 10 6.5ZM10 8C11.6569 8 13 9.34315 13 11C13 12.6569 11.6569 14 10 14C8.34315 14 7 12.6569 7 11C7 9.34315 8.34315 8 10 8Z" fill="#3E424A"/>
            </svg>
          </div>
          <div className='w-[157px] h-[21px] flex gap-[15px] justify-start items-center  font-normal text-[14px] tracking-[0]  leading-[16px] text-[var(--dark-blue-2)]'>
            <h1>Upload image</h1>
            <input 
            type="file" 
            ref={imageRef}
            accept='image/*'
            onChange={handleImageShow}
            className='hidden' />
          </div>
        </div>
        )}

        <main className='w-[554px] flex flex-col gap-[24px]'>
          <div className='flex flex-col gap-1'>
            <Input value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})}  width={554} placeholder='Username *' type={'text'} />
            {error.username && (
              <div>
                {error.username.map((err, i) => <p className='font-light text-[var(--orange-button)] text-[10px]' key={i}>{err}</p>)}
              </div>
            )}
          </div>
          <div className='flex flex-col gap-1'>
            <Input value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}  width={554} placeholder='Email *' type={'email'} />
            {error.email && (
              <div>
                {error.email.map((err, i) => <p className='font-light text-[var(--orange-button)] text-[10px]' key={i}>{err}</p>)}
              </div>
            )}
          </div>
          <div className='flex flex-col gap-1'>
            <Input value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}  width={554} placeholder='Password *' type={'password'} />
            {error.password && error.password[0] && (
              <div>
               <p className='font-light text-[var(--orange-button)] text-[10px]'>{error.password[0]}</p>
              </div>
            )}
          </div>
          <div className='flex flex-col gap-1'>
            <Input value={formData.password_confirmation} onChange={(e) => setFormData({...formData, password_confirmation: e.target.value})}  width={554} placeholder='Confirm Password *' type={'password'} />
            {error.password && error.password[0] && error.password[0] === 'The password field confirmation does not match.' && (
              <div>
                <p className='font-light text-[var(--orange-button)] text-[10px]'>{error.password[0]}</p>
              </div>
            )}
          </div>
        </main>

        <div className='w-[554px] h-[86px] flex flex-col justify-between items-center'>
          <Button width={554} text='Register' onClick={handleSubmit} />
          <div className='w-[176px] h-[21px] font-normal leading-[14px] text-[14px] text-[var(--dark-blue-2)] flex gap-[8px] items-center'>
            <span> Already member?</span>
            <Link href={'/auth/login'}>
            <span className='font-medium text-[14px] leading-[100%] tracking-[0px] text-[var(--orange-button)]'>
              Log in
            </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page