import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Output() {
    const location=useLocation();
    const {name}=location.state;

  return (
    <div>
        <h1>MSg from 1 st screen</h1>
    </div>
  )
}
