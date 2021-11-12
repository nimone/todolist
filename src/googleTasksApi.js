import store from "./redux/store"
import { setSignedIn } from './redux'

// Client ID and API key from the Developer Console
const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest"]

// Authorization scopes required by the API multiple scopes can be
// included, separated by spaces.
const SCOPES = "https://www.googleapis.com/auth/tasks"


const googleTasksApi = {
  isLoaded() {
    return window.gapi && gapi.auth && typeof gapi.auth.getToken === 'function'
  },

  isSignedIn() {
    return gapi.auth2.getAuthInstance().isSignedIn.get()
  },

  async signIn() {
    await gapi.auth2.getAuthInstance().signIn()
  },

  logout() {
    gapi.auth2.getAuthInstance().signOut()
  },

  authorize(successFn, failureFn) {
    gapi.load('client:auth2', () => this.initClient(successFn, failureFn))
  },

  initClient(successFn, failureFn) {
    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    }).then(() => {
      successFn()
      gapi.auth2.getAuthInstance().isSignedIn
        .listen(status => {
          // Handle the initial sign-in state.
          console.log("Signin Successful?", status)
          store.dispatch(setSignedIn(status))
        })

      // handle signin state changes
      const isSignedIn = gapi.auth2.getAuthInstance().isSignedIn.get()
      console.log("Is signed in?", isSignedIn)
      store.dispatch(setSignedIn(isSignedIn))

    }, error => {
      failureFn(error)
      console.log(error)
    })
  },

  async listTaskLists() {
    return (
      await this.makeRequest(gapi.client.tasks.tasklists.list())
    ).items.map(taskList => ({
      id: taskList.id,
      synced: true,
      timestamp: new Date(taskList.updated).getTime(),
      title: taskList.title
    }))
  },

  async insertTaskList(title) {
    return this.makeRequest(gapi.client.tasks.tasklists.insert({
      title
    }))
  },

  async updateTaskList(taskListId, title) {
    return this.makeRequest(gapi.client.tasks.tasklists.update({
      tasklist: taskListId,
      id: taskListId,
      title
    }))
  },

  async deleteTaskList(taskListId) {
    return this.makeRequest(gapi.client.tasks.tasklists.delete({
      tasklist: taskListId
    }))
  },

  async listTasks(taskListId, ...params) {
    return (
      await this.makeRequest(gapi.client.tasks.tasks.list({
        tasklist: taskListId,
        showHidden: true,
        maxResults: 100,
        ...params,
      }))
    ).items.map(todo => ({
      id: todo.id,
      completed: todo.status === "completed",
      timestamp: new Date(todo.updated).getTime(),
      task: todo.title,
    }))
  },

  async insertTask({ taskListId, ...params }) {
    return this.makeRequest(gapi.client.tasks.tasks.insert({
      tasklist: taskListId,
      ...params
    }))
  },

  async updateTask({ taskListId, taskId, ...params }) {
    return this.makeRequest(gapi.client.tasks.tasks.update({
      tasklist: taskListId,
      task: taskId,
      id: taskId,
      ...params
    }))
  },

  async deleteTask({ taskListId, taskId }) {
    return this.makeRequest(gapi.client.tasks.tasks.delete({
      tasklist: taskListId,
      task: taskId,
      id: taskId
    }))
  },

  async makeRequest(requestObj) {
    return new Promise((resolve, reject) => {
      requestObj.execute(resp =>
        resp.error ? reject(resp.error) : resolve(resp.result)
      )
    })
  }
}

export default googleTasksApi