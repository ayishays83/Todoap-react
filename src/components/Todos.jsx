import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todos = ({tsk,toggleComplete,deleteTodos,editTodo}) => {
  return (
  <div>
    <div className='Todo'>
     <p  onClick={()=> toggleComplete(tsk.id)}   className={`${tsk.completed ? 'completed':''}`} >{tsk.task}</p>
     <div>
        <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={()=>editTodo(tsk.id)}  />
        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={()=>deleteTodos(tsk.id)} />
        </div>
      </div> 
    </div>
  )
}
