import React, { useState } from 'react'
import TodoTask from './TodoTask'
import TodoForm from './TodoForm'

function TodoList({ todos, onCreateTodo, onMark, onRemove, onEdit }) {
  const [editTodoId, setEditTodoId] = useState(null)

  const handleEdit = task => {
    onEdit(editTodoId, task)
    setEditTodoId(null)
  }
  
	return (
    <ul className="w-full text-white bg-gray-900/60 rounded-b">
  		<TodoForm type="new" task="" onSubmit={onCreateTodo} />
      {todos.map(todo => (
        todo.id === editTodoId ? (
          <TodoForm
            key={todo.id}
            type="edit" 
            task={todo.task} 
            onSubmit={handleEdit} 
          />
        ) : (
          <TodoTask 
        		key={todo.id} 
        		todo={todo} 
        		onMark={onMark} 
            onRemove={() => onRemove(todo.id)} 
            onEdit={() => setEditTodoId(todo.id)}
        	/>
        )
      ))}
    </ul>
	)
}
export default TodoList