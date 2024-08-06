import React from 'react'
import ChildComponent6 from './ChildComponent6'

export default function ParentComponent6() {
    const mySubject=["c","c++","java","python"]
  return (
    // key is inbuilt prop in react js we can take it as a custom prop
    <div>
        <ChildComponent6 subject={mySubject}></ChildComponent6>
    </div>
  )
}
