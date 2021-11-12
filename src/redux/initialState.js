const initialTasks = [
	"✔️ Mark me completed.",
	"✏️ Edit to corrrect me.",
	"🗑️ Delete me.",
	"⚙️ Click the gear (top-right) to access settings.",
	"🟠 Change the current theme.",
	"🔄 Sync with your Google Tasks account.",
	"✅ View completed todos.",
	"🆘 In-case of emergency \"Reset & Clear cache\" is your friend.",
	"🔽 Sort the todos to \"Oldest First\".",
	"📗 Click \"TodoList ↕️\" (top-left) to access other projects / tasklists.",
]

const initialState = {
	todos: {
		0: {
			...initialTasks.map((task, i) => ({
				task, 
				id: i, 
				timestamp: initialTasks.length-i,
				completed: false,
			}))
		},
	},
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

export default initialState