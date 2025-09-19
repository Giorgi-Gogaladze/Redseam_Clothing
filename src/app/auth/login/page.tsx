'use client'
import { handleLogin } from '@/components/api_handler_functions/handleLogin'
import Button from '@/components/reusabel_components/Button'
import Input from '@/components/reusabel_components/Input'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [errors, setErrors] = useState<{[key:string]: string}>({})
  const router = useRouter();
  
  const handleLoginSub = async () => {
    const loginData = {password,email};
    try {
      const res = await handleLogin(loginData);
      setPassword('');
      setEmail('');
      setErrors({});
      router.replace('/');
      console.log('returned data:',res);
    } catch (error: any) {
      setErrors({});
      if (error?.errors) {
        setErrors((prevErr) => ({
          ...prevErr, ...error.errors
        }))
      } 
      if (error?.message) {
        setErrors((prevErrM) => ({
          ...prevErrM, message: error.message
        }));
      }
      {
      setErrors({ message: 'server error, please try again.' });
      }
    }
  }


  return (
    <section className='w-full h-full'>
      <div className='flex items-center justify-center mt-[241px]'>
        <div className='w-[554px] h-auto flex flex-col gap-[46px]'>

          <h1 className='font-semibold text-[42px] leading-[100%] tracking-[0] flex justify-start w-[261px] h-[63px] items-center'>
            Log in
          </h1>

          <div className='w-full flex flex-col gap-[24px]'>
            {errors.message && (
            <div className="mb-2">
              <p className="font-light text-[var(--orange-button)] text-[12px]">{errors.message}</p>
            </div>
            )}
            <div className='flex flex-col gap-1'>
              <Input value={email} onChange={(e) => setEmail(e.target.value)}  type='email' width={554} placeholder='Email *' />
              {Array.isArray(errors.email) && errors.email.map((err, i) => (
                <p key={i} className='font-light text-[var(--orange-button)] text-[10px]'>{err}</p>
              ))}
            </div>
            <div className='flex flex-col gap-1'>
              <Input value={password} onChange={(e) => setPassword(e.target.value) } type='password' width={554} placeholder='Password *'/>
              {Array.isArray(errors.password) && errors.password.map((err, i) => (
                <p key={i} className='font-light text-[var(--orange-button)] text-[10px]'>{err}</p>
              ))}
            </div>
          </div>
          <div className='w-[554px] h-[86px] flex flex-col justify-between items-center'>
          <Button
          onClick={handleLoginSub}
           width={554} text='Log in' />
          <div className='w-[176px] h-[21px] font-normal leading-[14px] text-[14px] text-[var(--dark-blue-2)] flex gap-[8px] items-center'>
            <span>Not a member?</span>
            <Link href={'/auth/registration'}>
            <span className='font-medium text-[14px] leading-[100%] tracking-[0px] text-[var(--orange-button)]'>
              Register
            </span>
            </Link>
          </div>
        </div>
        </div>
      </div>  
    </section>
  )
}

export default page