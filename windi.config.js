import { themes } from './src/redux'

export default {
	darkMode: 'class',
  extract: {
    include: ['./index.html', 'src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
  safelist: [
    Object.values(themes)
  ],
  plugins: [
    require('@windicss/plugin-scrollbar'),
  ]
}