import React from 'react'
import 'virtual:windi.css'

import useLocalStorage from './useLocalStorage'

import TodoContainer from './components/TodoContainer'
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'


function App() {
  const [todos, setTodos] = useLocalStorage("todos", [])

  const markTodo = (id, isDone) => {
    setTodos(todos => {
      const todoIdx = todos.findIndex(t => t.id === id)
      const newTodos = [...todos]
      newTodos[todoIdx].done = isDone

      return newTodos
    }) 
  }

  const addTodo = task => {
    const timestamp = Date.now()
    const newTodo = {
      task,
      timestamp,
      id: timestamp,
      done: false
    }
    setTodos(todos => [...todos, newTodo])
  }

  const removeTodo = id => {
    setTodos(todos => [...todos.filter(todo => todo.id !== id)])
  }

  const updateTodo = (id, task) => {
    setTodos(todos => {
      const todoIdx = todos.findIndex(t => t.id === id)
      const newTodos = [...todos]
      newTodos[todoIdx].task = task

      return newTodos
    }) 
  }

  return (
    <div className="App h-screen bg-gradient-to-br from-violet-300 via-blue-300 to-emerald-300">
      <div className="max-w-4xl mx-auto py-6 px-4 sm:p-10">
        <TodoContainer>
          <TodoHeader title="TodoList" />
          <TodoList 
            todos={todos} 
            onCreateTodo={addTodo} 
            onMark={markTodo} 
            onRemove={removeTodo}
            onEdit={updateTodo}
          />
        </TodoContainer>
      </div>
    </div>
  )
}

export default App
