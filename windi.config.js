import { themes } from 'src/redux/settings/settingTypes'

export default {
	darkMode: 'class',
  extract: {
    include: ['./index.html', 'src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
  safelist: [
    Object.values(themes)
  ]
}