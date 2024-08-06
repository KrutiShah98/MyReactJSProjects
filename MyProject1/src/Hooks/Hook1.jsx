import React, { useEffect, useState } from 'react'

export default function Hook1() {
    const[count,setCount]=useState("")
    const[num,setNum]=useState("")

    useEffect(()=>{
        console.log("use effect");
    })
    
  return (
    <div>
        <h1>{count}</h1>
        <h2>{num}</h2>
        <button onClick={()=>setCount(count+1)}>count</button>
        <button onClick={()=>setNum(num+1)}>num</button>

    </div>
  )
}
