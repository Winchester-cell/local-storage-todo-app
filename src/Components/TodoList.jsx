import React, { useEffect, useState } from 'react'
import { IoMdAddCircle } from "react-icons/io";
import { BsEraserFill } from "react-icons/bs";
import TodoCard from './TodoCard';
import useInput from '../Hooks/useInput';
import useTodoList from '../Hooks/useTodoList';
import { editTodo, loadFromLocalStorage, setToLocalStorage } from '../Functions/Funcs';
import { deleteTodo } from '../Functions/Funcs';

export default function TodoList() {

  const [todoInputValue, resetValue, todoBinding] = useInput('')
  const [todoList, setTodoList, addTodoHandler, keyboardHanlder] = useTodoList(todoInputValue)

  const keyFunc = (e) => {
    keyboardHanlder(e)
    if (e.key === 'Enter') {
      resetValue()
    }
  }

  const clickFunc = () => {
    addTodoHandler()
    resetValue()
  }

  const editHandler = (todoID) => {
    let newList = editTodo(todoID, todoList)
    setTodoList(newList)
  }

  const deleteHandler = (todoID) => {
    let newList = deleteTodo(todoID, todoList)
    setTodoList(newList)
  }

  useEffect(()=>{
    setToLocalStorage(`list` , todoList)
  },[todoList])

  return (
    <>
      <div className='flex w-full mb-[clamp(50px,4dvw,68px)] mt-[clamp(50px,4dvw,68px)] justify-center items-center gap-[clamp(3px,0.5dvw,5px)]'>
        <input onKeyUp={keyFunc} {...todoBinding} type="text" placeholder='Write your todo here ...' className='bg-transparent border-2 border-zinc-300 outline-none rounded-md w-[65%] block py-[clamp(10px,1dvw,14px)] px-[2dvw]' />
        <button onClick={clickFunc} className='block'><IoMdAddCircle className='text-[clamp(40px,5dvw,60px)]' /></button>
        <button onClick={resetValue} className='block'><BsEraserFill className='text-[clamp(30px,4dvw,50px)]' /></button>
      </div>
      <div className='flex w-full justify-center items-center flex-col gap-5 mb-10'>
        {todoList.map(todo => {
          return <TodoCard key={todo.id} onDelete={() => deleteHandler(todo.id)} onEdit={() => editHandler(todo.id)} {...todo} />
        })}
      </div>
    </>
  )

}
