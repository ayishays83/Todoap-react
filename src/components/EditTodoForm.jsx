import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, tsk}) => {
    const [value, setValue] = useState(tsk.task);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit todo
        editTodo(value, tsk.id);
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}
