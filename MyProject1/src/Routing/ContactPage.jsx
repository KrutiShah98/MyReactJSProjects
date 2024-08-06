import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactPage() {
  return (
    <div>
      <p>ContactPage</p>
      <Link to={"/About"}><p>About page</p></Link>
    </div>
  )
}
