import { actionTypes } from './settingTypes'

function settingReducer(state = {}, action) {
	switch(action.type) {
		case actionTypes.SET_THEME:
			return {
				...state,
				currentTheme: action.payload
			}

		case actionTypes.SET_REMOVE_COMPLETED:
			return {
				...state,
				removeCompleted: action.payload
			}

		case actionTypes.SET_SHOW_COMPLETED:
			return {
				...state,
				showCompleted: action.payload
			}

		case actionTypes.SET_SORT_TYPE:
			return {
				...state,
				sortType: action.payload
			}

		case actionTypes.SET_CURRENT_PROJECT:
			return {
				...state,
				currentProject: action.payload
			}

		default: return state
	}
}

export default settingReducer