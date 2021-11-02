import actionTypes from './todoTypes'

const initialState = []

function todoReducer(state = initialState, action) {
	switch(action.type) {
		case actionTypes.SET_TODOS:
			return action.payload
			
		case actionTypes.ADD_TODO: 
			return [
				...state,
				action.payload,
			]

		case actionTypes.UPDATE_TODO:
      const todoIdx = state.findIndex(t => t.id === action.payload.id)
      const newState = [...state]
      newState[todoIdx] = {
      	...newState[todoIdx],
      	...action.payload.updates
      }

      return newState

    case actionTypes.REMOVE_TODO:
    	return [...state.filter(todo => todo.id !== action.payload)]

    case actionTypes.REMOVE_COMPLETED_TODOS:
    	return [...state.filter(todo => !todo.completed)]

		default: return state
	}
}

export default todoReducer