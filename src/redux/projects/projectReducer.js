import actionTypes from './projectTypes'

const initialState = {}

function projectReducer(state = initialState, action) {
	switch(action.type) {
		case actionTypes.SET_PROJECTS:
			const newProjects = {}
			action.payload.forEach(project => newProjects[project.id] = project)

			return newProjects
			
		case actionTypes.ADD_PROJECT: 
			return {
				...state,
				[action.payload.id]: action.payload,
			}

		case actionTypes.ADD_PROJECTS: 
			const projectsObj = {}
			action.payload.forEach(project => projectsObj[project.id] = project)

			return {
				...state,
				...projectsObj,
			}

		case actionTypes.UPDATE_PROJECT:
			return {
				...state,
				[action.payload.id]: {
					...state[action.payload.id],
					...action.payload.updates,
				},
			}

      return newState

    case actionTypes.REMOVE_PROJECT:
    	const newState = {...state}
    	delete newState[action.payload]
			return newState

		default: return state
	}
}

export default projectReducer