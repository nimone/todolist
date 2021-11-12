import { combineReducers } from 'redux'
import todoReducer from './todos/todoReducer'
import projectReducer from './projects/projectReducer'
import settingReducer from './settings/settingReducer'
import { initialState } from './persistedState'

const appReducer = combineReducers({
	todos: todoReducer,
	projects: projectReducer,
	settings: settingReducer,
})

const rootReducer = (state, action) => {
	if (action.type === "CLEAR_STORE") {
		console.log("clearing store...")
		return appReducer(initialState, action)
	}
	return appReducer(state, action)
}

export default rootReducer