import React, { useState } from 'react'

export default function Crud4() {
  const[name,setName]=useState("")
  const[subject,setSubject]=useState("")
  const[city,setCity]=useState("")
  const[student,setStudent]=useState([]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    let s={name,city,subject}
    setStudent([...student,s]);
    console.log(student);
    localStorage.setItem("Students",JSON.stringify(student));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
<input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
<input type="text" value={subject} onChange={(e)=>setSubject(e.target.value)}/>
<input type="text" value={city} onChange={(e)=>setCity(e.target.value)}/>

<button>Submit</button>

      </form>
    </div>
  )
}
