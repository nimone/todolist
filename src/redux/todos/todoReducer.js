import actionTypes from './todoTypes'

const initialState = {}

function todoReducer(state = initialState, action) {
	let newProject

	switch(action.type) {
		case actionTypes.SET_TODOS:
		 	const newTodos = {}
		 	action.payload.todos.forEach(todo => newTodos[todo.id] = todo)

			return {
				...state,
				[action.payload.projectID]: newTodos,
			}
			
		case actionTypes.ADD_TODO: 
			return {
				...state,
				[action.payload.projectID]: {
					...state[action.payload.projectID],
					[action.payload.todo.id]: action.payload.todo,
				}
			}

		case actionTypes.ADD_TODOS: 
		 	const todos = {}
		 	action.payload.todos.forEach(todo => todos[todo.id] = todo)

			return {
				...state,
				[action.payload.projectID]: {
					...state[action.payload.projectID],
					...todos,
				}
			}

		case actionTypes.UPDATE_TODO:
			const { projectID, todoID, updates } = action.payload
      return {
      	...state, 
      	[projectID]: {
      		...state[projectID],
      		[todoID]: {
      			...state[projectID][todoID],
      			...updates,
      		},
      	},
			}

    case actionTypes.REMOVE_TODO:
    	newProject = {...state[action.payload.projectID]}
    	delete newProject[action.payload.todoID]

    	return {
    		...state,
    		[action.payload.projectID]: newProject,
    	}

    case actionTypes.REMOVE_COMPLETED_TODOS:
    	newProject = {...state[action.payload]}
			Object.entries(newProject).forEach(([id, todo]) => 
    		todo.completed && delete newProject[id]
    	)

    	return {
    		...state,
    		[action.payload]: newProject
    	}

		default: return state
	}
}

export default todoReducer