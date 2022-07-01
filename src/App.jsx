import './App.css'

import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo } from './features/todoSlice'
import Todoitem from './components/Todoitem'
import { useState } from 'react'

const App = () => {
  const count = useSelector((state) => state.todo.count)
  const todos = useSelector((state) => state.todo.todos)

  const [input, setInput] = useState('')

  const todoInput = document.getElementById('todo-input')

  const dispatch = useDispatch()

  const handleAddTodo = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
   todoInput.value=''
  }

  const handleTodoDone = (id) => {
    dispatch(removeTodo(id))
  }

  return (
    <div className='App'>
      <h1>TODO List</h1>
      <form className='App-form' onSubmit={handleAddTodo}>
        <input type='text' onInput={(e) => setInput(e.target.value)} id='todo-input' autoFocus/>
        <button type='submit'>+</button>
      </form>
      <div className='Todos'>
        {count > 0 &&
          todos.map((todo) => (
            <Todoitem key={todo.id} text={todo.text} id={todo.id} onCheck={handleTodoDone} />
          ))}
      </div>
      {count === 0 && <h2>Todo yok</h2>}
    </div>
  )
}

export default App
