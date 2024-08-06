import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Link to={"/uselocation"}><button>Go to uselocation Ex</button></Link>
    </div>
  )
}
