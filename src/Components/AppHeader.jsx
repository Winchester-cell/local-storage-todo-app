import React from 'react'
import { FaReact } from "react-icons/fa6";

export default function AppHeader() {
  return (
    <div className='mt-5 w-full flex justify-center items-center p-[clamp(20px,4dvw,30px)] font-bold text-[clamp(20px,4dvw,36px)]'>React ToDo List App <FaReact className='block mt-2 ml-2'/></div>
  )
}
