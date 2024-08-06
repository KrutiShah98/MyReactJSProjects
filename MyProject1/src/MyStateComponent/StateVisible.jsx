import React, { useState } from 'react'

export default function StateVisible() {
    const[isVisible,setVisible]=useState(false);
const hanldebutton=()=>{
    // if(isVisible)
    // {
    //     setVisible(false)
    // }
    // else
    // {
    //     setVisible(true)
    // }
}
  return (
    <div>
    {
        isVisible?
        <h1>Hello Im visible</h1>
        :
        <h2>Now Hidden</h2>
    }
    <button onClick={()=>setVisible(!isVisible)}>change</button>
    </div>
  )
}
