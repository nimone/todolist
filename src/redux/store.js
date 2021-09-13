import { createStore } from 'redux'
import rootReducer from './rootReducer'
import persistedState from './persistedState'

const store = createStore(rootReducer, persistedState)

store.subscribe(() => {
	const { todos, settings } = store.getState()
  localStorage.setItem("todos", JSON.stringify(todos))
  localStorage.setItem("settings", JSON.stringify(settings))
})

export default store