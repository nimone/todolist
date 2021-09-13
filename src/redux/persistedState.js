const persistedState = {
	todos: JSON.parse(localStorage.getItem("todos") || "[]"),
	settings: 
		localStorage.getItem("settings") 
		? JSON.parse(localStorage.getItem("settings")) 
		: {
				currentTheme: 0,
				sortType: "newest",
				removeCompleted: false
			}
}

export default persistedState