import { createStore } from 'redux'
import rootReducer from './rootReducer'

let persistedState = {
	todos: JSON.parse(localStorage.getItem("todos") || "[]")
}

const store = createStore(rootReducer, persistedState)

store.subscribe(() => {
	const { todos } = store.getState()
  localStorage.setItem("todos", JSON.stringify(todos))
})

export default store