import React from 'react'

function TodoContainer(props) {
  return (
    <div className="flex flex-col justify-center items-center shadow-xl">
      {props.children}
    </div>
  )
}
export default TodoContainer