import { combineReducers } from 'redux'
import todoReducer from './todos/todoReducer'
import projectReducer from './projects/projectReducer'
import settingReducer from './settings/settingReducer'

const rootReducer = combineReducers({
	todos: todoReducer,
	projects: projectReducer,
	settings: settingReducer,
})

export default rootReducer