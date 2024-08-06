import React, { useRef } from 'react'

export default function Task1() {
    const refername=useRef('');
    const refermail=useRef('')
    const handleSubmit=()=>{
let name=refername.current.value;
let email=refermail.current.value;

alert(`name=${name}-email=${email}`);

    }
  return (
    <div>
        <input type="text" placeholder='Enter Name' ref={refername}/>
        <input type="email" placeholder='Enter Email' ref={refermail}/>

        <button type='submit' onClick={handleSubmit}>Submit</button>

    </div>
  )
}
