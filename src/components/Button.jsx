import React from 'react'

export default function Button({ children, className, ...props }) {
	return (
		<button 
			className={`inline-flex items-center text-center px-4 py-2 m-1 bg-gray-800 bg-opacity-60 text-white text-sm font-medium rounded-md hover:(bg-opacity-80) focus:(outline-none) ${className}`}
			{...props}
		>
			{children}
		</button>
	)
}