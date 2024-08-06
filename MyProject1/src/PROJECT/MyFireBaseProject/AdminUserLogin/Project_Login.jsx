import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { Navigate, useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getDoc } from 'firebase/firestore';
import { auth } from '../../../firebaseConfig';
import Box from '@mui/material/Box';

// import './Project_Login.css'
import './AllStyle.css';


export default function Project_Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState();
const navigate=useNavigate();

  const handlesubmit=async(e)=>{
    e.preventDefault();

    const userCredentials=await signInWithEmailAndPassword(auth,email,password)
    const user=userCredentials.user
    // const userDoc=await getDoc(doc(db,'Admin',user.uid));

    if(user){
      alert('Welcome')
      navigate("/userdashboard" , {replace:true})
    }
  }

  return (
    <div className='mainbg'>
              <h1 style={{textAlign:'center',paddingTop:'80px',color:'purple',fontFamily:"monospace"}}> Login </h1>

      <div className="container">
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 2, width: '40ch', color: 'white' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={(e)=>handlesubmit(e)}
      >
         <TextField
          id="outlined-password-input"
          label="Email"
          type="email"
          autoComplete="current-password" onChange={(e)=>setEmail(e.target.value)}
        /> <br />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"  onChange={(e)=>setPassword(e.target.value)}
        />
           <Button variant="contained" type='submit' className="btn1">Submit</Button>
           </Box>
    </div>
    </div>
  )
}
