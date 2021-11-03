import actionTypes from './projectTypes'

export function addProject(project) {
	return {
		type: actionTypes.ADD_PROJECT,
		payload: project
	}
}

export function addProjects(projects) {
	return {
		type: actionTypes.ADD_PROJECTS,
		payload: projects
	}
}

export function setProjects(projects) {
	return {
		type: actionTypes.SET_PROJECTS,
		payload: projects
	}
}

export function updateProject(id, updates) {
	return {
		type: actionTypes.UPDATE_PROJECT,
		payload: {id, updates}
	}
}

export function removeProject(id) {
	return {
		type: actionTypes.REMOVE_PROJECT,
		payload: id
	}
}