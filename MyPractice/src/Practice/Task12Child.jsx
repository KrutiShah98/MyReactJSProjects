import React from 'react'

export default function Task12Child(props) {
  return (
    <div>
        <table border={"1px solid black"}>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
      
        {
            props.result.map((e,i)=>{
                return <tr >
                    <td>{e.Name}</td>
                    <td>{e.Email}</td>
                    <td>{e.City}</td>

                </tr>
            })
        }
          </table>
    </div>
  )
}
