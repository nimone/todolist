import React, { useState } from 'react'
import { Edit2, Plus } from 'react-feather'

function TodoNew({ onCreate }) {
	const [newTodo, setNewTodo] = useState("")

	const createTodo = e => {
		e.preventDefault()
		onCreate({
			id: Math.random(),
			task: newTodo,
			done: false
		})
		setNewTodo("")
	}
	return (
		<li className="flex items-center justify-between px-3 py-2 border-b border-white/10 transition duration-500">
			<Edit2 className="w-5 h-5 animated animate-swing" />
			<form onSubmit={createTodo} className="flex-1 flex">
				<input
					autoFocus
					className="w-full mx-3 bg-transparent border-none outline-none placeholder-white/20 text-lg"
					type="text" 
					value={newTodo} 
					placeholder="Add Todo"
					onChange={e => setNewTodo(e.target.value)} 
					required
				/>
				<button type="submit" className="ml-auto flex items-center border-none focus:outline-none">
					<Plus />
				</button>
			</form>
		</li>
	)
}
export default TodoNew