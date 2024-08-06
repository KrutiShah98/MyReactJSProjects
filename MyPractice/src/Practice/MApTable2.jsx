import React from 'react'

export default function MApTable2() {
    const myTable=["sr.no","subject","marks"]

    const myStyle={
        t1:{
      color:"black"
        }
    }
  return (
    <div>
        <h1 style={{color:"rebeccapurple"}}>This is mY TAble</h1> 
        {/* //inline css */}
      <tr style={myStyle.t1}>
        {
            myTable.map((e,i)=>{
                return <td key={i}>{e}</td>
            })
        }
      </tr>
    </div>
  )
}
