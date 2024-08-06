import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate=useNavigate();
  const handleButton=()=>{
    navigate("/contact")
  }
  return (
    <div>
      <h1>UseNavigate example:Home Page</h1>

      <Link to={"/contact"}><h3> Link:to contact page</h3></Link>
      <Link to={"/about"}><h3>Link:to contact page</h3></Link>

      <button onClick={handleButton}>Go to Contact page</button>
    </div>
  )
}
