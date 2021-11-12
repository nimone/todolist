import { getTodos, getSettings, getProjects } from "../db"

export const initialState = {
	todos: {},
	projects: {
		0: {
			id: 0,
			synced: false,
			timestamp: Date.now(),
			title: "TodoList",
		}
	},
	settings: {
		currentTheme: "randomImage",
		sortType: "newest",
		currentProject: 0,
		removeCompleted: false,
		showCompleted: false,
		isSignedIn: false,
	},
}

const persistedState = {
	todos: await getTodos() || initialState.todos,
	projects: await getProjects() || initialState.projects,
	settings: await getSettings() || initialState.settings,
}

export default persistedState