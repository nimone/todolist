import { getTodos, getSettings, getProjects } from "../db"
import initialState from "./initialState"

const persistedState = {
	todos: await getTodos() || initialState.todos,
	projects: await getProjects() || initialState.projects,
	settings: await getSettings() || initialState.settings,
}

export default persistedState