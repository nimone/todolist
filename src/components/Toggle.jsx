import React, { useState, useEffect } from 'react'
import { Switch, Transition } from '@headlessui/react'
import { Check } from "react-feather"

export default function Toggle({ toggled, onToggle }) {
  const [enabled, setEnabled] = useState(toggled)

  useEffect(() => {
  	onToggle(enabled)
  }, [enabled])

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
      	enabled ? "bg-white animated animate-jello" : ""
      }
      relative inline-flex items-center h-[22px] w-[22px] rounded-full border border-white/60 focus:outline-none transform transition-transform`}
    >
      <span className="sr-only">Toggle completed</span>
      <Transition
        show={enabled}
        enter="transition-opacity ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
       >
	      <Check
	      	className="inline-block text-gray-600 mt-1.8 ml-0.5"
	      	size={16}
	      	strokeWidth={4}
	      	fillRule="evenodd"
	      />
      </Transition>
    </Switch>
  )
}
