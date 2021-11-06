import React, { useState } from 'react'
import { Edit2, Plus, Check } from 'react-feather'

function TodoForm({ task="", onSubmit, type }) {
	const [todoTask, setTodoTask] = useState(task)

	const handleSubmit = e => {
		e.preventDefault()
		onSubmit(todoTask)
		setTodoTask("")
	}

	return (
		<li className={`w-full text-white flex bg-gray-900/70 items-center justify-between px-3 py-2 border-b border-white/10`}>
			<Edit2 className="w-5 h-5 animated animate-swing" />
			<form onSubmit={handleSubmit} className="flex-1 flex">
				<input
					autoFocus
					className={`w-full mx-3 bg-transparent border-none outline-none placeholder-white/20 ${type === "new" ? "text-lg" : ""}`}
					type="text" 
					value={todoTask} 
					placeholder="Add Todo"
					onChange={e => setTodoTask(e.target.value)} 
					required
				/>
				<button type="submit" className="ml-auto flex items-center border-none focus:outline-none">
					{type === "new"
						? <Plus />
						: type === "edit" && <Check />
					}
				</button>
			</form>
		</li>
	)
}
export default TodoForm