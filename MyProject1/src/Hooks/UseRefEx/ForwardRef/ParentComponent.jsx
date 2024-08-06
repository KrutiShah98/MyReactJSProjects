import React, { useRef } from 'react'
import ChildComponent from './ChildComponent';

export default function ParentComponent() {
    const inputRef=useRef();
    const handlesubmit=()=>{
        inputRef.current.focus();
        console.log(inputRef.current.value);
    }
  return (
    <div>
        <h1>parent component</h1>
        <ChildComponent ref={inputRef}/>
        {/* <input type="text" ref={inputRef}/> */}
        <button onClick={handlesubmit}>CLick here</button>
    </div>
  )
}
