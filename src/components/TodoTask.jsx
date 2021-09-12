import React, { useState } from 'react'
import { Trash, Edit2 } from 'react-feather'

function TodoTask({ todo, onMark, onRemove, onEdit }) {
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

			<div className="ml-auto flex space-x-4">
				{!todo.done && 
					<Edit2 
						onClick={() => onEdit()}
						className="w-5 h-5 cursor-pointer transition-color duration-300 hidden group-hover:(block) hover:(text-orange-300)"
					/>
				}
				<Trash 
					onClick={() => onRemove()}
					className="w-5 h-5 cursor-pointer hidden transition-color duration-300 group-hover:(block) hover:(text-red-400)" 
				/>
			</div>
    </li>
	)
}
export default TodoTask