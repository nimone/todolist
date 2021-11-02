import actionTypes from './projectTypes'

const initialState = [
	{
		id: new Date(),
		timestamp: new Date(),
		title: "TodoList",
	}
]

function projectReducer(state = initialState, action) {
	switch(action.type) {
		case actionTypes.SET_PROJECTS:
			return action.payload
			
		case actionTypes.ADD_PROJECT: 
			return [
				...state,
				action.payload,
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