import React from 'react'
import { List, Settings } from "react-feather"
import { useDispatch, useSelector } from 'react-redux'

import { setSortType, sortOptions, setCurrentProject } from '../redux'
import Select, { Option } from './Select'

function TodoHeader({ title, toggleSettings }) {
  const { sortType, currentProject } = useSelector(state => state.settings)
  const projects = useSelector(state => state.projects)
  const dispatch = useDispatch()

	return (
    <div className="flex w-full justify-between items-center py-2 px-3 text-white bg-gradient-to-b from-gray-800 to-gray-900 opacity-80 rounded-t shadow-md">
      <List className="mr-3" />
      <div className="mr-auto">
        <Select 
          text={projects[currentProject].title}
          className="font-bold"
        > {projects.map((project, idx) => (
            <Option 
              key={project.id}
              selected={idx === currentProject}
              onClick={() => dispatch(setCurrentProject(idx))}
              value={idx}
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
            value={value}
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