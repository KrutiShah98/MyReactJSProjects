import React from 'react'

export default function FunctionArray() {
 const subjectlist = ["c","c++","java","python"];

//  Array.map((){
//     print(...)
//  })

return(
    <div>
        {subjectlist.map((e,i)=>{
            return <h1 key={i}>{e}</h1>
        })}
    </div>
)

}
