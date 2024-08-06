import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export default function Login() {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    const navigate=useNavigate();
    
const handlesubmit=async(e)=>{
    e.preventDefault();
    const userCredential=await signInWithEmailAndPassword(auth,email,password);
    const user=userCredential.user;
    // console.log(user.id);

    const userDoc=await getDoc(doc(db,"Student",user.uid));
    if(userDoc.exists){
        console.log(userDoc.data());
        console.log(userDoc.data().name);
        alert(`welcome ${userDoc.data().name}`);
        navigate("/dashboard" , {replace : true})
    }
    console.log(user.uid);
}
  return (
    <div>
         <form onSubmit={(e)=>handlesubmit(e)}>
        <input type="text" onChange={(e)=>setEmail(e.target.value) } placeholder='Enter Email' />
        <input type="text" onChange={(e)=>setPassword(e.target.value) } placeholder='Enter Password' />
<button type='submit'>Login</button>
        </form>
        <h4 onClick={()=>navigate("/")}>Go to register Page</h4>
    </div>
  )
}
