import React, { useContext } from 'react'
import {myContext} from './ComponentEx1'
export default function ComponentEx4() {
    let recode=useContext(myContext)
  return (
    <div>{recode.name}
    {recode.subject}</div>

  )
}
