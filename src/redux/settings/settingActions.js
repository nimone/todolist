import { actionTypes } from './settingTypes'

export function setTheme(themeID) {
	return {
		type: actionTypes.SET_THEME,
		payload: themeID,
	}
}

export function setRemoveCompleted(bool) {
	return {
		type: actionTypes.SET_REMOVE_COMPLETED,
		payload: bool,
	}
}

export function setShowCompleted(bool) {
	return {
		type: actionTypes.SET_SHOW_COMPLETED,
		payload: bool,
	}
}

export function setSortType(sortType) {
	return {
		type: actionTypes.SET_SORT_TYPE,
		payload: sortType
	}
}

export function setCurrentProject(newProject) {
	return {
		type: actionTypes.SET_CURRENT_PROJECT,
		payload: newProject
	}
}

export function setSignedIn(bool) {
	return {
		type: actionTypes.SET_SIGNED_IN,
		payload: bool
	}
}