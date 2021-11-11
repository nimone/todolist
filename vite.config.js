import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import WindiCSS from 'vite-plugin-windicss'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    WindiCSS(),
    VitePWA({
      manifest: {
        name: 'React TodoList',
        short_name: 'TodoList',
        description: 'A simple, pretty, and actually useful todolist that privately stores your data.',
      }
    })
  ],
  build: {
    minify: "esbuild",
    target: "esnext",
  }
})
