import React, { useState } from "react"
import { useSelector } from "react-redux"
import {
  handleTaskEdit,
  handleTodoComplete,
  handleTodoRemove,
} from "../todoOperations"

import TodoTask from "./TodoTask"
import TodoForm from "./TodoForm"
import Loader from "./Loader"

function TodoList() {
  const [editTodoId, setEditTodoId] = useState(null)
  const { currentProject, sortType, showCompleted } = useSelector(
    (state) => state.settings
  )

  const todos = useSelector((state) => {
    const todoArray = [...Object.values(state.todos[currentProject] || [])]
    todoArray.sort((a, b) => {
      switch (sortType) {
        case "newest":
          return b.timestamp - a.timestamp
        case "oldest":
          return a.timestamp - b.timestamp
        default:
          return 0
      }
    })
    const completedTodos = []
    const uncompletedTodos = todoArray.filter((todo) => {
      if (!todo.completed) return true
      completedTodos.push(todo)
      return false
    })

    return [...uncompletedTodos, ...(showCompleted ? completedTodos : [])]
  })

  return (
    <ul className="w-full text-white rounded-b overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700">
      {todos.map((todo) =>
        todo.id === editTodoId ? (
          <TodoForm
            key={todo.id}
            type="edit"
            task={todo.task}
            onSubmit={(task) => {
              handleTaskEdit(currentProject, todo.id, { task })
              setEditTodoId(null)
            }}
          />
        ) : (
          <TodoTask
            key={todo.id}
            todo={todo}
            onMark={(completed) =>
              handleTodoComplete(currentProject, todo.id, {
                task: todo.task,
                completed,
              })
            }
            onRemove={() => handleTodoRemove(currentProject, todo.id)}
            onEdit={() => setEditTodoId(todo.id)}
          />
        )
      )}
    </ul>
  )
}
export default TodoList
