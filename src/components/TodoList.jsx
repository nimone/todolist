import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../redux'

import TodoTask from './TodoTask'
import TodoForm from './TodoForm'
import Loader from './Loader'

function TodoList({ todos }) {
  const dispatch = useDispatch()
  const settings = useSelector(state => state.settings)
  const [editTodoId, setEditTodoId] = useState(null)

  const handleUpdate = (id, updateObj) => {
    dispatch(updateTodo(settings.currentProject, id, updateObj))
    setEditTodoId(null)
  }

  const handleComplete = (id, completed) => {
    handleUpdate(id, { completed })

    if (settings.removeCompleted && completed) {
      setTimeout(() => {
        dispatch(removeTodo(id))
      }, 500)
    }
  }
  
	return (
    <ul className="w-full text-white rounded-b overflow-y-auto max-h-[70vh] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700">
      {todos.map(todo => (
        todo.id === editTodoId ? (
          <TodoForm
            key={todo.id}
            type="edit" 
            task={todo.task} 
            onSubmit={task => handleUpdate(todo.id, {task})} 
          />
        ) : (
          <TodoTask 
        		key={todo.id} 
        		todo={todo} 
        		onMark={completed => handleComplete(todo.id, completed)} 
            onRemove={() => dispatch(removeTodo(settings.currentProject, todo.id))} 
            onEdit={() => setEditTodoId(todo.id)}
        	/>
        )
      ))}
    </ul>
	)
}
export default TodoList