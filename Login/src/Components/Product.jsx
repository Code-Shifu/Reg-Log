import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Avatar from './Avatar'
import Home from './Home';
function Product() {
    const[Products,setProducts]=useState([]);
    function handleRequest(){
        axios.get('https://dummyjson.com/products')
        .then(res=>{
            localStorage.setItem('products', JSON.stringify(res.data.products))
            setProducts(res.data.products)
            console.log(res.data.products)
        })
    }
    useEffect(()=>{
      handleRequest();  
    },[])
  return (
    <div>
      
    <Home/>

      
    <p>
      {Products.length == 0 ?(
        <p>Loading......</p>
      ):(
        <div className='container pt-5'>
          <div className='row'>

            {Products
            .map((item,i)=>{
                return<Avatar item={item} key={i}/>
            })
            }
          </div>
        </div>
      )
      }  
    </p>        
    </div>
  )
}

export default Product
