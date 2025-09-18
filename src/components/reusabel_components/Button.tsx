import React from 'react'
interface IButton {
    width: number;
    text: string;
    onClick?: () => void;
}

const Button:React.FC<IButton> = ({width, text, onClick}) => {
  return (
    <button
      className={`flex items-center justify-center text-white text-[14px] h-[41px]
         font-normal leading-[14px] tracking-[0px] bg-[var(--orange-button)] rounded-[10px] w-[${width}px] cursor-pointer`}
    >
        {text}
    </button>
  )
}

export default Button