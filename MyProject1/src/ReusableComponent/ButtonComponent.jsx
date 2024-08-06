import { Margin } from '@mui/icons-material'
import React from 'react'

export default function ButtonComponent(onclick,color,children) {
    const buttonstyle={
        backGroundColor: color || "red",
        color:"black",
width:"250px",
        margin:"20px",
        padding:"20px"

    }
  return (
    <div>
        <button onClick={onclick} style={buttonstyle}> {children}</button>
    </div>
  )
}
