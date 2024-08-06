import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { db, storage } from '../../firebaseConfig';

export default function EditPage() {
    const {uid}=useParams();

    const[name,setName]=useState();
    const[profilepic,setProfilepic]=useState();
    const [email,setEmail]=useState();
    const navigate=useNavigate();
    useEffect(()=>{
        fetchUser();
    },[uid])

    const fetchUser=async()=>{
        const userData=await getDoc(doc(db,"Student",uid))

        setName(userData.data().name);
        setProfilepic(userData.data().profilepic);
        setEmail(userData.data().email)
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()

        await updateDoc(doc(db,"Student",uid),{
            'name':name
        })
        if(profilepic)
            {
                const storageRef=await ref(storage,`profilepictures/${uid}`);
                await uploadBytes(storageRef,profilepic);
                const downloadUrl=await getDownloadURL(storageRef)
                await updateDoc(doc(db,"Student",uid),{
                    'profilepic':downloadUrl
                })

            }
        navigate("/Guest",{replace:true})
    }
  return (
    <div>
<form onSubmit={(e)=>handleSubmit}>
    <h3>Edit User Details</h3>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='enter name' />
    <br /><br />
    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter EMail' />
    <br /><br />
    <input type="file" onChange={(e)=>setProfilepic(e.target.files[0])} />
    <button>Update</button>
    <br /><br />

</form>
    </div>
  )
}
