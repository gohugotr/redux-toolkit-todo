import './App.css'

import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo } from './features/todoSlice'

const App = () => {
  const count = useSelector((state) => state.todo.count)
  const todos = useSelector((state) => state.todo.todos)

  const dispath = useDispatch();

  return <div className='App'></div>
}

export default App
