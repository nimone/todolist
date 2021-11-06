import React from 'react'
import { List, Settings, Plus } from "react-feather"
import { useDispatch, useSelector } from 'react-redux'

import { setSortType, sortOptions, setCurrentProject } from '../redux'
import Select, { Option } from './Select'
import TodoForm from './TodoForm'

function TodoHeader({ toggleSettings }) {
  const { sortType, currentProject } = useSelector(state => state.settings)
  const projects = useSelector(state => state.projects)
  const dispatch = useDispatch()

	return (
    <div className="flex w-full justify-between items-center py-2 px-3 text-white bg-gradient-to-b from-gray-800/80 to-gray-900/80 rounded-t shadow-md">
      <List className="mr-3" />
      <div className="mr-auto">
        <Select 
          text={projects[currentProject].title}
          className="font-bold min-w-36"
        >
          {Object.values(projects).map(project => (
            <Option 
              key={project.id}
              selected={project.id === currentProject}
              onClick={() => dispatch(setCurrentProject(project.id))}
              text={project.title}
            />
          ))}
        </Select>
      </div>

      <Select text={sortOptions[sortType]}>
        {Object.entries(sortOptions).map(([ value, text ]) => (
          <Option 
            key={value}
            selected={value === sortType}
            onClick={() => dispatch(setSortType(value))}
            text={text}
          />
        ))}
      </Select>
      <Settings 
        className="w-6 h-6 ml-3 cursor-pointer animated active:animate-spin" 
        onClick={toggleSettings}
      />
    </div>
	)
}
export default TodoHeader