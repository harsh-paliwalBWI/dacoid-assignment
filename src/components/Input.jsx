import React from 'react'
import { twMerge } from "tailwind-merge"

function Input({
    name,
    type='text',
    placeHolder='',
    className='',
    ...props
}) {
  return <input 
    name={name}
    type={type}
    className={twMerge('bg-[#F1F1F1] p-2 rounded-[12px] w-full h-[50px] placeholder:text-[#7F7F7F]', className)}
    placeholder={placeHolder}
    {...props}
  />
}

export default Input