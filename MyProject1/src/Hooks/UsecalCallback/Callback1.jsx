import { unstable_ClassNameGenerator } from '@mui/material'
import React, { useCallback, useState } from 'react'
import Component1 from './Component1';
import Component2 from './Component2';

export default function Callback1() {
const [count,setCount]=useState(0);
const [mylist,setList]=useState([]);

const addRecord=useCallback(()=>{
    setList([...mylist,"New Record"])
},[mylist])


  return (
    <div>
        {count}
        <Component1/>
        <button onClick={()=>setCount(count+1)}>COunt+1</button>
        <Component2 mylist={mylist} addRecord={addRecord}/>



    </div>
  )
}
