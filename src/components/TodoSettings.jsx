import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setTheme } from '../redux'

function TodoSettings() {
	const settings = useSelector(state => state.settings)
	console.log(settings)
	const dispatch = useDispatch()

	return (
		<div className="flex flex-col w-full justify-start items-center py-2 px-3 text-white bg-gray-900/80 shadow-sm">
			{/*<h3 className="text-md font-bold">Settings</h3>*/}
			<div className="flex flex-wrap items-center mr-auto">
				<h4 className="text-sm font-bold mr-2">Themes:</h4>
				{Object.entries(settings.themes).map(([id, theme]) => (
					<ThemedButton 
						key={id}
						theme={theme}
						selected={settings.currentTheme === id}
						onClick={() => dispatch(setTheme(id))}
					/>
				))}
			</div>
		</div>
	)
}

function ThemedButton({ theme, onClick: handleClick, selected }) {
	return <button 
			className={`w-6 h-6 m-1 focus:outline-none rounded-full bg-gradient-to-br ${theme} ${selected ? "ring-2 ring-white/80" : ""}`} 
			onClick={handleClick}
		/>
}
export default TodoSettings