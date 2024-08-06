import React, { useState } from 'react'
import Task12Child from './Task12Child'

export default function Task12DynamicdataCard() {
  const[result,setresult]=useState([])
  const[username,setusername]=useState()
  const[email,setemail]=useState()
  const[city,setcity]=useState()

  const handlesubmit=()=>{
setresult([...result,{Username:username,Email:email,City:city}])
  }
  return (
    <div style={{textAlign:'center',marginBlock:'100px'}}>
        <label>User Name</label>
        <input type="text" placeholder='Enter User name'  onChange={(e)=>setusername(e?.target?.value)} />
        <br /><br />
        <label>Email</label>
        <input type="text" placeholder='Enter Email id'  onChange={(e)=>setemail(e?.target?.value)}/><br /><br />
        <label>City</label>
        <input type="text" placeholder='Enter City here'  onChange={(e)=>setcity(e?.target?.value)}/><br /><br />
        <button onClick={handlesubmit}>Submit</button>
        <Task12Child result={result}></Task12Child>
    </div>
  )
}
