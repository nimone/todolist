import { combineReducers } from 'redux'
import todoReducer from './todos/todoReducer'

const rootReducer = combineReducers({
	todos: todoReducer,
})

export default rootReducer