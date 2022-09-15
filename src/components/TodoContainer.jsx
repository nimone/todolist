import React from "react"

function TodoContainer(props) {
  return (
    <div className="flex flex-col max-h-[85vh] justify-center items-center shadow-xl">
      {props.children}
    </div>
  )
}
export default TodoContainer
