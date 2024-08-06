import React, { useState } from 'react'

export default function Task8YeartoMD() {
    const[userinput,setuserinput]=useState("")
    const[result,setresult]=useState("")
    const[result2,setresult2]=useState("")

    const convert=()=>{
        let ytm=userinput*12;
        setresult(ytm);

        let mtd=userinput*360;
        setresult2(mtd);
        }

    
  return (
    <div>
      <hr />
      <h1>Year to month and days</h1>
<input type="number" name="" id="" placeholder='enter years here' value={userinput} onChange={(e)=>setuserinput(e.target.value)}/>
<button onClick={convert}>Convert</button>

<input type="number" value={result} placeholder='months'/>
<input type="number" value={result2} placeholder='days'/>


    </div>
  )
}
