import actionTypes from './todoTypes'

export function addTodo(projectID, todo) {
	return {
		type: actionTypes.ADD_TODO,
		payload: { projectID, todo },
	}
}

export function addTodos(projectID, todos) {
	return {
		type: actionTypes.ADD_TODOS,
		payload: { projectID, todos },
	}
}

export function setTodos(todos) {
	return {
		type: actionTypes.SET_TODOS,
		payload: todos,
	}
}

export function updateTodo(projectID, todoID, updates) {
	return {
		type: actionTypes.UPDATE_TODO,
		payload: {projectID, todoID, updates},
	}
}

export function removeTodo(projectID, todoID) {
	return {
		type: actionTypes.REMOVE_TODO,
		payload: { projectID, todoID },
	}
}

export function removeCompletedTodos(projectID) {
	return {
		type: actionTypes.REMOVE_COMPLETED_TODOS,
		payload: projectID,
	}
}