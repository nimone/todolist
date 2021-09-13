import { themes } from './settings/settingTypes'

const persistedState = {
	todos: JSON.parse(localStorage.getItem("todos") || "[]"),
	settings: 
		localStorage.getItem("settings") 
		? JSON.parse(localStorage.getItem("settings")) 
		: {
				themes,
				currentTheme: 0
			}
}

export default persistedState