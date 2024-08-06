import React from 'react'
import { useState } from 'react'

export default function StateStringEx() {
    const[name,setName]= useState("");
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={()=> setName("My React JS")}>
            change
        </button>
    </div>
  )
}
