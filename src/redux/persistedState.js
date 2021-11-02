import { getTodos, getSettings } from "../db"

const persistedState = {
	todos: await getTodos() || [],
	settings: await getSettings() || {
		currentTheme: 0,
		sortType: "newest",
		removeCompleted: false
	},
}

export default persistedState