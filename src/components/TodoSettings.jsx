import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Trash } from 'react-feather'

import { setTheme, setRemoveCompleted, removeCompletedTodos } from '../redux'
import { themes } from '../redux'

function TodoSettings() {
	const settings = useSelector(state => state.settings)
	const dispatch = useDispatch()

	return (
		<div className="flex flex-col w-full justify-start items-center py-2 px-3 text-white bg-gray-900/80 shadow-sm">
			{/*<h3 className="text-md font-bold">Settings</h3>*/}
			<SettingSection title="Themes:">
				{Object.entries(themes).map(([id, theme]) => (
					<ThemedButton 
						key={id}
						theme={theme}
						selected={settings.currentTheme === id}
						onClick={() => dispatch(setTheme(id))}
					/>
				))}
			</SettingSection>
			<SettingSection title="Remove Completed">
		    <input 
		    	type="checkbox" 
		    	className="cursor-pointer min-h-6 min-w-6" 
		    	onClick={e => dispatch(setRemoveCompleted(e.target.checked))}
					defaultChecked={settings.removeCompleted}
		    />
		    {settings.removeCompleted && (
		    	<div 
		    		onClick={() => dispatch(removeCompletedTodos())}
		    		className="flex ml-3 border-1 border-red-400 bg-red-400/10 px-2 py-1 cursor-pointer rounded">
		    		<Trash className="mr-1 text-red-400" title="Remove now" />
		    		<p>Remove now</p>
		    	</div>
		    )}
			</SettingSection>
		</div>
	)
}

function SettingSection({ title, ...props }) {
	return (
		<div className="flex flex-wrap items-center my-1 mr-auto">
			<h4 className="text-sm font-bold mr-2">{title}</h4>
			{props.children}
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