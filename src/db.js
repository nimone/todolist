import { get, set, update } from 'idb-keyval';

const TODOS_DB = "todos"
const SETTINGS_DB = "settings"

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