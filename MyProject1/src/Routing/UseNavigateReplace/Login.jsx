import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate=useNavigate();

  return (
    <div><h1>Login</h1>
    <button onClick={()=>navigate("/Home",{replace:true})}>Sign IN</button>
    </div>
  )
}
