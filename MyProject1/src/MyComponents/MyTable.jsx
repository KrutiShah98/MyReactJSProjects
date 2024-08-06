import React from 'react'

export default function MyTable() {
    const data= ["hii","kruti","shah"];

  return (
    <div>
        <table>
           
                <tbody>
                <thead>
                    <tr>
                        
                    {
                        data.map((e,i)=>{
                            return <td key={i}>{e}</td>
                        })
                    }
                        
                    </tr>
            </thead>

                </tbody>
        </table>
    </div>
  )
}
