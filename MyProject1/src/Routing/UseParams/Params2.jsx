import React from 'react'
import { useParams } from 'react-router-dom'

export default function Params2() {
    const {id,name}=useParams();
  return (
    <div>
        <h1>Page 2</h1>

        <h3>ID={id}</h3>
        {name && <h3>Name={name}</h3>}
    </div>
  )
}
