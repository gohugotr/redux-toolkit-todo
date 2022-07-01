import './Todoitem.css'

const Todoitem = (props) => {
    const deleteTodo = () => {
        props.onCheck(props.id);
    }
    return (
      <div className='todo' onClick={deleteTodo}>
        <input type='checkbox' id='todo' />
        <label htmlFor='todo'>{props.text}</label>
      </div>
    )
}

export default Todoitem