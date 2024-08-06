import React, { useState } from 'react'

export default function StateRandom() {

    const [bgcolor,setBgcolor]=useState('')

    const colorArray=["blue","black","red","purple"];
    // blue=colorArray[0]

    const randomColorCh=()=>{
        const indexRandom=Math.floor(Math.random()*colorArray.length)
        console.log(indexRandom);
        setBgcolor(indexRandom);
    }
  return (
    <div style={{backgroundColor:colorArray[bgcolor],color:"wheat"}}>
    <h1>Hello</h1>

    <button onClick={randomColorCh}>change</button>
    </div>
  )
}
