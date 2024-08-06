import React, { useState } from 'react'

export default function Task5Factorial() {
    const[factnumber,setfactnumber]=useState("")
    const[inpnum,setinputnum]=useState("")

    const printfactorial=()=>{
        let factorial = 1;
        for (let i = 1; i <= factnumber; i++) {
          factorial *= i;
        }
        setinputnum(factorial);
      }
    
  return (
    <div>
         <hr />
      <h1>factorial</h1>
        <input type="number" name="" id="" value={factnumber} onChange={(e)=>setfactnumber(e.target.value)} />
        <br /><br />
        <button onClick={printfactorial}>Factorial</button>
        <br />
        <h1>{inpnum}</h1>
    </div>
  )
}
