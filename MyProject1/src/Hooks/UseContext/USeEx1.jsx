import React, { createContext, useState } from 'react'
import UseEx3 from './UseEx3';
const myContext=createContext
export const usercontext=createContext();

export default function USeEx1() {
const[data,setData]=useState("")

  return (
    <div>
<h3>1st Component</h3>
<input type="text" placeholder='Enter Data' onChange={(e)=>setData(e.target.value)} />
use
<UseEx3/>

    </div>
  )
}
