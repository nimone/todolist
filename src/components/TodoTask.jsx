import React from 'react'
import { Trash } from 'react-feather'

function TodoTask({ todo, onMark, onRemove }) {
	const handleDone = (e) => {
		const isChecked = e.target.checked
		onMark(todo.id, isChecked)
		console.log(isChecked ? "checked" : "unChecked", todo.id)
	}

	return (
		<li className="flex items-center px-3 py-2 border-b border-white/10 group">
			<input 
				type="checkbox" 
				className="form-tick cursor-pointer appearance-none h-5 w-5 border border-white rounded-full checked:(bg-gray-300 border-transparent) focus:outline-none checked:(animated animate-jello) transform transition-transform duration-200 hover:scale-110" 
				onClick={handleDone}
				defaultChecked={todo.done}
			/>

			<span className={`mx-3 ${todo.done ? "text-gray-300 line-through" : ""}`}>
      	{todo.task}
			</span>

			<Trash 
				onClick={() => onRemove(todo.id)}
				className="ml-auto w-5 h-5 cursor-pointer hidden transition-color duration-300 group-hover:(block) hover:(text-red-400)" 
			/>
    </li>
	)
}
export default TodoTask