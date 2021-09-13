import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../redux'

import TodoTask from './TodoTask'
import TodoForm from './TodoForm'

function TodoList({ todos }) {
  const dispatch = useDispatch()
  const settings = useSelector(state => state.settings)
  const [editTodoId, setEditTodoId] = useState(null)

  const handleUpdate = (id, updateObj) => {
    dispatch(updateTodo(id, updateObj))
    setEditTodoId(null)
  }

  const handleComplete = (id, completed) => {
    handleUpdate(id, {completed})

    if (settings.removeCompleted && completed) {
      setTimeout(() => {
        dispatch(removeTodo(id))
      }, 500)
    }
  }
  
	return (
    <ul className="w-full text-white rounded-b">
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
            onRemove={() => dispatch(removeTodo(todo.id))} 
            onEdit={() => setEditTodoId(todo.id)}
        	/>
        )
      ))}
    </ul>
	)
}
export default TodoList