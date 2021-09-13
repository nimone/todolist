import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, removeTodo, updateTodo } from '../redux'

import TodoTask from './TodoTask'
import TodoForm from './TodoForm'

function TodoList({ todos }) {
  const dispatch = useDispatch()
  const [editTodoId, setEditTodoId] = useState(null)

  const handleUpdate = (id, updateObj) => {
    dispatch(updateTodo(id, updateObj))
    setEditTodoId(null)
  }

  const createTodo = task => {
    const timestamp = Date.now()
    dispatch(addTodo({
      task,
      timestamp,
      id: timestamp,
      completed: false
    }))
  }
  
	return (
    <ul className="w-full text-white bg-gray-900/60 rounded-b">
  		<TodoForm type="new" task="" onSubmit={createTodo} />
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
        		onMark={completed => handleUpdate(todo.id, {completed})} 
            onRemove={() => dispatch(removeTodo(todo.id))} 
            onEdit={() => setEditTodoId(todo.id)}
        	/>
        )
      ))}
    </ul>
	)
}
export default TodoList