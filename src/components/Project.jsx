import React, { useState } from 'react'
import { Trash, Edit2 } from "react-feather"

export default function Project({ id, title, timestamp, onSelect, onEdit, onRemove }) {
	const [showConfirmDelete, setShowConfirmDelete] = useState(false)

	return (
		<li className={`flex items-center p-2 transition-color duration-100 hover:(filter brightness-110 border-l-2 border-gray-700) group ${showConfirmDelete ? "bg-red-700" : "bg-gray-800"}`}>
			<span 
				className="text-sm flex-1 cursor-pointer" 
				onClick={onSelect}
			>
				<h4 className="text-lg">{title}</h4>
				<p className="opacity-30">{new Date(timestamp).toLocaleString()}</p>
			</span>
			{showConfirmDelete ? (
				<span className="px-2">
					<p>Are you sure?</p>
					<div className="flex justify-around text-sm mt-2">
						<button onClick={onRemove}>YES</button>
						<button onClick={() => setShowConfirmDelete(false)}>NO</button>
					</div>
				</span>

			) : (
				<span className="opacity-0 group-hover:(opacity-100) cursor-pointer">
					<Edit2 
						onClick={onEdit}
						className="w-5 h-5 mx-2 hover:(text-yellow-400)"
					/>
					<Trash 
						className="w-5 h-5 mx-2 hover:(text-red-400)" 
						onClick={() => setShowConfirmDelete(true)} 
					/>
				</span>
			)}
		</li>
	)
}