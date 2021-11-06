import React, { useState } from 'react'
import { Trash, Edit2 } from 'react-feather'

function TodoTask({ todo, onMark, onRemove, onEdit }) {
	return (
		<li className="flex bg-gray-900/60 items-center px-3 py-2 border-b border-white/10 group hover:bg-opacity-65">
			<input 
				type="checkbox" 
				className="form-tick cursor-pointer appearance-none min-h-5 min-w-5 border border-white rounded-full checked:(bg-gray-300 border-transparent) focus:outline-none checked:(animated animate-jello) transform transition-transform duration-200 hover:scale-110" 
				onClick={e => onMark(e.target.checked)}
				defaultChecked={todo.completed}
			/>

			<span 
				className={`overflow-x-hidden overflow-ellipsis mx-3 ${todo.completed ? "text-gray-300 line-through" : "cursor-pointer"}`} 
				onClick={() => todo.completed ? null : onEdit()}>
      	{todo.task}
			</span>

			<div className="ml-auto">
				<Trash 
					onClick={() => onRemove()}
					className="w-5 h-5 cursor-pointer opacity-0 group-hover:(opacity-100) hover:(transition-color duration-300 text-red-400)" 
				/>
			</div>
    </li>
	)
}
export default TodoTask