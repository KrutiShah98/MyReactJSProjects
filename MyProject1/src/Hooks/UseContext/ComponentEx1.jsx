import React, { createContext, useState } from 'react'
import ComponentEx4 from './ComponentEx4';
//globally Declare context
export const myContext=createContext();
export default function ComponentEx1() {
    const[name,setName]=useState("")
    const[subject,setSubject]=useState("")

  return (
    <div>
<h1>Component1</h1>
<input type="text" placeholder='Enter name:' onChange={(e)=>setName(e.target.value)} />
<input type="text" placeholder='Enter Subject:' onChange={(e)=>setSubject(e.target.value)} />

<myContext.Provider value={{name,subject}}>
    <ComponentEx4/>
</myContext.Provider>
    </div>
  )
}
