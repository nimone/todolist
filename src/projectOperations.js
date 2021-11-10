import googleTasksApi from "./googleTasksApi"
import store from "./redux/store"
import { addProject, removeProject, updateProject } from './redux'

const isSignedIn = () => 
  store.getState().settings.isSignedIn

const isProjectSynced = projectID => 
  store.getState().projects[projectID].synced


export const handleProjectCreate = async (title) => {
  if (isSignedIn()) {
		const {id, updated} = await googleTasksApi.insertTaskList(title)
		
		store.dispatch(addProject({
			id,
			title,
			timestamp: new Date(updated).getTime(),
			synced: true,
		}))

	} else {
		const timestamp = Date.now()
		store.dispatch(addProject({
			id: timestamp,
			title,
			timestamp,
			synced: false,
		}))
	}
}

export const handleProjectUpdate = (projectID, updateObj) => {
	store.dispatch(updateProject(projectID, updateObj))
}

export const handleProjectEdit = async (projectID, title) => {
	handleProjectUpdate(projectID, { title })
	
  if (isSignedIn()) {
		await googleTasksApi.updateTaskList(projectID, title)
	} else {
		if (isProjectSynced(projectID)) {
			handleProjectUpdate(projectID, { synced: false })
		}
	}
}

export const handleProjectRemove = async (projectID) => {
	store.dispatch(removeProject(projectID))

  if (isSignedIn()) {
		await googleTasksApi.deleteTaskList(projectID)
	} else {
		if (isProjectSynced(projectID)) {
			handleProjectUpdate(projectID, { synced: false })
		}
	}
}