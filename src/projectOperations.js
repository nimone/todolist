import googleTasksApi from "./googleTasksApi"
import store from "./redux/store"
import { addProject, removeProject, updateProject } from './redux'


export const handleProjectCreate = async (title) => {
	const {id, updated} = await googleTasksApi.insertTaskList(title)
	
	store.dispatch(addProject({
		id,
		title,
		timestamp: new Date(updated).getTime(),
	}))
}

export const handleProjectUpdate = (projectID, updateObj) => {
	store.dispatch(updateProject(projectID, updateObj))
}

export const handleProjectEdit = async (projectID, title) => {
	handleProjectUpdate(projectID, { title })
	await googleTasksApi.updateTaskList(projectID, title)
}

export const handleProjectRemove = async (projectID) => {
	store.dispatch(removeProject(projectID))
	await googleTasksApi.deleteTaskList(projectID)
}