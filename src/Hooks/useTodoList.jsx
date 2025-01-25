import React, { useState } from 'react'
import { loadFromLocalStorage } from '../Functions/Funcs'

export default function useTodoList(init) {

    let localData = loadFromLocalStorage(`list`)

    const [todoList , setTodoList] = useState(()=>{
      if(localData){
        return localData
      }else{
        return []
      }
    })

    const addTodoHandler = ()=>{
      let newTodo = {id:todoList.length + 1 , title:init , isComplete:false}
      setTodoList([...todoList,newTodo])
    }

    const keyboardHanlder = (e)=>{
      if(e.key === 'Enter'){
        addTodoHandler()
      }
    }

    return[todoList , setTodoList , addTodoHandler , keyboardHanlder]

}
