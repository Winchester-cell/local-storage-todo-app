import React from 'react'
import { FaClipboardCheck , FaTrash } from "react-icons/fa";

export default function TodoCard({id , title , isComplete , onEdit , onDelete}) {

  const editClickHandler = (todoID)=>{
    onEdit(todoID)
  }

  const deleteClickHandler = (todoID)=>{
    onDelete(todoID)
  }


  return (
    <div className={`w-[70%] flex items-center justify-between border-2 ${isComplete ? `border-zinc-700` : `border-zinc-300`} rounded-md p-3`}>
      <div className={isComplete ? `line-through text-zinc-700` : ``}>{title}</div>
      <div className='flex items-center gap-5'>
        <button onClick={()=>editClickHandler(id)}><FaClipboardCheck className={isComplete ? `text-zinc-700` : `text-zinc-300`} /></button>
        <button onClick={()=>deleteClickHandler(id)}><FaTrash /></button>
      </div>
    </div>
  )
  
}
