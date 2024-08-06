import React from 'react'

export default function Map() {
    const myList = ["html","css","js"];

  return (
    <div>
        <ul>
            {
                myList.map((e,i)=>{
                 return<li key={i}>{e}</li>
                })
            }
        </ul>
    </div>
  )
}
