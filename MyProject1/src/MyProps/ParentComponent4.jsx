import React, { useState } from 'react'
import Childcomponent4 from './Childcomponent4';

export default function ParentComponent4() {
    const[islogin,setlogin]=useState(false)
    const [msg,setmessage]=useState("My rect Component")

    const handleclick=()=>{
        console.log("click");
        console.log(islogin);
        setlogin(!islogin)
    }
  return (
    <div>
        <button onClick={handleclick}>click here</button>
        {
            islogin && <Childcomponent4 msg={msg}/>
        }
    </div>
  )
}
