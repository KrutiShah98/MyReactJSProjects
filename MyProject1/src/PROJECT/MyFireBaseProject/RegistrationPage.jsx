import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function RegistrationPage() {
    const[name,setName]=useState();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[error,setError]=useState();
    const[msg,setMsg]=useState();

    let Navigate=useNavigate();

 const handleSubmit=async(e)=>{
e.preventDefault();
console.log('...> submit button clciked');

const userCredential=await createUserWithEmailAndPassword(auth,email,password)
const user=userCredential.user;
if(user)
  {
    await setDoc(doc(db,"Student",user.uid),{
      'name':name,
      'email':email,
    })
    console.log("Successfully record inserted");
    setMsg("Successfully record inserted");
  
 }}
  return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
          {msg && <p style={{color:"green"}}>{msg}</p>}
<input type="text" placeholder='Enter Username' onChange={(e)=>setName(e.target.value)} />
<br />
<input type="text" placeholder='Enter Email'onChange={(e)=>setEmail(e.target.value)} />
<br />
<input type="text" placeholder='Enter Password'onChange={(e)=>setPassword(e.target.value)} />
<br />
<button >Submit</button>
</form>
<p onClick={()=>Navigate("/Login")}>Alredy Regitered ? Click here for Login</p>
<Link to={"/Guest"}><h1> GUEST USERS </h1></Link>
    </div>
  )
}
