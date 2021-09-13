import actionTypes from './todoTypes'

export function addTodo(todo) {
	return {
		type: actionTypes.ADD_TODO,
		payload: todo
	}
}

export function updateTodo(id, updates) {
	return {
		type: actionTypes.UPDATE_TODO,
		payload: {id, updates}
	}
}

export function removeTodo(id) {
	return {
		type: actionTypes.REMOVE_TODO,
		payload: id
	}
}