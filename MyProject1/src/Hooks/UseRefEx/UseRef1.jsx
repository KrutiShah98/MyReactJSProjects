import React, { useRef } from 'react'

export default function UseRef1() {
const inputref=useRef(null);
const handleSubmit=()=>{
    inputref.current.focus()
}

  return (
    <>
    <input ref={inputref} type="text" placeholder='Enter Name:'/>
    <button onClick={handleSubmit}>Click here</button>
    </>
  )
}
