import { getTodos, getSettings, getProjects } from "../db"

const persistedState = {
	todos: await getTodos() || [],
	projects: await getProjects() || [],
	settings: await getSettings() || {
		currentTheme: 0,
		sortType: "newest",
		currentProject: 0,
		removeCompleted: false
	},
}

export default persistedState