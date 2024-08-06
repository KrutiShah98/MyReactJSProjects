import React, { useState } from 'react'

export default function Class2Array() {
    const[myarray,setmyarray]=useState([])
    const[subject,setsubject]=useState('')

    const handlesubmit=()=>{
        setmyarray([...myarray,subject])
        setsubject("")
    }
  return (

    <div>
        <hr />
        <input type="text" placeholder='enter Subject' value={subject} onChange={(e)=>setsubject(e?.target?.value)} />
        <button onClick={handlesubmit}>Add</button>

        <br /><br />

        {
            myarray.map((e,i)=>{
                return <h2 key={i}>{e}</h2>
            })
        }
    </div>
  )
}
