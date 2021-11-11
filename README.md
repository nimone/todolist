# [Todolist](https://react-todolist.pages.dev/) 📝
A simple and accessible Google Tasks client with a beautiful interface inspired from todoist. It can also act as a stand alone todolist (without Google Tasks sync).

**Todos:**
![Todos screenshot](https://i.ibb.co/cTtGML0/Screenshot-from-2021-11-11-13-48-26.png)

**Projects:**
![Projects screenshot](https://i.ibb.co/j35gyVz/Screenshot-from-2021-11-11-13-51-14.png)

---
## Features 🌟
- Sync all your todos and projects with Google Tasks.
- Stores your data securely in your browser's inbuilt Indexed Database.
- Multiple theme options to customize it to your liking (currently 8 themes).
- Useful sorting options (currently 2 i.e. Newest First or Oldest First).
- Simple & pretty interface - create, edit & delete just the way you expect.

---
## Technologies used 🛠️
- [React](https://es.reactjs.org/) - Front-End JavaScript library
- [Redux](https://redux.js.org/) - A Predictable State Container for JS Apps
- [Windi CSS](https://windicss.org/) - Next generation utility-first CSS framework
- [Feather Icons](https://feathericons.com/) - Simply beautiful open source icons
- [Vite](https://vitejs.dev/) - Frontend Tooling

---
## Build yourself
1. Clone this repo
```bash
git clone https://github.com/nimone/todolist && cd todolist
```
2. Install project dependecies
```bash
npm install
```
3. Create `.env.local` file to store the [Google client ID & API key](https://developers.google.com/tasks/firstapp#register-your-project)
```
VITE_GOOGLE_CLIENT_ID=<client-id>
VITE_GOOGLE_API_KEY=<api-key>
```
4. Build the project and start a local server
```bash
npm run build && npm run serve
```
> Or, run a development server using `npm run dev`