import React from 'react'

function Loader() {
	return (
		<div className="flex space-x-2 p-5 justify-center items-center">
			<div 
				style={{animationDelay: "0.1s"}}
				className="bg-gray-800/30 p-2 w-6 h-6 rounded-full animate-bounce"></div>
			<div 
				style={{animationDelay: "0.2s"}}
				className="bg-gray-800/40 p-2 w-6 h-6 rounded-full animate-bounce"></div>
			<div 
				style={{animationDelay: "0.3s"}}
				className="bg-gray-800/50 p-2 w-6 h-6 rounded-full animate-bounce"></div>
		</div>
	)
}
export default Loader