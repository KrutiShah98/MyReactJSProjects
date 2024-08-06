import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

export default function ApiFetch() {
const [username,setUsername]=useState([])

useEffect(()=>{
    fetchApidata()
},[])

const fetchApidata=async()=>{
    try{
        const result=await axios.get("https://fakestoreapi.com/users")
        setUsername(result.data);
    }
    catch{
        console.log('error');
    }
}

  return (
    <div> 
        <table border={1}>
            <thead>
                <tr>
                    <td>id</td>
                    <td>First name</td>
                    <td>Last Name</td>
                    <td>Username</td>
                    <td>Email</td>
                    <td>City</td>

                </tr>
            </thead>
            <tbody>
{
    username.map((user)=>{
        return <tr key={user}>
            <td>{user.id}</td>
            <td>{user.name.firstname}</td>
            <td>{user.name.lastname}</td>

            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.address.city}</td>




        </tr>
    })
}
            </tbody>
        </table>
          </div>
  )
}
