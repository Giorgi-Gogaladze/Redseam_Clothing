import React from 'react'
interface InputProps {
  width: number;
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number';
}

const Input:React.FC<InputProps> = ({width, placeholder, type}) => {
  return (
    <>
        <input
        id={placeholder}
        type={type || 'text'}
        placeholder={placeholder} 
        className={`h-[42px] w-[${width}px] rounded-[8px] border px-[12px] border-[var(--grey-2)] text-start  placeholder-style focus:outline-none`} />
    </>
  )
}

export default Input