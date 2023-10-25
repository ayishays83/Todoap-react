import React from 'react'
import { useState } from 'react'

export const ToDoForm = ({ addTodo }) => {
    const [value, SetValue] = useState("")
    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value);

        SetValue("")
    }
    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <input  className='todo-input' type="text" name="" id=""
                placeholder='What is your today task?'
                value={value}
                onChange={(e) => SetValue(e.target.value)} />
            <button className='todo-btn' type="submit">Add Task</button>
        </form>
    )
}
