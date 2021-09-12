import React from 'react'
import { List } from "react-feather"

function TodoHeader() {
	return (
    <div className="flex w-full justify-between items-center py-2 px-3 text-white bg-gradient-to-b from-gray-800 to-gray-900 opacity-80 rounded-t shadow-md">
      <List className="mr-3" />
      <h1 className="font-bold mr-auto">Todolist</h1>
    </div>
	)
}
export default TodoHeader