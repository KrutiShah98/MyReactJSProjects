import React from 'react'
import { useLocation } from 'react-router-dom'

export default function UseLocation() {
    const location=useLocation();

  return (
    <div>
        <h1>UseLocation</h1>
    <p>{location.pathname}</p>
    <p>{location.search}</p>
    <p>{location.hash}</p>

    </div>
  )
}
