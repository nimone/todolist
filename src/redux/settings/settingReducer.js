import { actionTypes, themes } from './settingTypes'

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

		default: return state
	}
}

export default settingReducer