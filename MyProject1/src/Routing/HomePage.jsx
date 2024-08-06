import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to ={"/Contact"}><p>CLick here for Contact Page</p></Link>
    </div>
  )
}
