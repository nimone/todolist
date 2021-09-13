import React, { useState } from 'react'
import { Trash, Edit2 } from 'react-feather'

function TodoTask({ todo, onMark, onRemove, onEdit }) {
	return (
		<li className="flex bg-gray-900/60 items-center px-3 py-2 border-b border-white/10 group">
			<input 
				type="checkbox" 
				className="form-tick cursor-pointer appearance-none min-h-5 min-w-5 border border-white rounded-full checked:(bg-gray-300 border-transparent) focus:outline-none checked:(animated animate-jello) transform transition-transform duration-200 hover:scale-110" 
				onClick={e => onMark(e.target.checked)}
				defaultChecked={todo.completed}
			/>

			<span className={`mx-3 ${todo.completed ? "text-gray-300 line-through" : ""}`}>
      	{todo.task}
			</span>

			<div className="ml-auto flex space-x-4">
				{!todo.completed && 
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