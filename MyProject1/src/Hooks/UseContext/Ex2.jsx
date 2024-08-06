import React from 'react'
import Ex3 from './Ex3'

export default function Ex2(props) {
  return (
    <div>
        {/* calling third component */}

        <h3>2nd Component</h3>
        <Ex3 msg={props.msg}/>
    </div>
  )
}
