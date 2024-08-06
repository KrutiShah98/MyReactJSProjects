import React from 'react'
import './Card.css'

export default function Task11ChildCard(props) {
  return (
    <div className='childcard'>
        <p>{props.username} <br />
        {props.subject}
        <br />
        {props.city}  <br />
        {props.email} <br />
        {props.gender} <br /></p>
    </div>
  )
}
