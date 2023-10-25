import React, { useState } from 'react'
import { ToDoForm } from './ToDoForm'
import { Todos } from './Todos';
import { EditTodoForm } from './EditTodoForm';
const ToDoWrapper = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = todo => {
        setTodos([...todos, { id: Date.now(), task: todo, completed: false, isEditing: false },])
        console.log(todos);
    }
    const toggleComplete = id=>{
        setTodos(todos.map(todo=>
             todo.id===id ?
             {...todo, completed: !todo.completed}
             :todo ))
            
    } 
    const deleteTodos = id=>{
        setTodos(todos.filter(todo=>todo.id!==id))
    }
    const editTodo = (id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
          )
        );
      }
    
      const editTask = (task, id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
          )
        );
      };
    return (
        <div className='TodoWrapper'>
            <h1>Get things done!</h1>
            <ToDoForm addTodo={addTodo} />

            {
                todos.map((todo)=> todo.isEditing?( <EditTodoForm editTodo={editTask} tsk={todo} />
                ):(
                <Todos 
                tsk={todo} 
                key={todo.id} 
                toggleComplete={toggleComplete} 
                deleteTodos={deleteTodos} 
                editTodo={editTodo}
                />))
            }


            
        </div>
    )
}

export default ToDoWrapper