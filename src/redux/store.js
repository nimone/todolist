import { createStore } from 'redux'
import rootReducer from './rootReducer'
import persistedState from './persistedState'
import { setTodos, setSettings } from "../db"

const store = createStore(rootReducer, persistedState)

store.subscribe(() => {
	const { todos, settings } = store.getState()
  setTodos(todos)
  setSettings(settings)
})

export default store