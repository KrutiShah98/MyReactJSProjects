import React from 'react'

export default function ChildComponent5(props) {
  return (
    <div>
<h1>{props.subject}</h1>
    </div>
  )
}
ChildComponent5.defaultProps={
    subject:"react js"
}
