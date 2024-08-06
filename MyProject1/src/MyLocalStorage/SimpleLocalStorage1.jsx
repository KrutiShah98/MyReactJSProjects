import React, { useState } from 'react'

export default function SimpleLocalStorage1() {

    const [name,setname]=useState("")
    const [subject,setsubject]=useState("")
    const [msg,setmsg]=useState("")
    const handlesubmit=()=>{
localStorage.setItem(name,subject);
setmsg("Succcesfully record added")
    }
  return (
    <div>
        <input type="text" placeholder='Enter name :' onChange={(e)=>setname(e?.target?.value)} />
        <input type="text" placeholder='Enter subject :'onChange={(e)=>setsubject(e?.target?.value)} />
<button onClick={handlesubmit}>Submit</button>
<h2>{msg}</h2>
    </div>
  )
}
