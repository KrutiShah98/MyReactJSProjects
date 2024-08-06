import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Productdisplay() {
  const [productdata, setProductData] = useState([]);
  useEffect(() => {
    myfetchRecord();
  }, [])

  const myfetchRecord = async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
    // console.log(response.data);
    setProductData(response.data);
  }
  if(productdata.length < 0)
    {
      return <h1>Loading</h1>
    }
  return (
    <div>
      <h1>Product display</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>title</th>
            <th>price</th>
            <th>Category</th>
            <th>Action</th>
    
          </tr>
        </thead>

        <tbody>
          {productdata.map((product,index)=>{
            return <tr key={index}>
              <td>{product.id}</td>
              <td><img src="{product.id}" alt="" width={50} height={50} /></td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.category} {product.rating.rate}</td>
              <td><button onClick={()=>Navigate(`product/${product.id}`)}>View</button></td>
            </tr>
          })}
        </tbody>
      </table>
      </div>
  )
}
