import React, { useState } from 'react'

export default function UseCustomHook() {
    const [count,setCount]=useState(0);
    function addCount(){
             setCount(count+1);
         }
         function removeCount(){
             setCount(count-1);
         }
    
  return (
    <div>UseCustomHook</div>
  )
}
