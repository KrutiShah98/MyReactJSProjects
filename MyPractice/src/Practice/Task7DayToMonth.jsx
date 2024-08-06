import React, { useState } from 'react'

export default function Task7DayToMonth() {
    const[userinput,setuserinput]=useState("")
    const[result,setresult]=useState("")
    const convert=()=>{
        let month= userinput/30;
        setresult(month);
    }
  return (
    <div>
         <hr />
      <h1>days to month</h1>
        <input type="number" name="" id="" placeholder='enter Days to convert into month' onChange={(e)=>setuserinput(e.target.value)} />
        <br /><br />
        <button onClick={convert}>Change to Month</button>
        <br />
        <h1>{result}</h1>
    </div>
  )
}
