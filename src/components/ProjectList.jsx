import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Search } from "react-feather"

export default function ProjectList({ handleSelect, handleClose }) {
	const projects = useSelector(state => Object.values(state.projects))
	const dispatch = useDispatch()
	const [filteredProjects, setFilteredProjects] = useState(projects)
	const [search, setSearch] = useState("")

	useEffect(() => {
		setFilteredProjects(
			projects.filter(project => 
				project.title.toLowerCase().includes(search.toLowerCase())
		))
	}, [search])

	// close with Esc
 	useEffect(() => {
    window.addEventListener(
    	'keydown', 
    	e => e.keyCode === 27 && handleClose()
    )
	  return () => window.removeEventListener('keydown', close)
  },[])

	// on enter key select the first filtered project
	const handleSubmit = e => {
		e.preventDefault()
		handleSelect(filteredProjects[0].id)
		handleClose()
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

				<form onSubmit={handleSubmit} className="p-2 shadow">
					<div className="flex items-center">
						<Search className="w-5 h-5 mr-2" />
						<input
							className="bg-transparent border-none outline-none text-xl placeholder-gray-600" 
							type="text" 
							placeholder="Search Projects" 
							value={search}
							onChange={e => setSearch(e.target.value)}
							autoFocus
						/>
					</div>
				</form>
				<section className="h-[70vh] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700 divide-y divide-gray-700">
					{filteredProjects.map(project => (
						<div 
							key={project.id} 
							onClick={() => select(project.id)}
							className="flex justify-between p-2 cursor-pointer transition-color duration-100 hover:(bg-gray-700/20 border-l-2 border-gray-700)"
						>
							<span className="text-sm">
								<h4 className="text-lg">{project.title}</h4>
								<p className="text-gray-600">{new Date(project.timestamp).toLocaleString()}</p>
							</span>
						</div>
					))}
				</section>
			</div>
		</div>
	)
}