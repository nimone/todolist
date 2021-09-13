import React from 'react'
import { List, Settings } from "react-feather"
import { useDispatch, useSelector } from 'react-redux'

import { setSortType, sortOptions } from '../redux'
import Select from './Select'

function TodoHeader({ title, toggleSettings }) {
  const sortType = useSelector(state => state.settings.sortType)
  const dispatch = useDispatch()

	return (
    <div className="flex w-full justify-between items-center py-2 px-3 text-white bg-gradient-to-b from-gray-800 to-gray-900 opacity-80 rounded-t shadow-md">
      <List className="mr-3" />
      <h1 className="font-bold mr-auto">{title}</h1>
      <Select 
        options={sortOptions} 
        selected={sortType}
        onSelect={value => dispatch(setSortType(value))}
      />
      <Settings 
        className="w-6 h-6 ml-3 cursor-pointer animated active:animate-spin" 
        onClick={toggleSettings}
      />
    </div>
	)
}
export default TodoHeader