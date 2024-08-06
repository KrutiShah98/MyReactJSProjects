import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function ReduxComponent1() {
    //local state

    const [name,setName]=useState("");

    let dispatch=useDispatch();
    let data=useSelector((state)=>{
        return state.counterkey.username
    })

    const saveHandler=()=>{
        dispatch(updateUsername(name))
        setName("")
    }
  return (
    <div>
<input type="text"
placeholder='Enter Username'
onChange={(e)=>setName(e.target.value)}
value={name}
 />
<button onClick={saveHandler}>Save</button>

<h1>{data}</h1>
    </div>
  )
}
