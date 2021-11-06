import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { handleTaskEdit, handleTodoComplete, handleTodoRemove } from "../todoOperations"

import TodoTask from './TodoTask'
import TodoForm from './TodoForm'
import Loader from './Loader'

function TodoList({ todos }) {
  const projectID = useSelector(state => state.settings.currentProject)
  const [editTodoId, setEditTodoId] = useState(null)
  
	return (
    <ul className="w-full text-white rounded-b overflow-y-auto max-h-[70vh] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700">
      {todos.map(todo => (
        todo.id === editTodoId ? (
          <TodoForm
            key={todo.id}
            type="edit" 
            task={todo.task} 
            onSubmit={task => {
              handleTaskEdit(projectID, todo.id, { task })
              setEditTodoId(null)
            }}
          />
        ) : (
          <TodoTask 
        		key={todo.id} 
        		todo={todo} 
        		onMark={completed =>
              handleTodoComplete(projectID, todo.id, {
                task:todo.task, 
                completed,
              }) 
            }
            onRemove={() => handleTodoRemove(projectID, todo.id)} 
            onEdit={() => setEditTodoId(todo.id)}
        	/>
        )
      ))}
    </ul>
	)
}
export default TodoList