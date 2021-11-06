import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodos, addProjects, themes } from './redux'
import 'virtual:windi.css'
import googleTasksApi from './googleTasksApi'
import { handleTodoCreate } from "./todoOperations"

import TodoContainer from './components/TodoContainer'
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoSettings from './components/TodoSettings'
import TodoForm from './components/TodoForm'
import Button from "./components/Button"
import Loader from "./components/Loader"

function App() {
  const [showSettings, setShowSettings] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { currentTheme, sortType, currentProject } = useSelector(state => state.settings)
  const todos = useSelector(state => 
    [...Object.values(state.todos[currentProject] || [])]
    .sort((a, b) => {
      switch(sortType){
        case "newest": return b.timestamp - a.timestamp
        case "oldest": return a.timestamp - b.timestamp 
        default: return 0
      }
    })
  )
  const projects = useSelector(state => state.projects)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projects = await googleTasksApi.listTaskLists()
        dispatch(addProjects(projects))
      } catch (err) {
        console.log("Not signed in")
      }
    }
    googleTasksApi.authorize(
      fetchProjects, 
      err => console.log("authorize failed:", err.message),
    )
  }, [])

  useEffect(() => {
    const fetchCurrentProjectTodos = async () => {
      // if project is not synced with google tasks don't proceed
      if (!projects[currentProject].synced) return
      // set loading to true only when todos are not cached
      !todos.length && setIsLoading(true)

      try {
        const todos = await googleTasksApi.listTasks(currentProject)
        dispatch(addTodos(currentProject, todos))
      } catch (err) {
        console.log("Not signed in")
      } 
      setIsLoading(false)
    } 
    fetchCurrentProjectTodos()
  }, [currentProject])


  return (
    <div className={`App min-h-screen bg-gradient-to-br ${themes[currentTheme]}`}>
      <div className="max-w-4xl mx-auto py-6 px-4 sm:p-10">
        <TodoContainer>
          <TodoHeader 
            toggleSettings={() => setShowSettings(show => !show)} 
          />
          {showSettings && <TodoSettings />}
          <TodoForm 
            type="new" 
            onSubmit={task => handleTodoCreate(currentProject, {task})} 
          />
          {isLoading ?
            <div className="w-full bg-gray-900/60 min-h-20">
              <Loader />  
            </div> 
            : <TodoList todos={todos} />
          }

        </TodoContainer>
      </div>
    </div>
  )
}

export default App
