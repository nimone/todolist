import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, themes } from './redux'
import 'virtual:windi.css'

import TodoContainer from './components/TodoContainer'
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoSettings from './components/TodoSettings'
import TodoForm from './components/TodoForm'


function App() {
  const [showSettings, setShowSettings] = useState(false)
  const sortType = useSelector(state => state.settings.sortType)
  const todos = useSelector(state => state.todos.sort((a, b) => {
    return sortType === "newest" 
      ? b.timestamp - a.timestamp
      : a.timestamp - b.timestamp 
  }))
  const currentTheme = useSelector(state => themes[state.settings.currentTheme])
  const dispatch = useDispatch()

  const createTodo = task => {
    const timestamp = Date.now()
    dispatch(addTodo({
      task,
      timestamp,
      id: timestamp,
      completed: false
    }))
  }

  return (
    <div className={`App h-screen bg-gradient-to-br ${currentTheme}`}>
      <div className="max-w-4xl mx-auto py-6 px-4 sm:p-10">
        <TodoContainer>
          <TodoHeader 
            title="TodoList" 
            toggleSettings={() => setShowSettings(show => !show)} 
          />
          {showSettings && <TodoSettings />}
          <TodoForm type="new" task="" onSubmit={createTodo} />
          <TodoList todos={todos} />

        </TodoContainer>
      </div>
    </div>
  )
}

export default App
