import React, { useState } from "react"
import { ChevronDown } from "react-feather"
import { AnimatePresence, motion } from "framer-motion"

const dropdownVariants = {
  hidden: {
    height: 0,
    padding: 0,
    transition: { duration: 0.15, ease: "easeOut" },
  },
  visible: {
    height: "auto",
    transition: { duration: 0.15 },
  },
}

function Select({ text, className, children }) {
  const [showOptions, setShowOptions] = useState(false)

  return (
    <div className="relative">
      <button
        className={`flex items-center space-x-1 bg-transparent focus:(outline-none) ${className}`}
        onClick={() => setShowOptions((prev) => !prev)}
      >
        <span>{text}</span>
        <ChevronDown />
      </button>
      <AnimatePresence>
        {showOptions && (
          <motion.ul
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="overflow-y-hidden absolute z-10 mt-2 w-full bg-gray-800/80 text-white shadow-lg max-h-[70vh] max-w-64 rounded-b py-1 overflow-auto focus:outline-none scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700"
            onClick={() => setShowOptions(false)}
          >
            {children}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Option({ text, selected, ...props }) {
  return (
    <li
      className={`px-2 z-10 hover:bg-gray-900/60 border-b border-gray-400/20 py-1 cursor-pointer ${
        selected ? "bg-gray-900/90" : "bg-gray-800/70"
      }`}
      {...props}
    >
      {text}
    </li>
  )
}
export default Select
