import { getTodos, getSettings, getProjects } from "../db"

const persistedState = {
	todos: await getTodos() || {},
	projects: await getProjects() || {
		0: {
			id: 0,
			synced: false,
			timestamp: Date.now(),
			title: "TodoList",
		}
	},
	settings: await getSettings() || {
		currentTheme: "randomImage",
		sortType: "newest",
		currentProject: 0,
		removeCompleted: false,
		showCompleted: false,
		isSignedIn: false,
	},
}

export default persistedState