import React, { useState } from 'react'

export default function Task6MonthtoDays() {
    const[monthtoday,setmonthtoday]=useState("")

    const[result,setresult]=useState("")

    const convertdays=()=>{
        let final= monthtoday*30
        setresult(final)
    }
  return (
    <div>
         <hr />
      <h1>month to days</h1>
        <input type="number" name="" id="" onChange={(e)=>setmonthtoday(e.target.value)} />
        <button onClick={convertdays}>Change to days</button>
        <h1>{result}</h1>
    </div>
  )
}
