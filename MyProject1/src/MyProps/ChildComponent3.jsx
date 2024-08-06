import React from 'react'

export default function ChildComponent3(props) {
  return (
    <div>
        <button onClick={props.myfun}>click me for child component</button>
    </div>
  )
}
