import React from 'react'
import ChildComponent3 from './ChildComponent3'

export default function ParentComponet3() {
    const handlesubmit=()=>{
        alert("hello user")
    }
  return (
    <div>
        <button onClick={handlesubmit}>CLick me</button>
        <ChildComponent3 myfun={handlesubmit}/>
    </div>
  )
}
