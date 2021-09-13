import { actionTypes } from './settingTypes'

export function setTheme(themeID) {
	return {
		type: actionTypes.SET_THEME,
		payload: themeID,
	}
}