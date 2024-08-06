import React from 'react'
import {Link, useNavigate } from 'react-router-dom'

export default function Contact() {
  const navigate=useNavigate();
  return (
    <div>
      <h1>UseNavigate:Contact Page</h1>
      <h1 onClick={()=>navigate("/about")} style={{cursor:"pointer"}}>go to about page</h1>

      <Link to={"/"}><h3>Link back</h3></Link>
      <button onClick={()=>navigate(-1)}>GO back</button>
    </div>
  )
}
