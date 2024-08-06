import React, { useState } from 'react'

export default function StatebuttonColorCH() {
    


const[bgcolor,setBgcolor]=useState("orange");
  return (
    <div style={{backgroundColor:bgcolor,width:"500px",height:"100px"}}>

        <h1 style={{color:"white"}}>Change My color</h1>
        <div style={{margin:"70px 10px"}}>
        <button style={{padding:"10px"}} onClick={()=>setBgcolor("red")}>red</button>
        <button style={{padding:"10px"}} onClick={()=>setBgcolor("blue")}>blue</button>
        <button style={{padding:"10px"}} onClick={()=>setBgcolor("black")}>black</button>
        <button style={{padding:"10px"}} onClick={()=>setBgcolor("yellow")}>yellow</button>
        <button style={{padding:"10px"}} onClick={()=>setBgcolor("brown")}>brown</button>
        </div>
    </div>
  )
}
