import React from 'react'
import TodoTask from './TodoTask'
import TodoNew from './TodoNew'

function TodoList({ todos, onCreateTodo, onMark, onRemove }) {
	return (
    <ul className="w-full text-white bg-gray-900/60 rounded-b">
  		<TodoNew onCreate={onCreateTodo} />
      {todos.map(todo => (
      	<TodoTask 
      		key={todo.id} 
      		todo={todo} 
      		onMark={onMark} 
          onRemove={onRemove} 
      	/>
      ))}
    </ul>
	)
}
export default TodoList