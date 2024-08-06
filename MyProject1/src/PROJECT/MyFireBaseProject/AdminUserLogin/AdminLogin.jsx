import { Button, TextField,Box } from '@mui/material'
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth} from '../../../firebaseConfig';
import './AllStyle.css';


export default function AdminLogin() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState();
  const navigate=useNavigate();
  
    const handlesubmit=async(e)=>{
      e.preventDefault();
  
      const userCredentials=await signInWithEmailAndPassword(auth,email,password)
      const user=userCredentials.user;
      console.log("user--->>",user);
    }
  return (
    <div>
            <div className='mainbg'>
              <h1 style={{textAlign:'center',paddingTop:'80px',color:'purple',fontFamily:"monospace"}}>Admin Login </h1>

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
           <Button variant="contained" type='submit' className="btn1" onClick={()=>navigate("/admindashboard")}>Login</Button>
           </Box>
    </div>
    </div>
  

    </div>
  )
}
