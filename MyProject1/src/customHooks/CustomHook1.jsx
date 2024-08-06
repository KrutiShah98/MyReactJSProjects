import React, { useState } from 'react'

export default function CustomHook1() {

    // const [count,setCount]= useState(0);

    // function addCount(){
    //     setCount(count+1);
    // }
    // function removeCount(){
    //     setCount(count-1);
    // }

    const[count,addCount,removeCount]=useCustomHook()
  return (
    <div>{count}</div>
  )
}
