import { Box, Button, Card, TextField, Typography } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import './AllStyle.css';


export default function AdminPage3() {
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const[password,setPassword]=useState();
  const [error,setError]=useState()

const navigate=useNavigate();

const handleSubmit=async(e)=>{
  e.preventDefault()
  console.log("Submiteed");

  try{
    const loginpage=await createUserWithEmailAndPassword(auth,email,password)
    const user=loginpage.user

    if(user){
      await setDoc(doc(db,"Student",user.uid),{
        'name':name,
        'email' :email,
      })
    }
  }catch(e){
    setError(e.message)
  }
}
useEffect(()=>{

},[])


  return (
    <div className='mainbg'>
    <div>
      <Box component='form' onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', width: '40%', m: '0 auto', padding: '20px', gap: 2 }}>
        <Typography variant='h5' sx={{ textAlign: 'center', color:'purple' }}>Registration Form</Typography>
        <TextField id="outlined-basic-name" type='text' label="Enter Name" variant="outlined" onChange={(e) => setName(e.target.value)} />
        <TextField id="outlined-basic-email" type='email' label="Enter Email-ID" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
        <TextField id="outlined-basic-password" type='password' label="Enter Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
        <Button variant="outlined" size="medium" type='submit' className='btn2'>Create Account</Button>
        <Typography sx={{ textAlign: 'center' }} onClick={() => navigate("/login")} >All Ready have An Account ? Login</Typography>
        <Typography sx={{ textAlign: 'center' }} onClick={() => navigate("/adminlogin")} >Admin Login?</Typography>

      </Box>
    </div>
    </div>
  )
}
