import React, { useState } from 'react'
import { Search, Plus, X, Edit2, Check } from "react-feather"

export default function ProjectForm({ 
	type="new", 
	placeholder="",
	value="", 
	onChange=() => null, 
	onClose=() => null, 
	onSubmit=() => null, 
	className="",
}) {
	const [inputValue, setInputValue] = useState(value)

	const handleChange = e => {
		e.preventDefault()
		const value = e.target.value
		setInputValue(value)
		onChange(value)
	}

	const handleSubmit = e => {
		e.preventDefault()
		onSubmit(inputValue)
		setInputValue("")
	}

	return (
		<form 
			className="flex items-center p-2 shadow"
			onSubmit={handleSubmit}
		>	
			{type === "edit" && <Edit2 className="w-5 h-5 mr-2 text-gray-500" />}
			{type === "search" && <Search className="w-5 h-5 mr-2" />}
			<input
				className={`bg-transparent border-none outline-none text-xl placeholder-gray-600 ${className}`} 
				type="text" 
				value={inputValue}
				onChange={handleChange}
				placeholder={placeholder}
				autoFocus
				required
			/>
			{type === "new" && <>
				<X className="w-5 h-5 cursor-pointer mx-2" 
					onClick={onClose} 
				/>
				<button type="submit" className="flex items-center">
					<Plus className="cursor-pointer" />
				</button>
			</>}

			{type === "edit" &&
				<button type="submit" className="flex items-center focus:outline-none">
					<Check className="mx-2" />
				</button>
			}
		</form>
	)
}