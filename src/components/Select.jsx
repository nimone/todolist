import React, { useState } from 'react'
import { ChevronDown } from 'react-feather'

function Select({ text, className, children }) {
	const [showOptions, setShowOptions] = useState(false)

	return (
	  <div className="relative">
	    <button 
	    	className={`flex items-center space-x-1 bg-transparent focus:(outline-none) ${className}`} 
	    	onClick={() => setShowOptions(prev => !prev)}>
	    	<span>{text}</span> 
		    <ChevronDown />
	    </button>
	    
			{showOptions && 
				<ul className="absolute z-10 mt-2 w-full bg-gray-800/80 text-white shadow-lg max-h-[70vh] max-w-64 rounded-b py-1 overflow-auto focus:outline-none scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700"
					onClick={() => setShowOptions(false)}
				>
					{children}
				</ul>
			}
	  </div>
	)
}

export function Option({ text, selected, ...props }) {
	return (
		<li 
  		className={`px-2 hover:bg-gray-900/60 border-b border-gray-400/20 py-1 cursor-pointer ${selected ? "bg-gray-900/90" : "bg-gray-800/70"}`}
  		{...props}
  	>
			{text}
  	</li>
	)
}
export default Select