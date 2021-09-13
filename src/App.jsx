import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import 'virtual:windi.css'

import TodoContainer from './components/TodoContainer'
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoSettings from './components/TodoSettings'


function App() {
  const [showSettings, setShowSettings] = useState(false)
  const todos = useSelector(state => state.todos)
  const currentTheme = useSelector(state => state.settings.themes[state.settings.currentTheme])

  return (
    <div className={`App h-screen bg-gradient-to-br ${currentTheme}`}>
      <div className="max-w-4xl mx-auto py-6 px-4 sm:p-10">
        <TodoContainer>
          <TodoHeader 
            title="TodoList" 
            toggleSettings={() => setShowSettings(show => !show)} 
          />
          {showSettings && <TodoSettings />}
          <TodoList todos={todos} />

        </TodoContainer>
      </div>
    </div>
  )
}

export default App
