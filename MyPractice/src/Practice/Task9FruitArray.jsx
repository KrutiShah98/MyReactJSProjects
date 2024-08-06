import React from 'react'
import { useState } from 'react'
import './fruit.css'

export default function Task9FruitArray() {
    
    // const mystyle={
    //     container:{
    //         background :url()
    //     }
    // }
    const[myarray,setmyarray]=useState([])
    const[fruit,setfruit]=useState('')

    const handleadd=()=>{
        setmyarray([...myarray,fruit])
        setfruit(" ")
    }

  return (
    <div className='container'> 
    <h1 className='heading'>Add your favourite fruit !!</h1> 
    <br /><br />   
     <input type="text" placeholder='Enter Fruit Name here!' className='inp' value={fruit} onChange={(e)=>setfruit(e?.target?.value)} />
    <button onClick={handleadd} className='btn'>Add </button>
     <br /><br />
     <ul>
     {
      myarray.map((e,i)=>{
        return <li className='list' key={i}>{e}</li>
      })
     }
     </ul>
    </div>
  )
}
