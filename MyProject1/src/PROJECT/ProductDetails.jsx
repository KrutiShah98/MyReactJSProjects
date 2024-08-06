/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
    const {id} = useParams();
    
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData= async()=>{
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        console.log(response.data);
    }

  return (
    <div>
        <h1>Product details : {id}</h1>
    </div>
  )
}
