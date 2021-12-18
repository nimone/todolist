import React from "react"
import { CheckCircle } from "react-feather"

export default function Footer() {
  return (
    <footer
      className={`
			flex items-center
			absolute bottom-3 right-3
			bg-gray-800/70 text-sm text-white
			p-2 rounded-lg
		`}
    >
      <a
        href="https://github.com/nimone/todolist"
        target="_blank"
        className="flex items-center"
      >
        <CheckCircle className="w-5 h-5 text-violet-300" />
      </a>
      <span className="mx-1">Google Tasks client by</span>
      <a
        href="https://nimo.pages.dev/"
        target="_blank"
        className="border-b-2 border-green-300"
      >
        nimo
      </a>
    </footer>
  )
}
