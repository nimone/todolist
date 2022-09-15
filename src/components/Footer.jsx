import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from "react"
import { CheckCircle } from "react-feather"

export default function Footer() {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <footer
      className={`
			flex items-center
			absolute bottom-3 right-3
			bg-gray-800/70 text-sm text-white
			p-2 rounded-lg
		`}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <a
        href="https://github.com/nimone/todolist"
        target="_blank"
        className="flex items-center"
      >
        <CheckCircle className="w-5 h-5 text-violet-300" />
      </a>
      <AnimatePresence>
        {showInfo && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            exit={{ width: 0 }}
            className="overflow-hidden"
          >
            <span className="mx-1 truncate">Google Tasks client by</span>
            <a
              href="https://nimo.pages.dev/"
              target="_blank"
              className="border-b-2 border-green-300"
            >
              nimo
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  )
}
