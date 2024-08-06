/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ProductDisplay() {
 const [productdata,setProductData] = useState([]);
 const navigate = useNavigate();
  useEffect(()=>{
        myfetchRecord();
  },[]) 

  const myfetchRecord = async() =>{
        const response =await axios.get("https://fakestoreapi.com/products")
        // console.log(response.data);
        setProductData(response.data);
  }

  if(productdata.length < 0)
    {
        return <h1>Loading.... </h1>
    }

  return (
    <div>
      <table border={2}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>image</th>
                    <th>title</th>
                    
                    <th>price</th>
                    <th>category</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {productdata.map((product,index)=>{
                    return <tr key={index}>
                            <td>{product.id}</td>
                            <td><img src={product.image} width={50} height={50}/></td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.category} {product.rating.rate}</td>
                            <td><button onClick={()=> navigate(`product/${product.id}`)}>View</button></td>
                    </tr>
                })}
            </tbody>
      </table>
    </div>
  )
}
