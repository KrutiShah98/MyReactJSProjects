import React, { useState } from 'react'

export default function StateNAmeDisplay() {

    const[firstname,setFirstname]=useState("")
    const[lastname,setlastname]=useState("")
    const[data,setData]=useState("")

    const handlebutton=()=>{
        setData(firstname +" "+ lastname)
        setFirstname("")
        setlastname("")
    }
    
  return (
    <div>
        <input type="text" placeholder='enter first name' value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
        <br />
        <input type="text" placeholder='enter last name' value={lastname} onChange={(e)=>setlastname(e.target.value)}/>
        <br />
        <h1>Hello,{data}</h1>
<button onClick={handlebutton}>Add</button>

    </div>
  )
}
