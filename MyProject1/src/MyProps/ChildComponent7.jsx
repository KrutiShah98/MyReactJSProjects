import React from 'react'

export default function ChildComponent7(props) {
  return (
    <div>
        {props.products.map((item,i)=>{
            return <div key={i}>
                <h3>{item.id}</h3>
                <h3>{item.name}</h3>
                <h3>{item.subject}</h3>

            </div>
        })}
    </div>
  )
}
