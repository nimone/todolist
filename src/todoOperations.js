import googleTasksApi from "./googleTasksApi"
import store from "./redux/store"
import { addTodo, updateTodo, removeTodo } from './redux'
import { handleProjectUpdate } from "./projectOperations"

const isSignedIn = () => 
  store.getState().settings.isSignedIn

const isProjectSynced = projectID => 
  store.getState().projects[projectID].synced


export const handleTodoCreate = async (projectID, { task }) => {
  if (isSignedIn()) {
    const {id, title, updated} = await googleTasksApi.insertTask({
      taskListId: projectID,
      title: task,
    })

    store.dispatch(addTodo(projectID, {
      id,
      completed: false,
      timestamp: new Date(updated).getTime(),
      task: title,
    }))

  } else {
    const timestamp = Date.now()
    store.dispatch(addTodo(projectID, {
      id: timestamp,
      completed: false,
      timestamp,
      task,
    }))

    if (isProjectSynced(projectID)) {
      handleProjectUpdate(projectID, { synced: false })
    }
  }
}

export const handleTodoUpdate = (projectID, todoID, updateObj) => {
  store.dispatch(updateTodo(projectID, todoID, updateObj))
}

export const handleTodoRemove = (projectID, todoID) => {
  store.dispatch(removeTodo(projectID, todoID))

  if (isSignedIn()) {
    googleTasksApi.deleteTask({
      taskListId: projectID,
      taskId: todoID,
    })
  } else {
    if (isProjectSynced(projectID)) {
      handleProjectUpdate(projectID, { synced: false })
    }
  }
}

export const handleTaskEdit = (projectID, todoID, { task }) => {
  handleTodoUpdate(projectID, todoID, { task })

  if (isSignedIn()) {
    googleTasksApi.updateTask({
      taskListId: projectID,
      taskId: todoID,
      title: task,
    })
  } else {
    if (isProjectSynced(projectID)) {
      handleProjectUpdate(projectID, { synced: false })
    }
  }
}

export const handleTodoComplete = (projectID, todoID, {task, completed}) => {
  handleTodoUpdate(projectID, todoID, { completed })

  // if (settings.removeCompleted && completed) {
  //   setTimeout(() => {
  //     dispatch(removeTodo(todoID))
  //   }, 500)
  // }
  
  if (isSignedIn()) {
    googleTasksApi.updateTask({
      taskListId: projectID,
      taskId: todoID,
      // don't know why google tasks needs the title to complete the task
      title: task,
      status: completed ? "completed" : "needsAction",
    })
  } else {
    if (isProjectSynced(projectID)) {
      handleProjectUpdate(projectID, { synced: false })
    }
  }
}