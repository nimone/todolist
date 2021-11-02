import { get, set, update } from 'idb-keyval';

const TODOS_DB = "todos"
const SETTINGS_DB = "settings"
const PROJECTS_DB = "projects"

export async function getTodos() {
  return await get(TODOS_DB)
}

export async function setTodos(todos) {
  return await set(TODOS_DB, todos)
}

export async function getSettings() {
  return await get(SETTINGS_DB)
}

export async function setSettings(settings) {
  return await set(SETTINGS_DB, settings)
}

export async function setProjects(projects) {
  return await set(PROJECTS_DB, projects)
}
export async function getProjects() {
  return await get(PROJECTS_DB)
}