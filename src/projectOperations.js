import googleTasksApi from "./googleTasksApi"
import store from "./redux/store"
import { addProject, removeProject, updateProject, setProjects } from './redux'

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

export const handleProjectsSync = async (override) => {
	if (!isSignedIn()) return false

	const localProjects = store.getState().projects
	const syncedProjects = {};
	(await googleTasksApi.listTaskLists())
	.forEach(project => syncedProjects[project.id] = project)
	
	const newLocalProjects = {...localProjects}
	const resolvedConflictingProjects = []

	for (const pid in localProjects) {
		const localProject = localProjects[pid]
		const syncedProject = syncedProjects[pid]

		if (!syncedProject) {
			// pure local project (doesn't exists on google tasks)

			// const { title } = localProjects[pid]
			// const { id, updated } = await googleTasksApi.insertTaskList(title)

			// resolvedConflictingProjects.push({
			// 	id,
			// 	title,
			// 	timestamp: new Date(updated).getTime(),
			// 	synced: true,
			// })
			// delete newLocalProjects[pid]
		} else if (
			!localProject.synced
			&& localProject.title !== syncedProject.title
		) {
			// projects containing changes not synced with google tasks
			if (override) { // override google tasks changes
				await googleTasksApi.updateTaskList(projectID, localProject.title)
			} else { // accept google tasks changes & delete the local one
				delete newLocalProjects[pid]
			}
		}
	}
	console.log([
		...Object.values({...syncedProjects,...newLocalProjects}),
		...resolvedConflictingProjects,
	])
	store.dispatch(setProjects([
		...Object.values({...syncedProjects, ...newLocalProjects}),
		...resolvedConflictingProjects,
	]))
	return true
}