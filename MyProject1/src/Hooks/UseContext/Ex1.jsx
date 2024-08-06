import React, { useState } from 'react'
import Ex2 from './Ex2'

export default function Ex1() {
    const[data,setdata]=useState('')
  return (
    <div>
        <input type="text" placeholder='enter data here' onChange={(e)=>setdata(e.target.value)} />
        <Ex2 msg={data}/>
    </div>
  )
}
