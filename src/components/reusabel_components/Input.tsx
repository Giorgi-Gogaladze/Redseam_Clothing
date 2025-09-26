'use client'
import React, { useState } from 'react'
import { IconType } from 'react-icons';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';

interface InputProps {
  width?: number;
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  icon?: boolean;
  background?: string;
  extraStyle?: string; 
}

const Input:React.FC<InputProps> = ({width, placeholder, type='text', value, onChange, icon, background, extraStyle}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const passwordField = type === 'password'
  return (
    <div className='relative'>
      {icon && (
        <span className='absolute left-3 top-1/2 -translate-y-1/2 text-[var(--iconcolor)]'>
            <HiOutlineMail size={20} className='text-[var(--dark-blue-2)]' />
        </span>
      )}
        <input
        style={{width: `${width}px`, paddingLeft: icon ? '34px' : ''}}
        id={placeholder}
        type={passwordField ? (showPassword ? 'text' : 'password') : type}
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        className={`h-[42px] w-[${width}px] rounded-[8px] bg-${background} border px-[12px] border-[var(--grey-2)] text-start  placeholder-style focus:outline-none
        ${ extraStyle}`} />
        {passwordField && (
        <span
          onClick={() => setShowPassword(!showPassword)}
          className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[var(--dark-blue-2)]'
        >
          {showPassword ? <AiOutlineEyeInvisible className='text-[var(--iconcolor)]' size={20} /> : <AiOutlineEye className='text-[var(--iconcolor)]' size={20} />}
        </span>
      )}
    </div>
  )
}

export default Input