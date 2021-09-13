import React, { useState } from 'react'
import { ChevronDown } from 'react-feather'

function Select({ options, selected, onSelect }) {
	const [showOptions, setShowOptions] = useState(false)
	
	const handleSelect = value => {
		onSelect(value)
		setShowOptions(false)
	}

	return (
	  <div className="relative">
	    <button 
	    	className="relative flex items-center space-x-1 bg-transparent focus:(outline-none)" 
	    	onClick={() => setShowOptions(prev => !prev)}>
	    	<span>{options[selected]}</span> 
		    <ChevronDown />
	    </button>
			{showOptions && 
				<ul className="absolute z-10 mt-1 w-full bg-gray-900/60 text-white shadow-lg max-h-56 rounded-b py-1 overflow-auto focus:outline-none">
					{Object.entries(options).map(([ value, text ]) => 
				  	<li 
				  		key={value}
				  		className={`px-2 py-1 hover:bg-gray-900/70 cursor-pointer ${value === selected ? "bg-gray-900/30" : ""}`}
				  		onClick={() => handleSelect(value)}>
							{text}
				  	</li>
					)}
				</ul>
			}
	    
	  </div>
	)
}
export default Select