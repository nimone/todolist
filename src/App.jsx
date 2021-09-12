import React, { useState, useEffect } from 'react'
import 'virtual:windi.css'

import TodoContainer from './components/TodoContainer'
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'

const todosLocal = [    
  {id:0, done:false, task: "Start reading sem 4 books"},
  {id:1, done:false, task: "Make notes for react hooks"},
  {id:2, done:true, task: "Flutter dev roadmap"},
  {id:3, done:false, task: "Finish Nextjs firebase course"}
]

function App() {
  const [todos, setTodos] = useState([])
  const [showTodoInput, setShowTodoInput] = useState(false)

  const markTodo = (id, isDone) => {
    setTodos(todos => {
      const todoIdx = todos.findIndex(t => t.id === id)
      return [
        ...todos.slice(0, todoIdx),
        { ...todos[todoIdx], done: isDone },
        ...todos.slice(todoIdx + 1),
      ]
    }) 
  }

  const addTodo = newTodo => {
    setTodos(todos => [...todos, newTodo])
  }

  const removeTodo = id => {
    setTodos(todos => [...todos.filter(todo => todo.id !== id)])
  }

  useEffect(() => {
    setTodos(todosLocal)
  }, [])

  return (
    <div className="App h-screen bg-gradient-to-br from-violet-300 via-blue-300 to-emerald-300">
      <div className="max-w-4xl mx-auto p-10">
        <TodoContainer>
          <TodoHeader onAdd={() => setShowTodoInput(true)} />
          <TodoList 
            todos={todos} 
            showCreateTodo={showTodoInput}
            setShowCreateTodo={setShowTodoInput}
            onCreateTodo={addTodo} 
            onMark={markTodo} 
            onRemove={removeTodo}
          />
        </TodoContainer>
      </div>
    </div>
  )
}

export default App
