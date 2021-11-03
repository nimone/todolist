import { getTodos, getSettings, getProjects } from "../db"

const persistedState = {
	todos: await getTodos() || [],
	projects: await getProjects() || [
		{
			id: Date.now(),
			timestamp: Date.now(),
			title: "TodoList",
		}
	],
	settings: await getSettings() || {
		currentTheme: 0,
		sortType: "newest",
		currentProject: 0,
		removeCompleted: false
	},
}

export default persistedState