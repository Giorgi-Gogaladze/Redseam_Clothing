'use client'
import { handleLogin } from '@/components/utils/handleLogin'
import Button from '@/components/reusabel_components/Button'
import Input from '@/components/reusabel_components/Input'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useAuth } from '@/context/AuthContext'

const page = () => {
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<{[key:string]: string[]}>({})
  const router = useRouter();
  const { user, setUser} = useAuth();
  
  const handleLoginSub = async () => {
    const loginData = {password,email};
    try {
      const res = await handleLogin(loginData);
      setPassword('');
      setEmail('');
      setError({});
      setUser(res)
      router.replace('/products');
      console.log('returned data:',res);
    } catch (error: any) {
      setError(error && error.errors ? error.errors : {});
      console.log('returned error:',error)
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
            <div className='flex flex-col gap-1'>
              <Input value={email} onChange={(e) => setEmail(e.target.value)}  type='email' width={554} placeholder='Email *' />
              {error.email && (
              <div>
                {error.email.map((err, i) => <p className='font-light text-[var(--orange-button)] text-[10px]' key={i}>{err}</p>)}
              </div>
            )}
            </div>
            <div className='flex flex-col gap-1'>
              <Input value={password} onChange={(e) => setPassword(e.target.value) } type='password' width={554} placeholder='Password *'/>
              {error.password && (
              <div>
                {error.password.map((err, i) => <p className='font-light text-[var(--orange-button)] text-[10px]' key={i}>{err}</p>)}
              </div>
            )}
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