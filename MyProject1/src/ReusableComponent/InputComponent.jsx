import { Padding } from '@mui/icons-material'
import React from 'react'

export default function InputComponent(type,placeholder,onchange,label) {

    const mystyle={
        borderRadius:"50px",
        width:"150px",
        padding:"20px",
        margin:"20px"
    }
  return (
    <div>
        {label && label}
        <input type="text"
        placeholder={placeholder}
        onChange={onchange}
        style={mystyle} />
    </div>
  )
}
