import React, { useEffect, useState } from 'react'

export default function Hook3() {
    const[data,setData]=useState(0);
useEffect(()=>{
    console.log("useeffect called");
},[]) //it invoke once in a program before intialization
  return (
    <div>{data}
    <button onClick={()=> setData(data+1)}>CLick here</button></div>
  )
}
