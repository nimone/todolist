import React from 'react'
import { GitHub, CheckCircle } from "react-feather"

export default function Footer() {
	return (
		<footer className="absolute bottom-0 w-full flex justify-center items-center p-1 bg-gradient-to-t from-gray-900/50 to-gray-700/40 text-white">
		 	<a href="https://github.com/nimone/todolist"
		 		className="flex items-center mx-2"
		 		target="_blank">
			<CheckCircle className="w-5 h-5 text-violet-200" />
		 	</a>
			<span>
				TodoList / Google Tasks client by
			</span>
			<a href="http://nimo.pages.dev"
				className="border-b-2 border-green-300 ml-1" 
				target="_blank">nimo</a> 
		</footer>
	)
}