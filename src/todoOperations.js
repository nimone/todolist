import googleTasksApi from "./googleTasksApi"
import store from "./redux/store"
import { addTodo, updateTodo, removeTodo } from './redux'


export const handleTodoCreate = async (projectID, { task }) => {
  const {id, title, updated} = await googleTasksApi.insertTask({
    taskListId: projectID,
    title: task,
  })

  store.dispatch(addTodo(projectID, {
    id,
    completed: false,
    timestamp: new Date(updated),
    task: title,
  }))
}

export const handleTodoUpdate = (projectID, todoID, updateObj) => {
  store.dispatch(updateTodo(projectID, todoID, updateObj))
}

export const handleTodoRemove = (projectID, todoID) => {
  store.dispatch(removeTodo(projectID, todoID))
  googleTasksApi.deleteTask({
    taskListId: projectID,
    taskId: todoID,
  })
}

export const handleTaskEdit = (projectID, todoID, { task }) => {
  handleTodoUpdate(projectID, todoID, { task })
  googleTasksApi.updateTask({
    taskListId: projectID,
    taskId: todoID,
    title: task,
  })
}

export const handleTodoComplete = (projectID, todoID, {task, completed}) => {
  handleTodoUpdate(projectID, todoID, { completed })

  // if (settings.removeCompleted && completed) {
  //   setTimeout(() => {
  //     dispatch(removeTodo(todoID))
  //   }, 500)
  // }
  
  // don't know why google tasks needs the title to complete the task
  googleTasksApi.updateTask({
    taskListId: projectID,
    taskId: todoID,
    title: task,
    status: completed ? "completed" : "needsAction",
  })
}