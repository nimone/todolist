import { combineReducers } from 'redux'
import todoReducer from './todos/todoReducer'
import settingReducer from './settings/settingReducer'

const rootReducer = combineReducers({
	todos: todoReducer,
	settings: settingReducer,
})

export default rootReducer