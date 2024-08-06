import React, { useEffect, useRef, useState } from 'react'

export default function USeRef2() {
    const[count,setCount]=useState(0);
    const prevCount=useRef()
     useEffect(()=>{
        prevCount.current=count;
     },[count])
  return (
    <div>
        <p>Current Value:{count}</p>
        <p>Previous Value:{prevCount.current}</p>
        <button onClick={()=>setCount(count+1)}>CLick Here</button>
    </div>
  )
}
