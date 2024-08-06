import React from 'react'

export default function MyFunctionComponent5() {
 const subjectlist = ["c","python","react js","Mern stack"];

 return(
    <div>
        <ul>
            {
                subjectlist.map((e,i)=>{
                    return <li key={i}>{e}</li>
                })
            }
        </ul>
    </div>
 )
}
