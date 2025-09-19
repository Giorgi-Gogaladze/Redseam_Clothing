'use client'
import React, { useState } from 'react'
import { IconType } from 'react-icons';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

interface InputProps {
  width?: number;
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  icon?: IconType;
}

const Input:React.FC<InputProps> = ({width, placeholder, type, value, onChange}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const passwordField = type === 'password'
  return (
    <div className='relative'>
        <input
        style={{width: `${width}px`}}
        id={placeholder}
        type={passwordField ? (showPassword ? 'text' : 'password') : type}
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        className={`h-[42px] w-[${width}px] rounded-[8px] border px-[12px] border-[var(--grey-2)] text-start  placeholder-style focus:outline-none`} />
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