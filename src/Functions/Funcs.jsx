const editTodo = (id , list) => {
    let newList = [...list]
    let targetIndex = newList.findIndex(todo => {
      return id === todo.id
    })
    newList[targetIndex].isComplete = !newList[targetIndex].isComplete
    return newList
}

const deleteTodo = (id , list) => {
    let newList = [...list]
    let targetIndex = newList.findIndex(todo => {
      return id === todo.id
    })
    newList.splice(targetIndex , 1)
    return newList
}

const setToLocalStorage = (key , value) => {
  localStorage.setItem(key , JSON.stringify(value))
}

const loadFromLocalStorage = (key) => {
  let data = JSON.parse(localStorage.getItem(key))
  return data
}


export {editTodo , deleteTodo , setToLocalStorage , loadFromLocalStorage}