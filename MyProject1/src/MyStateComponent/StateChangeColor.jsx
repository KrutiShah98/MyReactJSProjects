import React, { useState } from 'react'

export default function StateChangeColor() {
const[bgcolor,setBgcolor] = useState("red");

  return (
    <div style={{backgroundColor:bgcolor}}>
        <h1>Hello</h1>

        <button onClick={()=> setBgcolor("blue")}>Change Color</button>
    </div>
  )
}
