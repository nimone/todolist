import actionTypes from './projectTypes'

const initialState = []

function projectReducer(state = initialState, action) {
	switch(action.type) {
		case actionTypes.SET_PROJECTS:
			return action.payload
			
		case actionTypes.ADD_PROJECT: 
			return [
				...state,
				action.payload,
			]		

		case actionTypes.ADD_PROJECTS: 
			return [
				...state,
				...action.payload,
			]

		case actionTypes.UPDATE_PROJECT:
      const projectIdx = state.findIndex(p => p.id === action.payload.id)
      const newState = [...state]
      newState[projectIdx] = {
      	...newState[projectIdx],
      	...action.payload.updates
      }

      return newState

    case actionTypes.REMOVE_PROJECT:
    	return [...state.filter(project => project.id !== action.payload)]

		default: return state
	}
}

export default projectReducer