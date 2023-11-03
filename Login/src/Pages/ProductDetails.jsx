import React, { useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom'


function ProductDetails() {
  const detail = useParams ();
  const id =detail.id;
  const[details,setDetails]=useState();
  const handleProduct=()=>{
    const details = JSON.parse(localStorage.getItem('products'));
    const get =details.filter((item)=> item.id == id);
    setDetails(get);
  }
  useEffect(()=>{
    handleProduct();
  },[])
  return (
    <div>
      {details && <img src={details[0]?.images[0]} alt=""/>
      }
      
      <h1>{details && details[0]?.title}</h1>
      <h1>{details && details[0]?.price}</h1>

      
    </div>
  )
}

export default ProductDetails
