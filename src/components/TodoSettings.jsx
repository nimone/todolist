import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Trash, CloudOff, Aperture } from 'react-feather'

import { setTheme, setRemoveCompleted, setShowCompleted, removeCompletedTodos, addProjects } from '../redux'
import { themes } from '../redux'
import Button from './Button'
import googleTasksApi from '../googleTasksApi'

function TodoSettings() {
	const settings = useSelector(state => state.settings)
	const dispatch = useDispatch()

	const syncGoogleTasks = async () => {
		await googleTasksApi.signIn()
  	dispatch(addProjects(await googleTasksApi.listTaskLists()))
	}

	return (
		<div className="flex flex-col w-full justify-start items-center py-2 px-3 text-white bg-gray-900/80 shadow-sm">
			<SettingSection title="Themes:">
				{Object.entries(themes).map(([id, theme]) => (
					<ThemedButton 
						key={id}
						theme={id === "randomImage" ? "" : theme}
						selected={settings.currentTheme === id}
						onClick={() => dispatch(setTheme(id))}
					>{id === "randomImage" && <Aperture />}
					</ThemedButton>
				))}
			</SettingSection>
			
		{/* May not work now with the Google Tasks API */}
{/*			<SettingSection title="Remove Completed">
		    <input 
		    	type="checkbox" 
		    	className="cursor-pointer min-h-6 min-w-6" 
		    	onClick={e => dispatch(setRemoveCompleted(e.target.checked))}
					defaultChecked={settings.removeCompleted}
		    />
		    {settings.removeCompleted && (
		    	<Button 
		    		onClick={() => dispatch(removeCompletedTodos())}
		    		className="ml-3 border-1 border-red-400">
		    		<Trash className="w-5 h-5 mr-2 text-red-400" title="Remove now" />
		    		<p>Remove now</p>
		    	</Button>
		    )}
			</SettingSection>*/}
			<SettingSection title="Show Completed">
				<input 
		    	type="checkbox" 
		    	className="cursor-pointer min-h-6 min-w-6" 
		    	onClick={e => dispatch(setShowCompleted(e.target.checked))}
					defaultChecked={settings.showCompleted}
		    />
			</SettingSection>
			<SettingSection>
      {settings.isSignedIn ? (
        <Button onClick={googleTasksApi.logout}>
        	<CloudOff className="w-5 h-5 mr-2" />
        	<span>Unsync with Tasks</span>
        </Button>
      ) : (
        <Button onClick={syncGoogleTasks}>
          <img className="w-5 h-5 mr-2" src="https://raw.githubusercontent.com/AliasIO/wappalyzer/master/src/drivers/webextension/images/icons/Google.svg" />
          <span>Sync with Tasks</span>
        </Button>
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

function ThemedButton({ children, theme="", selected, ...props }) {
	return <button 
			className={`w-6 h-6 m-1 focus:outline-none rounded-full ${theme ? "bg-gradient-to-br" : ""} ${theme} ${selected ? "ring-2 ring-white/80" : ""}`} 
			{...props}>
			{children}
		</button>
}
export default TodoSettings