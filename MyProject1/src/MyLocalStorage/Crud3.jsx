import React, { useState } from 'react'

export default function Crud3() {
    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const[record,setRecord]=useState("");
  return (
    <div>
        <form action="">
            <input type="text" placeholder='Type your Name' onChange={(e)=>setName(e.target.value)}/>
            <input type="number" placeholder='Type your Age' onChange={(e)=>setAge(e.target.value)}/>
            <button>Submit</button>

        </form>
        <table border={3}>
            <thead>
                <tr>
                    <td>NAME</td>
                    <td>AGE</td>
                    <td colSpan={2}>ACTION</td>
                </tr>
            </thead>
            <tbody>
                {record.map((i,e)=>{
                    return(
                        <tr key={e}>
                            <td>{name}</td>
                            <td>{age}</td>

                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}
