import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Plus } from "react-feather"

import { setCurrentProject } from "../redux"
import { handleProjectCreate, handleProjectRemove, handleProjectEdit } from '../projectOperations'
import ProjectForm from "./ProjectForm"
import Project from "./Project"

export default function ProjectList({ handleSelect, handleClose }) {
	const projects = useSelector(state =>
		[...Object.values(state.projects)]
		.sort((a, b) => b.timestamp - a.timestamp)
	)
	const {currentProject} = useSelector(state => state.settings)
	const dispatch = useDispatch()

	const [search, setSearch] = useState("")
	const [showNewProjectForm, setShowNewProjectForm] = useState(false)
	const [editProjectID, setEditProjectID] = useState(null)

	const filteredProjects = projects.filter(project => 
		project.title.toLowerCase().includes(search.toLowerCase())
	)

	// close with Esc
 	useEffect(() => {
    window.addEventListener(
    	'keydown', 
    	e => e.keyCode === 27 && handleClose()
    )
	  return () => window.removeEventListener('keydown', close)
  },[])

	const createNewProject = title => {
		if (title.length === 0) return
		handleProjectCreate(title)

		setShowNewProjectForm(false)
	}

	const removeProject = projectID => {
		if (projectID === currentProject)
			dispatch(setCurrentProject(0))
		handleProjectRemove(projectID)
	}

	const editProject = (projectID, title) => {
		handleProjectEdit(projectID, title)
		setEditProjectID(null)
	}

	const select = projectID => {
		handleSelect(projectID)
		handleClose()
	}

	const close = e => {
		e.target.id === "backdrop" && handleClose()
	}

	return (
		<div 
			id="backdrop" 
			onClick={close} 
			className="fixed inset-0 w-full h-screen flex items-center z-40 bg-black bg-opacity-75"
		>
			<div className="relative max-w-3xl mx-auto rounded bg-gray-800/95 text-gray-300">
				<ProjectForm 
					type="search"
					placeholder="Search Project"
					value={search}
					onChange={setSearch}
					// on enter key select the first filtered project
					onSubmit={value => select(filteredProjects[0].id)}
				/>
				<ul className="h-[70vh] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700 divide-y divide-gray-700">
					{filteredProjects.map(project => (
						project.id === editProjectID ? (
							<ProjectForm 
								key={project.id}
								type="edit"
								value={project.title}
								onSubmit={title => editProject(project.id, title)}
							/>
						) : (
							<Project 
								key={project.id}
								id={project.id}
								title={project.title}
								timestamp={project.timestamp}
								onSelect={() => select(project.id)}
								onEdit={() => setEditProjectID(project.id)}
								onRemove={() => removeProject(project.id)}
							/>
						)
					))}
				</ul>

				<div className="shadow bg-gray-900/20">
				{showNewProjectForm ? (
					<ProjectForm 
						type="new"
						placeholder="Project Name"
						onSubmit={createNewProject}
						onClose={() => setShowNewProjectForm(false)}
					/>
				) : ( 
					<button 
						className="w-full flex items-center justify-center p-2 text-xl  focus:outline-none"
						onClick={() => setShowNewProjectForm(prev => !prev)}
					>
						<Plus className="mr-2" />
						<span>New Project</span>
					</button>
				)}
				</div>
			</div>
		</div>
	)
}