import { createStore } from 'redux'
import rootReducer from './rootReducer'
import persistedState from './persistedState'
import { setTodos, setSettings, setProjects } from "../db"

const store = createStore(rootReducer, persistedState)

store.subscribe(() => {
	const { todos, projects, settings } = store.getState()
  setTodos(todos)
  setProjects(projects)
  setSettings(settings)
})

export default store