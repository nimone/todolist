import React from 'react'
import { useSelector } from 'react-redux'
import 'virtual:windi.css'

import TodoContainer from './components/TodoContainer'
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'


function App() {
  const todos = useSelector(state => state.todos)

  return (
    <div className="App h-screen bg-gradient-to-br from-violet-300 via-blue-300 to-emerald-300">
      <div className="max-w-4xl mx-auto py-6 px-4 sm:p-10">
        <TodoContainer>
          <TodoHeader title="TodoList" />
          <TodoList todos={todos} />

        </TodoContainer>
      </div>
    </div>
  )
}

export default App
