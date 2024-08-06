import React, { useState } from 'react'

export default function StateEx6() {
    const[username,setUsername]=useState("");
    const[data,setData]=useState("");

    const handlesubmit=()=>{
        setData(username)
        setUsername("")
    }
  return (
    <div>
        <input type="text" name="" id="" placeholder='Enter your Name' onChange={(e)=>setUsername(e.target.value)} />

        <h1>{data}</h1>
        <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}
