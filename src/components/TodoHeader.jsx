import React from 'react'
import { List, Settings } from "react-feather"

function TodoHeader({ title, toggleSettings }) {
	return (
    <div className="flex w-full justify-between items-center py-2 px-3 text-white bg-gradient-to-b from-gray-800 to-gray-900 opacity-80 rounded-t shadow-md">
      <List className="mr-3" />
      <h1 className="font-bold mr-auto">{title}</h1>
      <Settings 
        className="w-6 h-6 cursor-pointer animated active:animate-spin" 
        onClick={toggleSettings}
      />
    </div>
	)
}
export default TodoHeader