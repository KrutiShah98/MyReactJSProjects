import React, { useMemo, useState } from 'react'

export default function UseMemoex1() {
    const[num1,setNum1]=useState(1);
    const[num2,setNum2]=useState(10);

    // function dosomething()
    // {
    //     console.warn("Doooo");
    //     return num1*10;
    // }
const useData=useMemo(()=>{
  console.warn("usememo");
  return num1*10;
},[num1]);
  return (
    <div>
        <h3>{num1}</h3>
        {/* <h3>do something : {dosomething()}</h3> */}
        <h3>{useData}</h3>
        <button onClick={()=>setNum1(num1+1)}>Count+1</button>

        <h3>{num2}</h3>
        <button onClick={()=>setNum2(num2+10)}>Count+10</button>

    </div>
  )
}
